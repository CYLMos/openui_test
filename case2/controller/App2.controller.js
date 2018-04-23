sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Controller represents in the folder "controller/Controller"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.App2", {
        onInit : function(){
            var jsonStatus = JSON.parse(window.sessionStorage.getItem("passStatus"));
            var jsonData = JSON.parse(window.sessionStorage.getItem("passData"));

            /*if(jsonStatus.status == 'modify'){
                sap.ui.getCore().byId('input_number').editable = false;
            }
            else if(jsonStatus.status == 'add'){
                sap.ui.getCore().byId('input_number').editable = true;
            }*/

            var model = new JSONModel(jsonData);
            this.getView().setModel(model);
        },

        back : function(){
            window.location = "index.html";
        },

        save : function(){
            alert('save');
        }
    });
});