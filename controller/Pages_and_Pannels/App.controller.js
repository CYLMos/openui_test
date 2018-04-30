sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/m/MessageToast" /// Define MessageToast
], function(Controller, MessageToast) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Pages_and_Pannels represents in the folder "controller/Pages_and_Pannels"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.Pages_and_Pannels.App", {
        onShowHello : function() {
            var bundle = this.getView().getModel("i18n").getResourceBundle();; /// Get i18n model
            var recipient = this.getView().getModel().getProperty("/recipient/name"); /// Get data in JSONModel
            var message = bundle.getText("helloMsg", [recipient, "Mr." + recipient]); /// Combine the json data and i18n data
            
            /// Show the message
            MessageToast.show(message);
        }
    });
});