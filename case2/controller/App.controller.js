sap.ui.define([
    "jquery.sap.global", /// Define jquery sap
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/ui/model/json/JSONModel"
], function(jQuery, Controller, JSONModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.Controller represents in the folder "controller/Controller"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit : function(){
            //var model = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.walkthrough", "/data.json"));
            var data = {
                "Data" : [
                    {"number" : "0", "name" : "name 0", "explain" : "explain 0"},
                    {"number" : "1", "name" : "name 1", "explain" : "explain 1"}
                ]
            };

            var model = new JSONModel(data);
            //this.getView().setModel(model, 'model');
            this.byId('table').setModel(model, 'model');

            window.sessionStorage.setItem("json", model.getJSON());
        },

        selectionChange : function(oEvent){
            var items = oEvent.getParameter("listItem");
            var model = items.getBindingContext('model').getObject();
            window.sessionStorage.setItem('passData', JSON.stringify(model));
        },

        research : function(){
            window.sessionStorage.setItem('research', '1');

            var json = window.sessionStorage.getItem('json');
            var model = new JSONModel(JSON.parse(json));

            alert(model.getJSON());
            this.byId('table').setModel(model, 'model');

            window.sessionStorage.setItem('research', '0');
        },
        modify : function(oEvent){
            var data = {
                "status" : "modify"
            };
            window.sessionStorage.setItem("passStatus", JSON.stringify(data));
            window.location = "edit.html";
        },

        add : function(){
            var data = {
                "status" : "add"
            };
            window.sessionStorage.setItem("passStatus", JSON.stringify(data));
            window.location = "edit.html";
        },

        delete : function(){
            alert('delete');
        }
    });
});
