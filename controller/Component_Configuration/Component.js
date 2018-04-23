sap.ui.define([
    "sap/ui/core/UIComponent",  /// Define UIComponent
    "sap/ui/model/json/JSONModel", /// Define JSONModel
    "sap/ui/model/resource/ResourceModel" /// Define ResourceModel
], function(UIComponent, JSONModel, ResourceModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    return UIComponent.extend("sap.ui.demo.walkthrough.controller.Component_Configuration.Component", {

        /// Define metadata
        metadata : {
            "rootView" : {
                "viewName" : "sap.ui.demo.walkthrough.view.Component_Configuration.App",
                "type" : "XML",
                "async" : true,
                "id" : "app"
            }
        },

        init : function(){
            /// Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            var data = {
                recipient : {
                    name : "World"
                }
            };

            var jsonModel = new JSONModel(data);
            this.setModel(jsonModel);

            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.walkthrough.i18n.Component_Configuration.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});