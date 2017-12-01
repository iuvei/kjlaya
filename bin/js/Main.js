var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var Main = /** @class */ (function () {
    // 程序入口
    function Main() {
        //初始化舞台大小
        Laya.init(1280, 0);
        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH; // "fixedwidth"; 
        //设置舞台背景色
        Laya.stage.bgColor = "#000000";
        /***
        Laya.init(1280, 720);
        //垂直居中对齐，另一种写法：
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        //水平居中对齐，另一种写法：
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        
        //保持原始高宽比的情况下，将舞台铺满屏幕，超出比例的部分会有黑边
        Laya.stage.scaleMode = "showall";
        //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
        Laya.stage.screenMode = "horizontal";
        ***/
        //调用性能统计面板方法，(0,0)为面板位置坐标
        Laya.Stat.show(0, 0);
        //Laya.loader.load([], Handler.create(this, this.onLoaded)); 
        //实例UI界面 
        Laya.loader.load([{ url: "res/atlas/loding.json", type: Loader.ATLAS }, { url: "loding/loding_bg.png", type: Loader.IMAGE }], Handler.create(this, this.onLoaded));
    }
    Main.prototype.onLoaded = function () {
        //实例UI界面
        var logoScene = new LogoScene();
        Laya.stage.addChild(logoScene);
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map