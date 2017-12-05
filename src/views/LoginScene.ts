
import WebSocketClient = io.WebSocketClient; 

class LoginScene  extends ui.views.LoginSceneUI {
	
	private client:WebSocketClient; 

	private Protobuf:any = Laya.Browser.window.protobuf;

	constructor() {
		super(); 
		this.btnLoginWX.on(laya.events.Event.CLICK, this, this.onLoginWX);  
		
		this.client = WebSocketClient.Client(); 
		this.client.on(Laya.Event.OPEN,this,this.onOpen);
		this.client.on(Laya.Event.CLOSE,this,this.onClose);
		this.client.on(Laya.Event.ERROR,this,this.onError); 

		this.client.on(io.Message.GC_LOGIN.toString(),this,this.onRcvLogin)
		this.client.on(io.Message.GC_LOGIN_SERVER.toString(),this,this.onRcvLoginServer)
		
		this.btnClose.on(laya.events.Event.CLICK,this,this.onTestClose);
		this.btnConect.on(laya.events.Event.CLICK,this,this.onTeskConect);
		this.btnSend.on(laya.events.Event.CLICK,this,this.onTeskSend);

		this.Protobuf.load("res/protos/awesome.proto", this.onAssetsLoaded);
	} 	

	private AwesomeMessage:any;

	private onAssetsLoaded(err:any, root:any):void
	{
		if (err)
			throw err;
		// Obtain a message type
		this.AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");  
	}
	
	onOpen():void{
		console.log("Login open");
	}
	onClose():void{
		console.log("Login close"); 
	}
	onError(e: Event):void{
		console.log("Login error");
	}
	onLoginWX():void{   
		Laya.loader.load([{ url: "res/atlas/主界面.json", type: Loader.ATLAS },{url: "主界面/loding_bg.png", type: Loader.IMAGE}], Handler.create(this, this.onLoaded)); 
	}
	onLoaded() : void {  
		var scene:HallScene =  new HallScene(); 
		Laya.stage.addChild(scene);
	}

	/**
	 * 登陆游戏
	 * @param msgTbl 
	 */
	onRcvLogin(msgTbl:Laya.Byte):void { 
		// Decode an Uint8Array (browser) or Buffer (node) to a message
		var message:any = this.AwesomeMessage.decode(msgTbl.buffer);
		// ... do something with message 
		console.log(message)
		this.client.push(io.Message.GC_LOGIN_SERVER,new Laya.Byte());
		console.log("登陆界面->登陆成功.");
	}

	/**
	 * 链接游戏大厅
	 * @param msgTbl 
	 */
	onRcvLoginServer(msgTbl:Laya.Byte):void{
		this.client.setIsStartGame(true) 
		console.log("登陆界面->链接服务器成功.");
	}
	
	onTeskConect():void{
		this.client.connect("echo.websocket.org",80); 
	}
	onTeskSend():void{ 
		
		// Create a new message
		var message:any = this.AwesomeMessage.create(
		{
			awesomeField: "AwesomeString"
		});
		
		// Verify the message if necessary (i.e. when possibly incomplete or invalid)
		var errMsg:any = this.AwesomeMessage.verify(message);
		if (errMsg)
			throw Error(errMsg);

		// Encode a message to an Uint8Array (browser) or Buffer (node)
		var buffer:any = this.AwesomeMessage.encode(message).finish();
		var byte:Laya.Byte = new Laya.Byte(buffer);
		console.log("byte.length="+byte.length);
		this.client.push(io.Message.CG_LOGIN,byte);
	}
	onTestClose():void{
		if (this.client.isConnected()){ 
			this.client.close(); 
		}
	}
}