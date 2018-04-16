sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/m/MessageToast" /// Define MessageToast
], function(Controller, MessageToast) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Modules represents in the folder "controller/Modules"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.Modules.App", {
        onShowHello : function(){
            /// Show "Hello World" in MessageToast
            MessageToast.show("message : Hello World!");
        }
    });
});