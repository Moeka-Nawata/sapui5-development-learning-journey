// アプリの動きを管理、初期化を行う
// manifest.jsonはアプリの構造を設定、定義する
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
],

    function (UIComponent, Device) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {
            // manifest.jsonから設定を読み取る
            metadata: {
                manifest: "json"
            },

            init: function () {
                // call the base component's init function　初期化処理
                UIComponent.prototype.init.apply(this, arguments);
            },

            getContentDensityClass: function () {
                if(!this._sContentDensityClass) {
                    if(Device.support.touch) {
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }else{
                        this._sContentDensityClass = "sappUiSizeCompact";
                    }
                }
                return this._sContentDensityClass;
            }

        });
    }
);