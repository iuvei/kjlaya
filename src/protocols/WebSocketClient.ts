/**
* name 	

http://layaair.ldc.layabox.com/demo/?2d&Network&ProtocolBuffer

*/
module io {
	
	import Event = Laya.Event;
	import Socket = Laya.Socket;
	import Byte = Laya.Byte;
	import EventDispatcher = Laya.EventDispatcher; 
	import Browser = Laya.Browser;
	import Message = io.Message;

	class MsgCache {

		private msgId:number = 0;
		private buffer:ArrayBuffer = null;
		
		constructor(msgId:number,buffer:ArrayBuffer) {
			this.init(msgId,buffer);
		}

		public init(msgId:number,buffer:ArrayBuffer):void{
			this.msgId = msgId;
			this.buffer = buffer;
		}

		public clear():void{
			this.msgId = 0;
			this.buffer = null;
		}
		
		public MsgId():number{
			return this.msgId;
		}

		public Buffer():ArrayBuffer{
			return this.buffer;
		}   
	}

	export class WebSocketClient extends EventDispatcher {

		//网络
		private socket: Socket; 
		private bytes: Byte;

		private serverIp:string;
		private serverPort:number;

		//发送消息缓冲
		private sendMsgCache:Array<MsgCache>;
		private tempMsgCache:Array<MsgCache>;
		
		//是否已经弹出网络错误提示
		private isPopupNetErrorTips:boolean = false;
		//登录到服务器标识
		private isStartGame:boolean = false; 
		//是否检查心跳
		private isCheckNet:boolean = false;
		//心跳消息重连时间
		private heatTime:number = 4;
		//发送心跳时间
		private heartbeatCD:number = 4;
		//心跳回复时间间隔
		//上一次时间间隔
		private lastReplayInterval:number  = 0;
		//当前时间间隔
		private curReplayInterval:number  = 0; 
		//游戏中如果重连了3次,那么直接重连高防ip
		private totalReconnectTime:number  = 0; 
		//登录状态,有三次自动重连的机会
		private loginReconnectNum:number  = 0;
		//初始化连接状态
		private cureIPType:number  = 0; 
		
		private isReloginTimer:boolean =false;
		private isConnectSucc:boolean = false;
		
		
		private static client:WebSocketClient;

		constructor(){
			super(); 
			this.bytes = new Byte();
			this.sendMsgCache = new Array<MsgCache>();
			this.tempMsgCache = new Array<MsgCache>();

			WebSocketClient.client = this; 
            Laya.timer.frameLoop(1, this, this.update);  
		}   
		
		private update():void {  
			var delta = Laya.timer.delta*0.001; 
			this.sendMessage();
			if (this.isStartGame) { 
				if (this.heartbeatCD >= 0) {
					//登录服务器后开始发送心跳消息 
					this.heartbeatCD = this.heartbeatCD - delta
					if (this.heartbeatCD < 0) {
						//发送心跳
						this.sendHeartbeat(true)
					}
				}else{
					//心跳回复时间间隔
					this.curReplayInterval = this.curReplayInterval + delta
					
					if (this.isCheckNet && this.curReplayInterval >= 8 ){
						this.isCheckNet = false
						//心跳时间稍微长一些,等待重新登录消息返回
						this.heartbeatCD = this.heatTime
						//监测网络状况下,心跳回复超时发送重新登录消息 
						this.reloginServer()
					}
				}
			}
		}
		
		/**
		 * 向服务器发送心跳
		 * @param isCheckNet  检测和服务器的网络连接
		 */
		private sendHeartbeat(isCheckNet:boolean):void{
			if (!this.isStartGame){
				return
			}   
			this.push(Message.CG_HEARTBEAT,new Byte()); 
			this.curReplayInterval = 0 
			this.isCheckNet = isCheckNet
			console.log("发送心跳...");
			if (this.isCheckNet) {
				//防止重复发送心跳,直接进入等待回复状态
				this.heartbeatCD = -1
			}
		}
		
		private onRcvHeartbeat(msgTbl):void {
			this.heartbeatCD = this.heatTime;
			this.lastReplayInterval = this.curReplayInterval; 
			console.log("回复心跳...");
		}

		/**
		 * 登陆服务器之后设置为true
		 * @param isStartGame 
		 */
		public setIsStartGame(isStartGame):void{
			this.isStartGame = isStartGame 
			this.loginReconnectNum = 3 
			//心跳消息回复
			this.on(Message.GC_HEARTBEAT.toString(), this, this.onRcvHeartbeat);
		}
		
		/** 
		 * 
		 */
		private reloginServer():void {
			if (this.isReloginTimer) {
				Laya.timer.clear(this,this.reloginServer); 
				this.isReloginTimer = false;
			}	
			//链接关闭重连
			this.close(); 
			var result = this.connectResume()
			if (!result) {
				//游戏中3s后重连
				if(this.isStartGame && !this.isConnectSucc ){ 
					Laya.timer.frameOnce(3,this,this.reloginServer); 
 					this.isReloginTimer = true; 
				}	
				return;
			}
		}

		private connectResume():boolean {
			return this.connect(this.serverIp,this.serverPort);
		}
		
		public static Client():WebSocketClient {
			if(WebSocketClient.client){
				return WebSocketClient.client;
			}
			var client:WebSocketClient = new WebSocketClient()
			return client;
		}  

		public connect(serverIp:string,serverPort:number): boolean {
			if(!serverIp || !serverPort ){
				return false;
			}
			if(this.socket && this.socket.connected) {
				return true;  
			} 
			this.serverIp = serverIp;
			this.serverPort = serverPort;

			this.socket = new Socket();
			this.socket.connect(this.serverIp, this.serverPort);
			//this.socket.connectByUrl("ws://echo.websocket.org:80");
			console.log("链接网络:"+this.serverIp+":"+this.serverPort);
			this.socket.on(Event.OPEN, this, this.onSocketOpen);
			this.socket.on(Event.CLOSE, this, this.onSocketClose);
			this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
			this.socket.on(Event.ERROR, this, this.onConnectError); 

			return true;
		}

		public close(): void {

			if(this.socket && this.socket.connected){
				this.socket.close();  
			} 	
			
			this.isConnectSucc = false
			this.sendMsgCache = null;
			
			this.isPopupNetErrorTips = false 
		} 	
		
		//进行一些必须的善后处理,更包的时候,再把清理定时器等拿到这个函数内
		private clearSocket():void {

			//游戏中如果重连了3次,那么直接重连高防ip
			this.totalReconnectTime = 0
			//登录状态,有三次自动重连的机会
			this.loginReconnectNum = 0 

			if (this.isReloginTimer) {
				Laya.timer.clear(this,this.reloginServer); 
				this.isReloginTimer = false;
			}	

		}

		public isConnected(): boolean {
			if(!this.socket){
				return false;
			}
			return this.socket.connected;
		} 
		
		public push(msgId:number,message:Byte):void {   
			if(this.sendMsgCache==null){
				this.sendMsgCache = new Array<MsgCache>();
			}	
			var msg:MsgCache = null;
			if(this.tempMsgCache.length>0){
				msg = this.tempMsgCache.pop();
				msg.init(msgId,message.buffer);
			}else{
				msg = new MsgCache(msgId,message.buffer); 
			} 	
			this.sendMsgCache.push(msg);
		}

		private sendMessage():void{
			if(!this.isConnected()){  
				return;
			}
			if(this.sendMsgCache==null || this.sendMsgCache.length==0){
				return;
			}	
			var msg:MsgCache = this.sendMsgCache.pop();
			this.bytes.writeInt32(msg.MsgId());
			this.bytes.writeArrayBuffer(msg.Buffer()); 
			this.send(this.bytes.buffer);
			this.bytes.clear(); 
			msg.clear();
			this.tempMsgCache.push(msg);
		}
		
		private send(message: ArrayBuffer):void {  
			this.socket.send(message);   
			this.socket.flush(); 
			console.log("发送消息成功.")
		}

		private onSocketOpen(): void {
			console.log("Connected");
			
			this.isConnectSucc = true 
			this.totalReconnectTime = 3

			this.event(Event.OPEN); 
		}

		private onSocketClose(): void {
			console.log("Socket closed");
			
			this.isConnectSucc = false
			this.sendMsgCache = null;
 
			this.isPopupNetErrorTips = false 

			this.event(Event.CLOSE);
		}

		private onMessageReveived(message: any): void {  
			console.log("收到消息."+message);
			if (typeof message == "string") {
				this.event(Event.MESSAGE,message) 
			}	
			else if (message instanceof ArrayBuffer) { 
				var bytes:Byte = new Byte(message);
				var mesgId=bytes.getInt32();  
				this.event(mesgId.toString(),bytes) 
			} 	
			this.socket.input.clear();  
		}

		private onConnectError(e: Event): void {
			console.log("networkErrorEvt errorInfo:"); 
			if(this.isPopupNetErrorTips){
				return
			}  
			if (this.isStartGame){
				return
			}   
			var tipInfoKey:string = "连接被拒提示服务器维护中";
			
			if(this.totalReconnectTime < 3 ){
				this.totalReconnectTime = this.totalReconnectTime + 1 
				this.connectResume()
				return
			}
			
			console.log("弹出错误提示:"+tipInfoKey); 

			this.isPopupNetErrorTips = true
			
			this.event(Event.ERROR,e);
		}
		
	}
}