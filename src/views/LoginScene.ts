class LoginScene  extends ui.views.LoginSceneUI {
	constructor() {
		super(); 
		this.btnLoginWX.on(laya.events.Event.CLICK, this, this.onLoginWX); 
	}
	
	onLoginWX():void{
		Laya.loader.load([{ url: "res/atlas/主界面.json", type: Loader.ATLAS },{url: "主界面/loding_bg.png", type: Loader.IMAGE}], Handler.create(this, this.onLoaded)); 
	}
	
	onLoaded() : void {  
		var scene:HallScene =  new HallScene(); 
		Laya.stage.addChild(scene);
	}

}