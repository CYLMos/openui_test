sap.ui.define([
    "sap/ui/core/mvc/Controller" /// Define controller
], function(Controller) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Controller represents in the folder "controller/Controller"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function(){
            /// Show "Hello World" in alert
            var input_a = document.getElementById('__xmlview0--input-a-inner').value;
            var input_b = document.getElementById('__xmlview0--input-b-inner').value;
            var ta = document.getElementById('__xmlview0--ta-inner').value;

            alert("故障編號：" + input_a + " " + "故障原因：" + input_b + " " + "說明：" + ta);
        }
    });
});
