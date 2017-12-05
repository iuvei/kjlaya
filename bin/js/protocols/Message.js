/**
* name
*/
var io;
(function (io) {
    var Message = /** @class */ (function () {
        function Message() {
        }
        Message.CG_HEARTBEAT = 1000;
        Message.CG_LOGIN = 1001;
        Message.CG_LOGIN_SERVER = 1002;
        Message.GC_HEARTBEAT = 1000;
        Message.GC_LOGIN = 1001;
        Message.GC_LOGIN_SERVER = 1002;
        return Message;
    }());
    io.Message = Message;
})(io || (io = {}));
//# sourceMappingURL=Message.js.map