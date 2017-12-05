var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name

http://layaair.ldc.layabox.com/demo/?2d&Network&ProtocolBuffer

*/
var io;
(function (io) {
    var Event = Laya.Event;
    var Socket = Laya.Socket;
    var Byte = Laya.Byte;
    var EventDispatcher = Laya.EventDispatcher;
    var Message = io.Message;
    var MsgCache = /** @class */ (function () {
        function MsgCache(msgId, buffer) {
            this.msgId = 0;
            this.buffer = null;
            this.init(msgId, buffer);
        }
        MsgCache.prototype.init = function (msgId, buffer) {
            this.msgId = msgId;
            this.buffer = buffer;
        };
        MsgCache.prototype.clear = function () {
            this.msgId = 0;
            this.buffer = null;
        };
        MsgCache.prototype.MsgId = function () {
            return this.msgId;
        };
        MsgCache.prototype.Buffer = function () {
            return this.buffer;
        };
        return MsgCache;
    }());
    var WebSocketClient = /** @class */ (function (_super) {
        __extends(WebSocketClient, _super);
        function WebSocketClient() {
            var _this = _super.call(this) || this;
            //是否已经弹出网络错误提示
            _this.isPopupNetErrorTips = false;
            //登录到服务器标识
            _this.isStartGame = false;
            //是否检查心跳
            _this.isCheckNet = false;
            //心跳消息重连时间
            _this.heatTime = 4;
            //发送心跳时间
            _this.heartbeatCD = 4;
            //心跳回复时间间隔
            //上一次时间间隔
            _this.lastReplayInterval = 0;
            //当前时间间隔
            _this.curReplayInterval = 0;
            //游戏中如果重连了3次,那么直接重连高防ip
            _this.totalReconnectTime = 0;
            //登录状态,有三次自动重连的机会
            _this.loginReconnectNum = 0;
            //初始化连接状态
            _this.cureIPType = 0;
            _this.isReloginTimer = false;
            _this.isConnectSucc = false;
            _this.bytes = new Byte();
            _this.sendMsgCache = new Array();
            _this.tempMsgCache = new Array();
            WebSocketClient.client = _this;
            Laya.timer.frameLoop(1, _this, _this.update);
            return _this;
        }
        WebSocketClient.prototype.update = function () {
            var delta = Laya.timer.delta * 0.001;
            this.sendMessage();
            if (this.isStartGame) {
                if (this.heartbeatCD >= 0) {
                    //登录服务器后开始发送心跳消息 
                    this.heartbeatCD = this.heartbeatCD - delta;
                    if (this.heartbeatCD < 0) {
                        //发送心跳
                        this.sendHeartbeat(true);
                    }
                }
                else {
                    //心跳回复时间间隔
                    this.curReplayInterval = this.curReplayInterval + delta;
                    if (this.isCheckNet && this.curReplayInterval >= 8) {
                        this.isCheckNet = false;
                        //心跳时间稍微长一些,等待重新登录消息返回
                        this.heartbeatCD = this.heatTime;
                        //监测网络状况下,心跳回复超时发送重新登录消息 
                        this.reloginServer();
                    }
                }
            }
        };
        /**
         * 向服务器发送心跳
         * @param isCheckNet  检测和服务器的网络连接
         */
        WebSocketClient.prototype.sendHeartbeat = function (isCheckNet) {
            if (!this.isStartGame) {
                return;
            }
            this.push(Message.CG_HEARTBEAT, new Byte());
            this.curReplayInterval = 0;
            this.isCheckNet = isCheckNet;
            console.log("发送心跳...");
            if (this.isCheckNet) {
                //防止重复发送心跳,直接进入等待回复状态
                this.heartbeatCD = -1;
            }
        };
        WebSocketClient.prototype.onRcvHeartbeat = function (msgTbl) {
            this.heartbeatCD = this.heatTime;
            this.lastReplayInterval = this.curReplayInterval;
            console.log("回复心跳...");
        };
        /**
         * 登陆服务器之后设置为true
         * @param isStartGame
         */
        WebSocketClient.prototype.setIsStartGame = function (isStartGame) {
            this.isStartGame = isStartGame;
            this.loginReconnectNum = 3;
            //心跳消息回复
            this.on(Message.GC_HEARTBEAT.toString(), this, this.onRcvHeartbeat);
        };
        /**
         *
         */
        WebSocketClient.prototype.reloginServer = function () {
            if (this.isReloginTimer) {
                Laya.timer.clear(this, this.reloginServer);
                this.isReloginTimer = false;
            }
            //链接关闭重连
            this.close();
            var result = this.connectResume();
            if (!result) {
                //游戏中3s后重连
                if (this.isStartGame && !this.isConnectSucc) {
                    Laya.timer.frameOnce(3, this, this.reloginServer);
                    this.isReloginTimer = true;
                }
                return;
            }
        };
        WebSocketClient.prototype.connectResume = function () {
            return this.connect(this.serverIp, this.serverPort);
        };
        WebSocketClient.Client = function () {
            if (WebSocketClient.client) {
                return WebSocketClient.client;
            }
            var client = new WebSocketClient();
            return client;
        };
        WebSocketClient.prototype.connect = function (serverIp, serverPort) {
            if (!serverIp || !serverPort) {
                return false;
            }
            if (this.socket && this.socket.connected) {
                return true;
            }
            this.serverIp = serverIp;
            this.serverPort = serverPort;
            this.socket = new Socket();
            this.socket.connect(this.serverIp, this.serverPort);
            //this.socket.connectByUrl("ws://echo.websocket.org:80");
            console.log("链接网络:" + this.serverIp + ":" + this.serverPort);
            this.socket.on(Event.OPEN, this, this.onSocketOpen);
            this.socket.on(Event.CLOSE, this, this.onSocketClose);
            this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
            this.socket.on(Event.ERROR, this, this.onConnectError);
            return true;
        };
        WebSocketClient.prototype.close = function () {
            if (this.socket && this.socket.connected) {
                this.socket.close();
            }
            this.isConnectSucc = false;
            this.sendMsgCache = null;
            this.isPopupNetErrorTips = false;
        };
        //进行一些必须的善后处理,更包的时候,再把清理定时器等拿到这个函数内
        WebSocketClient.prototype.clearSocket = function () {
            //游戏中如果重连了3次,那么直接重连高防ip
            this.totalReconnectTime = 0;
            //登录状态,有三次自动重连的机会
            this.loginReconnectNum = 0;
            if (this.isReloginTimer) {
                Laya.timer.clear(this, this.reloginServer);
                this.isReloginTimer = false;
            }
        };
        WebSocketClient.prototype.isConnected = function () {
            if (!this.socket) {
                return false;
            }
            return this.socket.connected;
        };
        WebSocketClient.prototype.push = function (msgId, message) {
            if (this.sendMsgCache == null) {
                this.sendMsgCache = new Array();
            }
            var msg = null;
            if (this.tempMsgCache.length > 0) {
                msg = this.tempMsgCache.pop();
                msg.init(msgId, message.buffer);
            }
            else {
                msg = new MsgCache(msgId, message.buffer);
            }
            this.sendMsgCache.push(msg);
        };
        WebSocketClient.prototype.sendMessage = function () {
            if (!this.isConnected()) {
                return;
            }
            if (this.sendMsgCache == null || this.sendMsgCache.length == 0) {
                return;
            }
            var msg = this.sendMsgCache.pop();
            this.bytes.writeInt32(msg.MsgId());
            this.bytes.writeArrayBuffer(msg.Buffer());
            this.send(this.bytes.buffer);
            this.bytes.clear();
            msg.clear();
            this.tempMsgCache.push(msg);
        };
        WebSocketClient.prototype.send = function (message) {
            this.socket.send(message);
            this.socket.flush();
            console.log("发送消息成功.");
        };
        WebSocketClient.prototype.onSocketOpen = function () {
            console.log("Connected");
            this.isConnectSucc = true;
            this.totalReconnectTime = 3;
            this.event(Event.OPEN);
        };
        WebSocketClient.prototype.onSocketClose = function () {
            console.log("Socket closed");
            this.isConnectSucc = false;
            this.sendMsgCache = null;
            this.isPopupNetErrorTips = false;
            this.event(Event.CLOSE);
        };
        WebSocketClient.prototype.onMessageReveived = function (message) {
            console.log("收到消息." + message);
            if (typeof message == "string") {
                this.event(Event.MESSAGE, message);
            }
            else if (message instanceof ArrayBuffer) {
                var bytes = new Byte(message);
                var mesgId = bytes.getInt32();
                this.event(mesgId.toString(), bytes);
            }
            this.socket.input.clear();
        };
        WebSocketClient.prototype.onConnectError = function (e) {
            console.log("networkErrorEvt errorInfo:");
            if (this.isPopupNetErrorTips) {
                return;
            }
            if (this.isStartGame) {
                return;
            }
            var tipInfoKey = "连接被拒提示服务器维护中";
            if (this.totalReconnectTime < 3) {
                this.totalReconnectTime = this.totalReconnectTime + 1;
                this.connectResume();
                return;
            }
            console.log("弹出错误提示:" + tipInfoKey);
            this.isPopupNetErrorTips = true;
            this.event(Event.ERROR, e);
        };
        return WebSocketClient;
    }(EventDispatcher));
    io.WebSocketClient = WebSocketClient;
})(io || (io = {}));
//# sourceMappingURL=WebSocketClient.js.map