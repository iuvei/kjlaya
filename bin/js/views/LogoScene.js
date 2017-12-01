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
var LogoScene = /** @class */ (function (_super) {
    __extends(LogoScene, _super);
    function LogoScene() {
        var _this = _super.call(this) || this;
        Laya.loader.load([{ url: "res/atlas/loding.json", type: Loader.ATLAS }, { url: "loding/loding_bg.png", type: Loader.IMAGE }], Handler.create(_this, _this.onLoaded));
        return _this;
    }
    LogoScene.prototype.onLoaded = function () {
        var scene = new LoginScene();
        Laya.stage.addChild(scene);
    };
    return LogoScene;
}(ui.views.LogoSceneUI));
//# sourceMappingURL=LogoScene.js.map