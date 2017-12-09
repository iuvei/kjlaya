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
var WebSocketClient = io.WebSocketClient;
var LoginScene = /** @class */ (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this) || this;
        _this.Protobuf = Laya.Browser.window.protobuf;
        _this.btnLoginWX.on(laya.events.Event.CLICK, _this, _this.onLoginWX);
        _this.client = WebSocketClient.Client();
        _this.client.on(Laya.Event.OPEN, _this, _this.onOpen);
        _this.client.on(Laya.Event.CLOSE, _this, _this.onClose);
        _this.client.on(Laya.Event.ERROR, _this, _this.onError);
        _this.client.on(io.Message.GC_LOGIN.toString(), _this, _this.onRcvLogin);
        _this.client.on(io.Message.GC_LOGIN_SERVER.toString(), _this, _this.onRcvLoginServer);
        _this.btnClose.on(laya.events.Event.CLICK, _this, _this.onTestClose);
        _this.btnConect.on(laya.events.Event.CLICK, _this, _this.onTeskConect);
        _this.btnSend.on(laya.events.Event.CLICK, _this, _this.onTeskSend);
        _this.Protobuf.load("res/protos/awesome.proto", _this.onAssetsLoaded);
        return _this;
    }
    LoginScene.prototype.onAssetsLoaded = function (err, root) {
        if (err)
            throw err;
        // Obtain a message type
        this.awesomeMessage = root.lookup("awesomepackage.AwesomeMessage");
        console.log("this.awesomeMessage...");
    };
    LoginScene.prototype.onOpen = function () {
        console.log("Login open");
    };
    LoginScene.prototype.onClose = function () {
        console.log("Login close");
    };
    LoginScene.prototype.onError = function (e) {
        console.log("Login error");
    };
    LoginScene.prototype.onLoginWX = function () {
        Laya.loader.load([{ url: "res/atlas/主界面.json", type: Loader.ATLAS }, { url: "主界面/loding_bg.png", type: Loader.IMAGE }], Handler.create(this, this.onLoaded));
    };
    LoginScene.prototype.onLoaded = function () {
        var scene = new HallScene();
        Laya.stage.addChild(scene);
    };
    /**
     * 登陆游戏
     * @param msgTbl
     */
    LoginScene.prototype.onRcvLogin = function (msgTbl) {
        // Decode an Uint8Array (browser) or Buffer (node) to a message
        var message = this.awesomeMessage.decode(msgTbl.buffer);
        // ... do something with message 
        console.log(message);
        this.client.push(io.Message.GC_LOGIN_SERVER, new Laya.Byte());
        console.log("登陆界面->登陆成功.");
    };
    /**
     * 链接游戏大厅
     * @param msgTbl
     */
    LoginScene.prototype.onRcvLoginServer = function (msgTbl) {
        this.client.setIsStartGame(true);
        console.log("登陆界面->链接服务器成功.");
    };
    LoginScene.prototype.onTeskConect = function () {
        this.client.connect("echo.websocket.org", 80);
    };
    LoginScene.prototype.onTeskSend = function () {
        // Create a new message
        var message = this.awesomeMessage.create({
            awesomeField: "AwesomeString"
        });
        // Verify the message if necessary (i.e. when possibly incomplete or invalid)
        var errMsg = this.awesomeMessage.verify(message);
        if (errMsg)
            throw Error(errMsg);
        // Encode a message to an Uint8Array (browser) or Buffer (node)
        var buffer = this.awesomeMessage.encode(message).finish();
        var byte = new Laya.Byte(buffer);
        console.log("byte.length=" + byte.length);
        this.client.push(io.Message.CG_LOGIN, byte);
    };
    LoginScene.prototype.onTestClose = function () {
        if (this.client.isConnected()) {
            this.client.close();
        }
    };
    return LoginScene;
}(ui.views.LoginSceneUI));
//# sourceMappingURL=LoginScene.js.map