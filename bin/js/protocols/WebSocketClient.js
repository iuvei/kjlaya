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
*/
var io;
(function (io) {
    var Event = Laya.Event;
    var Socket = Laya.Socket;
    var Byte = Laya.Byte;
    var EventDispatcher = Laya.EventDispatcher;
    var WebSocketClient = /** @class */ (function (_super) {
        __extends(WebSocketClient, _super);
        function WebSocketClient() {
            var _this = _super.call(this) || this;
            _this.connect();
            return _this;
        }
        WebSocketClient.prototype.connect = function () {
            if (this.socket && this.socket.connected) {
                return;
            }
            this.socket = new Socket();
            //this.socket.connect("echo.websocket.org", 80);
            this.socket.connectByUrl("ws://echo.websocket.org:80");
            this.output = this.socket.output;
            this.socket.on(Event.OPEN, this, this.onSocketOpen);
            this.socket.on(Event.CLOSE, this, this.onSocketClose);
            this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
            this.socket.on(Event.ERROR, this, this.onConnectError);
        };
        WebSocketClient.prototype.close = function () {
            if (this.socket && this.socket.connected) {
                this.socket.close();
                this.socket.cleanSocket();
            }
        };
        WebSocketClient.prototype.send = function (message) {
            // 发送字符串
            this.socket.send(message);
            // 使用output.writeByte发送 
            for (var i = 0; i < message.length; ++i) {
                this.output.writeByte(message.charCodeAt(i));
            }
            this.socket.flush();
        };
        WebSocketClient.prototype.onSocketOpen = function () {
            console.log("Connected");
        };
        WebSocketClient.prototype.onSocketClose = function () {
            console.log("Socket closed");
        };
        WebSocketClient.prototype.onMessageReveived = function (message) {
            console.log("Message from server:");
            if (typeof message == "string") {
                console.log(message);
            }
            else if (message instanceof ArrayBuffer) {
                console.log(new Byte(message).readUTFBytes());
            }
            this.event("message", message);
            this.socket.input.clear();
        };
        WebSocketClient.prototype.onConnectError = function (e) {
            console.log("error");
        };
        return WebSocketClient;
    }(EventDispatcher));
})(io || (io = {}));
//# sourceMappingURL=WebSocketClient.js.map