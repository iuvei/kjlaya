class LogoScene extends ui.views.LogoSceneUI {
	
	constructor() {
		super();  
		Laya.loader.load([{ url: "res/atlas/loding.json", type: Loader.ATLAS },{ url: "res/atlas/comp.json", type: Loader.ATLAS },{url: "loding/loding_bg.png", type: Loader.IMAGE}], Handler.create(this, this.onLoaded)); 
	}
	
	onLoaded() : void {  
		var scene:LoginScene =  new LoginScene(); 
		Laya.stage.addChild(scene);
	}
	
}