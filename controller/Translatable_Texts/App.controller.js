sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/m/MessageToast", /// Define MessageToast
    "sap/ui/model/json/JSONModel", /// Define JSONModel
    "sap/ui/model/resource/ResourceModel" /// Define ResourceModel
], function(Controller, MessageToast, JSONModel, ResourceModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Translatable_Texts represents in the folder "controller/Translatable_Texts"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.Translatable_Texts.App", {
        onInit : function() {
            /// Set data model
            var jsonData = {
                recipient : {
                    name : "CYL"
                }
            };

            /// Create a JSONModel object and set the model
            var jsonModel = new JSONModel(jsonData);
            this.getView().setModel(jsonModel)

            /// Create a ResourceModel object and set the model
            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.walkthrough.i18n.Translatable_Texts.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello : function() {
            var bundle = this.getView().getModel("i18n").getResourceBundle();; /// Get i18n model
            var recipient = this.getView().getModel().getProperty("/recipient/name"); /// Get data in JSONModel
            var message = bundle.getText("helloMsg", [recipient, "Mr." + recipient]); /// Combine the json data and i18n data
            
            /// Show the message
            MessageToast.show(message);
        }
    });
});