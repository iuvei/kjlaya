
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);
        }
    }
}

module ui.views.game.base.hall {
    export class CreateRoomUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"创建房间和帮助/创建房间背景.png","centerY":0.5,"centerX":0.5}},{"type":"Image","props":{"y":18,"x":37,"skin":"创建房间和帮助/标题_创建房间.png"}},{"type":"Button","props":{"y":5,"x":1212,"stateNum":1,"skin":"通用/btn_关闭.png"}},{"type":"Image","props":{"y":625,"x":387,"skin":"创建房间和帮助/创建房间_开关按钮_off.png"}},{"type":"Image","props":{"y":576,"x":280,"width":960,"skin":"创建房间和帮助/分割线.png"}},{"type":"Button","props":{"y":609,"x":946,"stateNum":1,"skin":"创建房间和帮助/btn_创建房间.png"}},{"type":"Button","props":{"y":610,"x":602,"stateNum":1,"skin":"创建房间和帮助/btn_代开房.png"}},{"type":"Button","props":{"y":635,"x":17,"stateNum":1,"skin":"创建房间和帮助/btn_更多玩法.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.game.base.hall.CreateRoomUI.uiView);
        }
    }
}

module ui.views.game.base.hall {
    export class RoomOptionsUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.game.base.hall.RoomOptionsUI.uiView);
        }
    }
}

module ui.views.game.base.hall {
    export class RoomSelectUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":209,"height":627},"child":[{"type":"CheckBox","props":{"y":0,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_100张_xz.png"}},{"type":"CheckBox","props":{"y":84,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_三人推倒胡_xz.png"}},{"type":"CheckBox","props":{"y":167,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_二人推倒胡_xz.png"}},{"type":"CheckBox","props":{"y":251,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_做牌推倒胡_xz.png"}},{"type":"CheckBox","props":{"y":334,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_惠州庄补花_xz.png"}},{"type":"CheckBox","props":{"y":418,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_推倒胡_xz.png"}},{"type":"CheckBox","props":{"y":501,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_揭阳麻将_xz.png"}},{"type":"CheckBox","props":{"y":585,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_梅州红中王_xz.png"}},{"type":"CheckBox","props":{"y":669,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_潮汕麻将_xz.png"}},{"type":"CheckBox","props":{"y":752,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_百搭鸡胡_xz.png"}},{"type":"CheckBox","props":{"y":836,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_饶平麻将_xz.png"}},{"type":"CheckBox","props":{"y":919,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_鸡平胡_xz.png"}},{"type":"CheckBox","props":{"y":1003,"x":0,"stateNum":1,"skin":"创建房间和帮助/btn_鸡胡补花_xz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.game.base.hall.RoomSelectUI.uiView);
        }
    }
}

module ui.views.game.base.room {
    export class RoomSceneUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"麻将桌/桌布_绿色.png"}},{"type":"Image","props":{"skin":"麻将桌/底盘.png","centerY":0.5,"centerX":0.5},"child":[{"type":"Image","props":{"y":82,"x":10,"skin":"麻将桌/东家_xz.png"}},{"type":"Image","props":{"y":9,"x":3,"skin":"麻将桌/北家_xz.png"}},{"type":"Image","props":{"y":9,"x":82,"skin":"麻将桌/南家_xz.png"}},{"type":"Image","props":{"y":1,"x":9,"skin":"麻将桌/西家_xz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.game.base.room.RoomSceneUI.uiView);
        }
    }
}

module ui.views {
    export class HallSceneUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"主界面/主界面_bg.png"}},{"type":"Image","props":{"y":600,"x":0,"skin":"主界面/底下导航底.png"}},{"type":"Button","props":{"y":178,"x":669,"stateNum":1,"skin":"主界面/btn_创建房间.png"}},{"type":"Button","props":{"y":178,"x":938,"stateNum":1,"skin":"主界面/btn_加入房间.png"}},{"type":"Button","props":{"y":380,"x":678,"stateNum":1,"skin":"主界面/btn_我的房间.png"}},{"type":"Button","props":{"y":100,"x":338,"stateNum":1,"skin":"主界面/btn_比赛场.png"}},{"type":"Button","props":{"y":380,"x":942,"stateNum":1,"skin":"主界面/btn_牌九游戏.png"}},{"type":"Image","props":{"y":149,"x":1217,"skin":"主界面/右边菜单_底.png"},"child":[{"type":"Button","props":{"y":88,"x":22,"stateNum":1,"skin":"主界面/btn_菜单.png"}},{"type":"Button","props":{"y":258,"x":20,"stateNum":1,"skin":"主界面/btn_更多游戏.png"}}]},{"type":"Button","props":{"y":177,"x":670,"stateNum":1,"skin":"主界面/btn_返回房间.png"}},{"type":"Image","props":{"y":585,"x":18,"skin":"主界面/icon_免费房卡.png"}},{"type":"Image","props":{"y":585,"x":337,"skin":"主界面/icon_加我.png"}},{"type":"Image","props":{"y":585,"x":178,"skin":"主界面/icon_商城.png"}},{"type":"Image","props":{"y":624,"x":568,"skin":"主界面/icon_活动.png"}},{"type":"Image","props":{"y":624,"x":671,"skin":"主界面/icon_消息.png"}},{"type":"Image","props":{"y":624,"x":774,"skin":"主界面/icon_玩法.png"}},{"type":"Image","props":{"y":624,"x":877,"skin":"主界面/icon_绑定.png"}},{"type":"Image","props":{"y":624,"x":981,"skin":"主界面/icon_设置.png"}},{"type":"Image","props":{"y":624,"x":1084,"skin":"主界面/icon_战绩.png"}},{"type":"Image","props":{"y":624,"x":1187,"skin":"主界面/icon_分享.png"}},{"type":"Image","props":{"y":154,"x":25,"skin":"主界面/公告底.png"},"child":[{"type":"Image","props":{"y":22,"x":34,"skin":"主界面/zi_赛事_xz.png"}},{"type":"Image","props":{"y":21,"x":127,"skin":"主界面/zi_活动_hui.png"}},{"type":"Image","props":{"y":21,"x":217,"skin":"主界面/zi_公告_hui.png"}},{"type":"Image","props":{"y":69,"x":11,"skin":"主界面/公告轮播图1.png"}},{"type":"Image","props":{"y":382,"x":202,"skin":"主界面/dian_hui.png"}},{"type":"Image","props":{"y":382,"x":73,"skin":"主界面/dian_hui.png"}},{"type":"Image","props":{"y":380,"x":136,"skin":"主界面/dian_xz.png"}}]},{"type":"Image","props":{"y":37,"x":549,"skin":"主界面/房卡底.png"},"child":[{"type":"Image","props":{"y":-7,"x":-20,"skin":"主界面/icon_房卡.png"}},{"type":"Button","props":{"y":-7,"x":206,"stateNum":1,"skin":"主界面/btn_购买.png"}}]},{"type":"Image","props":{"y":32,"x":944,"skin":"主界面/房卡底.png"},"child":[{"type":"Image","props":{"y":-7,"x":-20,"skin":"主界面/礼券.png"}},{"type":"Button","props":{"y":-7,"x":206,"stateNum":1,"skin":"主界面/btn_购买.png"}}]},{"type":"Image","props":{"y":21,"x":49,"skin":"主界面/头像信息底.png"}},{"type":"Image","props":{"y":33,"x":61,"skin":"主界面/头像框.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.HallSceneUI.uiView);
        }
    }
}

module ui.views {
    export class JionRoomUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"通用/底板_中.png","centerY":0.5,"centerX":0.5}},{"type":"Image","props":{"y":87,"x":427,"skin":"加入房间/标题_加入房间.png","centerX":0.5}},{"type":"Image","props":{"y":156,"skin":"加入房间/加入房间_密码输入底.png","centerX":0.5}},{"type":"Button","props":{"y":255,"x":258,"stateNum":1,"skin":"加入房间/btn_加入房间_1.png"}},{"type":"Button","props":{"y":255,"x":521,"stateNum":1,"skin":"加入房间/btn_加入房间_2.png"}},{"type":"Button","props":{"y":255,"x":784,"stateNum":1,"skin":"加入房间/btn_加入房间_3.png"}},{"type":"Button","props":{"y":350,"x":258,"stateNum":1,"skin":"加入房间/btn_加入房间_4.png"}},{"type":"Button","props":{"y":350,"x":521,"stateNum":1,"skin":"加入房间/btn_加入房间_5.png"}},{"type":"Button","props":{"y":350,"x":784,"stateNum":1,"skin":"加入房间/btn_加入房间_6.png"}},{"type":"Button","props":{"y":446,"x":258,"stateNum":1,"skin":"加入房间/btn_加入房间_7.png"}},{"type":"Button","props":{"y":446,"x":521,"stateNum":1,"skin":"加入房间/btn_加入房间_8.png"}},{"type":"Button","props":{"y":446,"x":784,"stateNum":1,"skin":"加入房间/btn_加入房间_9.png"}},{"type":"Button","props":{"y":541,"x":258,"stateNum":1,"skin":"加入房间/btn_重输.png"}},{"type":"Button","props":{"y":541,"x":521,"stateNum":1,"skin":"加入房间/btn_加入房间_0.png"}},{"type":"Button","props":{"y":541,"x":784,"stateNum":1,"skin":"加入房间/btn_删除.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.JionRoomUI.uiView);
        }
    }
}

module ui.views {
    export class LoginSceneUI extends View {
		public btnLoginWX:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"loding/loding_bg.png"}},{"type":"Button","props":{"var":"btnLoginWX","stateNum":1,"skin":"loding/btn_weixindenglv.png","sizeGrid":"0,0,0,0","centerY":144.5,"centerX":4.5}},{"type":"CheckBox","props":{"y":580,"x":541,"stateNum":1,"skin":"loding/loding_gou_box.png"}},{"type":"Image","props":{"y":574,"x":544,"skin":"loding/loding_gou.png"}},{"type":"Label","props":{"y":657,"x":40,"text":"抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，成谜游戏伤身。合理安排游戏，享受健康生活.","fontSize":22,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.LoginSceneUI.uiView);
        }
    }
}

module ui.views {
    export class LogoSceneUI extends View {
		public proLoading:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"loding/loding_bg.png"}},{"type":"Image","props":{"y":511,"skin":"loding/loding_1.png","centerX":0}},{"type":"ProgressBar","props":{"y":510,"x":384,"var":"proLoading","value":0,"staticCache":false,"skin":"loding/loding_2.png","centerX":0}},{"type":"Label","props":{"y":647,"x":30,"text":"抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，成谜游戏伤身。合理安排游戏，享受健康生活.","fontSize":22,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.LogoSceneUI.uiView);
        }
    }
}
