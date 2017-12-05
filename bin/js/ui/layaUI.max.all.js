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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "height": 400 } }, { "type": "Button", "props": { "y": 56, "x": 41, "width": 150, "var": "btn", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "label": "点我赋值", "height": 37 } }, { "type": "Clip", "props": { "y": 56, "x": 401, "var": "clip", "skin": "comp/clip_num.png", "clipX": 10 } }, { "type": "ComboBox", "props": { "y": 143, "x": 220, "width": 200, "var": "combobox", "skin": "comp/combobox.png", "sizeGrid": "4,20,4,4", "selectedIndex": 1, "labels": "select1,select2,selecte3", "height": 23 } }, { "type": "Tab", "props": { "y": 96, "x": 220, "var": "tab", "skin": "comp/tab.png", "labels": "tab1,tab2,tab3" } }, { "type": "VScrollBar", "props": { "y": 223, "x": 259, "skin": "comp/vscroll.png", "height": 150 } }, { "type": "VSlider", "props": { "y": 223, "x": 224, "skin": "comp/vslider.png", "height": 150 } }, { "type": "List", "props": { "y": 68, "x": 452, "width": 128, "var": "list", "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "height": 299 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 112, "name": "render", "height": 30 }, "child": [{ "type": "Label", "props": { "y": 5, "x": 26, "width": 78, "text": "this is a list", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14 } }, { "type": "Clip", "props": { "y": 2, "x": 0, "skin": "comp/clip_num.png", "name": "clip", "clipX": 10 } }] }] }, { "type": "Button", "props": { "y": 4, "x": 563, "skin": "comp/btn_close.png", "name": "close" } }, { "type": "Button", "props": { "y": 112, "x": 41, "width": 150, "var": "btn2", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "labelSize": 30, "labelBold": true, "label": "点我赋值", "height": 66 } }, { "type": "CheckBox", "props": { "y": 188, "x": 220, "var": "check", "skin": "comp/checkbox.png", "label": "checkBox1" } }, { "type": "RadioGroup", "props": { "y": 61, "x": 220, "var": "radio", "skin": "comp/radiogroup.png", "labels": "radio1,radio2,radio3" } }, { "type": "Panel", "props": { "y": 223, "x": 299, "width": 127, "vScrollBarSkin": "comp/vscroll.png", "height": 150 }, "child": [{ "type": "Image", "props": { "skin": "comp/image.png" } }] }, { "type": "CheckBox", "props": { "y": 188, "x": 326, "skin": "comp/checkbox.png", "labelColors": "#ff0000", "label": "checkBox2" } }, { "type": "Box", "props": { "y": 197, "x": 41, "var": "box" }, "child": [{ "type": "ProgressBar", "props": { "y": 70, "width": 150, "skin": "comp/progress.png", "sizeGrid": "4,4,4,4", "name": "progress", "height": 14 } }, { "type": "Label", "props": { "y": 103, "width": 137, "text": "This is a Label", "skin": "comp/label.png", "name": "label", "height": 26, "fontSize": 20 } }, { "type": "TextInput", "props": { "y": 148, "width": 150, "text": "textinput", "skin": "comp/textinput.png", "name": "input" } }, { "type": "HSlider", "props": { "width": 150, "skin": "comp/hslider.png", "name": "slider" } }, { "type": "HScrollBar", "props": { "y": 34, "width": 150, "skin": "comp/hscroll.png", "name": "scroll" } }] }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var base;
            (function (base) {
                var hall;
                (function (hall) {
                    var CreateRoomUI = /** @class */ (function (_super) {
                        __extends(CreateRoomUI, _super);
                        function CreateRoomUI() {
                            return _super.call(this) || this;
                        }
                        CreateRoomUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.base.hall.CreateRoomUI.uiView);
                        };
                        CreateRoomUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "skin": "创建房间和帮助/创建房间背景.png", "centerY": 0.5, "centerX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 37, "skin": "创建房间和帮助/标题_创建房间.png" } }, { "type": "Button", "props": { "y": 5, "x": 1212, "stateNum": 1, "skin": "通用/btn_关闭.png" } }, { "type": "Image", "props": { "y": 625, "x": 387, "skin": "创建房间和帮助/创建房间_开关按钮_off.png" } }, { "type": "Image", "props": { "y": 576, "x": 280, "width": 960, "skin": "创建房间和帮助/分割线.png" } }, { "type": "Button", "props": { "y": 609, "x": 946, "stateNum": 1, "skin": "创建房间和帮助/btn_创建房间.png" } }, { "type": "Button", "props": { "y": 610, "x": 602, "stateNum": 1, "skin": "创建房间和帮助/btn_代开房.png" } }, { "type": "Button", "props": { "y": 635, "x": 17, "stateNum": 1, "skin": "创建房间和帮助/btn_更多玩法.png" } }, { "type": "Panel", "props": { "y": 89, "x": 20, "width": 209, "height": 534 }, "child": [{ "type": "CheckBox", "props": { "y": 0, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_100张_xz.png" } }, { "type": "CheckBox", "props": { "y": 84, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_三人推倒胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 167, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_二人推倒胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 251, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_做牌推倒胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 334, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_惠州庄补花_xz.png" } }, { "type": "CheckBox", "props": { "y": 418, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_推倒胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 501, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_揭阳麻将_xz.png" } }, { "type": "CheckBox", "props": { "y": 585, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_梅州红中王_xz.png" } }, { "type": "CheckBox", "props": { "y": 669, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_潮汕麻将_xz.png" } }, { "type": "CheckBox", "props": { "y": 752, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_百搭鸡胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 836, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_饶平麻将_xz.png" } }, { "type": "CheckBox", "props": { "y": 919, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_鸡平胡_xz.png" } }, { "type": "CheckBox", "props": { "y": 1003, "x": 0, "stateNum": 1, "skin": "创建房间和帮助/btn_鸡胡补花_xz.png" } }] }] };
                        return CreateRoomUI;
                    }(View));
                    hall.CreateRoomUI = CreateRoomUI;
                })(hall = base.hall || (base.hall = {}));
            })(base = game.base || (game.base = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var base;
            (function (base) {
                var hall;
                (function (hall) {
                    var RoomOptionsUI = /** @class */ (function (_super) {
                        __extends(RoomOptionsUI, _super);
                        function RoomOptionsUI() {
                            return _super.call(this) || this;
                        }
                        RoomOptionsUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.base.hall.RoomOptionsUI.uiView);
                        };
                        RoomOptionsUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "创建房间和帮助/局数.png" } }, { "type": "Image", "props": { "y": 83, "x": 0, "skin": "创建房间和帮助/人数.png" } }, { "type": "Image", "props": { "y": 164, "x": 0, "skin": "创建房间和帮助/模式.png" } }, { "type": "Image", "props": { "y": 247, "x": 0, "skin": "创建房间和帮助/玩法.png" } }, { "type": "Image", "props": { "y": 327, "x": 0, "skin": "创建房间和帮助/马牌.png" } }, { "type": "Image", "props": { "y": 408, "x": 0, "skin": "创建房间和帮助/鬼牌.png" } }, { "type": "Image", "props": { "y": 490, "x": 0, "skin": "创建房间和帮助/封顶.png" } }, { "type": "Image", "props": { "y": 573, "x": 0, "skin": "创建房间和帮助/分牌.png" } }, { "type": "Radio", "props": { "y": 0, "x": 126, "stateNum": 1, "skin": "创建房间和帮助/圆点_未选中.png", "labelStrokeColor": "#ffffff", "labelStroke": 0, "labelSize": 32, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelAlign": "left", "label": "8局" } }, { "type": "Radio", "props": { "y": 0, "x": 332, "stateNum": 1, "skin": "创建房间和帮助/圆点_未选中.png", "labelStrokeColor": "#ffffff", "labelStroke": 0, "labelSize": 32, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelAlign": "left", "label": "16局" } }, { "type": "Radio", "props": { "y": 83, "x": 126, "stateNum": 1, "skin": "创建房间和帮助/圆点_未选中.png", "labelStrokeColor": "#ffffff", "labelStroke": 0, "labelSize": 32, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelAlign": "left", "label": "3人" } }, { "type": "Radio", "props": { "y": 83, "x": 332, "stateNum": 1, "skin": "创建房间和帮助/圆点_未选中.png", "labelStrokeColor": "#ffffff", "labelStroke": 0, "labelSize": 32, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelAlign": "left", "label": "4人" } }] };
                        return RoomOptionsUI;
                    }(View));
                    hall.RoomOptionsUI = RoomOptionsUI;
                })(hall = base.hall || (base.hall = {}));
            })(base = game.base || (game.base = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var base;
            (function (base) {
                var room;
                (function (room) {
                    var RoomSceneUI = /** @class */ (function (_super) {
                        __extends(RoomSceneUI, _super);
                        function RoomSceneUI() {
                            return _super.call(this) || this;
                        }
                        RoomSceneUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.base.room.RoomSceneUI.uiView);
                        };
                        RoomSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "麻将桌/桌布_绿色.png" } }, { "type": "Image", "props": { "skin": "麻将桌/底盘.png", "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82, "x": 10, "skin": "麻将桌/东家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 3, "skin": "麻将桌/北家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 82, "skin": "麻将桌/南家_xz.png" } }, { "type": "Image", "props": { "y": 1, "x": 9, "skin": "麻将桌/西家_xz.png" } }] }] };
                        return RoomSceneUI;
                    }(View));
                    room.RoomSceneUI = RoomSceneUI;
                })(room = base.room || (base.room = {}));
            })(base = game.base || (game.base = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var chenzhou;
            (function (chenzhou) {
                var hall;
                (function (hall) {
                    var RoomOptionsUI = /** @class */ (function (_super) {
                        __extends(RoomOptionsUI, _super);
                        function RoomOptionsUI() {
                            return _super.call(this) || this;
                        }
                        RoomOptionsUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.chenzhou.hall.RoomOptionsUI.uiView);
                        };
                        RoomOptionsUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 } };
                        return RoomOptionsUI;
                    }(View));
                    hall.RoomOptionsUI = RoomOptionsUI;
                })(hall = chenzhou.hall || (chenzhou.hall = {}));
            })(chenzhou = game.chenzhou || (game.chenzhou = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var chenzhou;
            (function (chenzhou) {
                var room;
                (function (room) {
                    var RoomSceneUI = /** @class */ (function (_super) {
                        __extends(RoomSceneUI, _super);
                        function RoomSceneUI() {
                            return _super.call(this) || this;
                        }
                        RoomSceneUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.chenzhou.room.RoomSceneUI.uiView);
                        };
                        RoomSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "麻将桌/桌布_绿色.png" } }, { "type": "Image", "props": { "skin": "麻将桌/底盘.png", "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82, "x": 10, "skin": "麻将桌/东家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 3, "skin": "麻将桌/北家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 82, "skin": "麻将桌/南家_xz.png" } }, { "type": "Image", "props": { "y": 1, "x": 9, "skin": "麻将桌/西家_xz.png" } }] }] };
                        return RoomSceneUI;
                    }(View));
                    room.RoomSceneUI = RoomSceneUI;
                })(room = chenzhou.room || (chenzhou.room = {}));
            })(chenzhou = game.chenzhou || (game.chenzhou = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var leiyang;
            (function (leiyang) {
                var hall;
                (function (hall) {
                    var RoomOptionsUI = /** @class */ (function (_super) {
                        __extends(RoomOptionsUI, _super);
                        function RoomOptionsUI() {
                            return _super.call(this) || this;
                        }
                        RoomOptionsUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.leiyang.hall.RoomOptionsUI.uiView);
                        };
                        RoomOptionsUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 } };
                        return RoomOptionsUI;
                    }(View));
                    hall.RoomOptionsUI = RoomOptionsUI;
                })(hall = leiyang.hall || (leiyang.hall = {}));
            })(leiyang = game.leiyang || (game.leiyang = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var game;
        (function (game) {
            var leiyang;
            (function (leiyang) {
                var room;
                (function (room) {
                    var RoomSceneUI = /** @class */ (function (_super) {
                        __extends(RoomSceneUI, _super);
                        function RoomSceneUI() {
                            return _super.call(this) || this;
                        }
                        RoomSceneUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.views.game.leiyang.room.RoomSceneUI.uiView);
                        };
                        RoomSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "麻将桌/桌布_绿色.png" } }, { "type": "Image", "props": { "skin": "麻将桌/底盘.png", "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82, "x": 10, "skin": "麻将桌/东家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 3, "skin": "麻将桌/北家_xz.png" } }, { "type": "Image", "props": { "y": 9, "x": 82, "skin": "麻将桌/南家_xz.png" } }, { "type": "Image", "props": { "y": 1, "x": 9, "skin": "麻将桌/西家_xz.png" } }] }] };
                        return RoomSceneUI;
                    }(View));
                    room.RoomSceneUI = RoomSceneUI;
                })(room = leiyang.room || (leiyang.room = {}));
            })(leiyang = game.leiyang || (game.leiyang = {}));
        })(game = views.game || (views.game = {}));
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var HallSceneUI = /** @class */ (function (_super) {
            __extends(HallSceneUI, _super);
            function HallSceneUI() {
                return _super.call(this) || this;
            }
            HallSceneUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.views.HallSceneUI.uiView);
            };
            HallSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "skin": "hall/bg_hall.png" } }, { "type": "Image", "props": { "y": 600, "x": 0, "skin": "hall/menu_bar1.png" } }, { "type": "Button", "props": { "y": 178, "x": 669, "var": "btnCreateRoom", "stateNum": 1, "skin": "hall/btn_createroom.png" } }, { "type": "Button", "props": { "y": 178, "x": 938, "var": "btnJionRoom", "stateNum": 1, "skin": "hall/btn_jionroom.png" } }, { "type": "Button", "props": { "y": 380, "x": 678, "var": "btnMyRoom", "stateNum": 1, "skin": "hall/btn_myroom.png" } }, { "type": "Button", "props": { "y": 100, "x": 338, "var": "btnGameRoom", "stateNum": 1, "skin": "hall/btn_gameroom.png" } }, { "type": "Button", "props": { "y": 380, "x": 942, "var": "btnPaiJiu", "stateNum": 1, "skin": "hall/btn_paijiu.png" } }, { "type": "Button", "props": { "y": 177, "x": 670, "var": "btnBackRoom", "stateNum": 1, "skin": "hall/btn_backroom.png" } }, { "type": "Image", "props": { "y": 149, "x": 1217, "skin": "hall/menu_bar.png" }, "child": [{ "type": "Button", "props": { "y": 88, "x": 22, "stateNum": 1, "skin": "hall/btn_menu.png" } }, { "type": "Button", "props": { "y": 258, "x": 20, "stateNum": 1, "skin": "hall/btn_moregame.png" } }] }, { "type": "Button", "props": { "y": 585, "x": 18, "stateNum": 1, "skin": "hall/btn_freecard.png" } }, { "type": "Button", "props": { "y": 585, "x": 337, "stateNum": 1, "skin": "hall/btn_addme.png" } }, { "type": "Button", "props": { "y": 585, "x": 178, "stateNum": 1, "skin": "hall/btn_shop.png" } }, { "type": "Button", "props": { "y": 624, "x": 568, "stateNum": 1, "skin": "hall/btnActivit.png" } }, { "type": "Button", "props": { "y": 624, "x": 671, "stateNum": 1, "skin": "hall/btnMessage.png" } }, { "type": "Button", "props": { "y": 624, "x": 774, "stateNum": 1, "skin": "hall/btnHelp.png" } }, { "type": "Button", "props": { "y": 624, "x": 877, "stateNum": 1, "skin": "hall/btnBanding.png" } }, { "type": "Button", "props": { "y": 624, "x": 981, "stateNum": 1, "skin": "hall/btnSetting.png" } }, { "type": "Button", "props": { "y": 624, "x": 1084, "stateNum": 1, "skin": "hall/btnZhanJi.png" } }, { "type": "Button", "props": { "y": 624, "x": 1187, "stateNum": 1, "skin": "hall/btnShare.png" } }, { "type": "Image", "props": { "y": 154, "x": 25, "skin": "hall/bg_adbox.png" }, "child": [{ "type": "Image", "props": { "y": 22, "x": 34, "skin": "hall/zi_ss_xz.png" } }, { "type": "Image", "props": { "y": 21, "x": 127, "skin": "hall/zi_hd_hui.png" } }, { "type": "Image", "props": { "y": 21, "x": 217, "skin": "hall/zi_gg_hui.png" } }, { "type": "Image", "props": { "y": 69, "x": 11, "skin": "hall/ad_iamge1.png" } }, { "type": "Image", "props": { "y": 382, "x": 202, "skin": "hall/dian_hui.png" } }, { "type": "Image", "props": { "y": 382, "x": 73, "skin": "hall/dian_hui.png" } }, { "type": "Image", "props": { "y": 380, "x": 136, "skin": "hall/dian_xz.png" } }] }, { "type": "Image", "props": { "y": 37, "x": 549, "skin": "hall/box_info.png" }, "child": [{ "type": "Image", "props": { "y": -7, "x": -20, "skin": "hall/icon_fangka.png" } }, { "type": "Button", "props": { "y": -7, "x": 206, "stateNum": 1, "skin": "hall/btn_buyadd.png" } }] }, { "type": "Image", "props": { "y": 32, "x": 944, "skin": "hall/box_info.png" }, "child": [{ "type": "Image", "props": { "y": -7, "x": -20, "skin": "hall/icon_gift.png" } }, { "type": "Button", "props": { "y": -7, "x": 206, "stateNum": 1, "skin": "hall/btn_buyadd.png" } }] }, { "type": "Image", "props": { "y": 21, "x": 49, "skin": "hall/box_player.png" }, "child": [{ "type": "Image", "props": { "y": 12, "x": 12, "skin": "hall/box_head.png" } }] }] };
            return HallSceneUI;
        }(View));
        views.HallSceneUI = HallSceneUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var JionRoomUI = /** @class */ (function (_super) {
            __extends(JionRoomUI, _super);
            function JionRoomUI() {
                return _super.call(this) || this;
            }
            JionRoomUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.views.JionRoomUI.uiView);
            };
            JionRoomUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "skin": "通用/底板_中.png", "centerY": 0.5, "centerX": 0.5 } }, { "type": "Image", "props": { "y": 87, "x": 427, "skin": "jion/jion_title.png", "centerX": 0.5 } }, { "type": "Image", "props": { "y": 156, "skin": "jion/icon_shuru_box.png", "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 64, "x": 76, "skin": "jion/icon_shuru_line.png" } }, { "type": "Image", "props": { "y": 64, "x": 183, "skin": "jion/icon_shuru_line.png" } }, { "type": "Image", "props": { "y": 64, "x": 290, "skin": "jion/icon_shuru_line.png" } }, { "type": "Image", "props": { "y": 64, "x": 396, "skin": "jion/icon_shuru_line.png" } }, { "type": "Image", "props": { "y": 64, "x": 503, "skin": "jion/icon_shuru_line.png" } }, { "type": "Image", "props": { "y": 64, "x": 610, "skin": "jion/icon_shuru_line.png" } }] }, { "type": "Button", "props": { "y": 255, "x": 258, "stateNum": 1, "skin": "jion/btn_1_1.png" } }, { "type": "Button", "props": { "y": 255, "x": 521, "stateNum": 1, "skin": "jion/btn_1_2.png" } }, { "type": "Button", "props": { "y": 255, "x": 784, "stateNum": 1, "skin": "jion/btn_1_3.png" } }, { "type": "Button", "props": { "y": 350, "x": 258, "stateNum": 1, "skin": "jion/btn_1_4.png" } }, { "type": "Button", "props": { "y": 350, "x": 521, "stateNum": 1, "skin": "jion/btn_1_5.png" } }, { "type": "Button", "props": { "y": 350, "x": 784, "stateNum": 1, "skin": "jion/btn_1_6.png" } }, { "type": "Button", "props": { "y": 446, "x": 258, "stateNum": 1, "skin": "jion/btn_1_7.png" } }, { "type": "Button", "props": { "y": 446, "x": 521, "stateNum": 1, "skin": "jion/btn_1_8.png" } }, { "type": "Button", "props": { "y": 446, "x": 784, "stateNum": 1, "skin": "jion/btn_1_9.png" } }, { "type": "Button", "props": { "y": 541, "x": 258, "stateNum": 1, "skin": "jion/btn_1_c.png" } }, { "type": "Button", "props": { "y": 541, "x": 521, "stateNum": 1, "skin": "jion/btn_1_0.png" } }, { "type": "Button", "props": { "y": 541, "x": 784, "stateNum": 1, "skin": "jion/btn_1_d.png" } }] };
            return JionRoomUI;
        }(View));
        views.JionRoomUI = JionRoomUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var LoginSceneUI = /** @class */ (function (_super) {
            __extends(LoginSceneUI, _super);
            function LoginSceneUI() {
                return _super.call(this) || this;
            }
            LoginSceneUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.views.LoginSceneUI.uiView);
            };
            LoginSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "loding/loding_bg.png" } }, { "type": "Button", "props": { "var": "btnLoginWX", "stateNum": 1, "skin": "loding/btn_weixindenglv.png", "sizeGrid": "0,0,0,0", "centerY": 144.5, "centerX": 4.5 } }, { "type": "CheckBox", "props": { "y": 580, "x": 541, "stateNum": 1, "skin": "loding/loding_gou_box.png" } }, { "type": "Image", "props": { "y": 574, "x": 544, "skin": "loding/loding_gou.png" } }, { "type": "Label", "props": { "y": 657, "x": 40, "text": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，成谜游戏伤身。合理安排游戏，享受健康生活.", "fontSize": 22, "color": "#ffffff" } }, { "type": "Button", "props": { "y": 96, "x": 210, "var": "btnConect", "skin": "comp/button.png", "label": "链接" } }, { "type": "Button", "props": { "y": 142, "x": 214, "var": "btnSend", "skin": "comp/button.png", "label": "发送" } }, { "type": "Button", "props": { "y": 189, "x": 214, "var": "btnClose", "skin": "comp/button.png", "label": "关闭" } }] };
            return LoginSceneUI;
        }(View));
        views.LoginSceneUI = LoginSceneUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        var LogoSceneUI = /** @class */ (function (_super) {
            __extends(LogoSceneUI, _super);
            function LogoSceneUI() {
                return _super.call(this) || this;
            }
            LogoSceneUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.views.LogoSceneUI.uiView);
            };
            LogoSceneUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "loding/loding_bg.png" } }, { "type": "Image", "props": { "y": 511, "skin": "loding/loding_1.png", "centerX": 0 } }, { "type": "ProgressBar", "props": { "y": 510, "x": 384, "var": "proLoading", "value": 0, "staticCache": false, "skin": "loding/loding_2.png", "centerX": 0 } }, { "type": "Label", "props": { "y": 647, "x": 30, "text": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，成谜游戏伤身。合理安排游戏，享受健康生活.", "fontSize": 22, "color": "#ffffff" } }] };
            return LogoSceneUI;
        }(View));
        views.LogoSceneUI = LogoSceneUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map