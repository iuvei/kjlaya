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
var LoginScene = /** @class */ (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this) || this;
        _this.btnLoginWX.on(laya.events.Event.CLICK, _this, _this.onLoginWX);
        return _this;
    }
    LoginScene.prototype.onLoginWX = function () {
        Laya.loader.load([{ url: "res/atlas/主界面.json", type: Loader.ATLAS }, { url: "主界面/loding_bg.png", type: Loader.IMAGE }], Handler.create(this, this.onLoaded));
    };
    LoginScene.prototype.onLoaded = function () {
        var scene = new HallScene();
        Laya.stage.addChild(scene);
    };
    return LoginScene;
}(ui.views.LoginSceneUI));
//# sourceMappingURL=LoginScene.js.map