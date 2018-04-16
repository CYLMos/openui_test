sap.ui.define([
    "sap/ui/core/mvc/Controller" /// Define controller first
], function(Controller) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Controller represents in the folder "controller/Controller"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.Controller.App", {
        onShowHello : function(){
            /// Show "Hello World" in alert
            alert('Hello World');
        }
    });
});
