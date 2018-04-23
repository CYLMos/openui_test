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

            if(jsonStatus.status == 'modify'){
                this.byId('input_number').setEditable(false);

                var model = new JSONModel(jsonData);
                this.getView().setModel(model);
            }
        },

        back : function(){
            window.sessionStorage.setItem("passStatus", null);
            window.sessionStorage.setItem("passData", null);
            window.location = "index.html";
        },

        save : function(){
            window.sessionStorage.setItem("passData", null);

            var jsonStatus = JSON.parse(window.sessionStorage.getItem("passStatus"));
            var jsonData = JSON.parse(window.sessionStorage.getItem("json"));

            var saveData = {
                "number" : this.byId('input_number').getValue(),
                "name" : this.byId('input_name').getValue(),
                "explain" : this.byId('ta_explain').getValue()
            }

            if(jsonStatus.status == 'modify'){
                for(var i = 0; i < jsonData.Data.length; i++){
                    if(jsonData.Data[i].number == saveData.number &&
                        jsonData.Data[i].name == saveData.name)
                     {
                         delete jsonData.Data[i];
                         break;
                     }
                }
            }
            else if(jsonStatus.status == 'add'){
                jsonData.Data[jsonData.Data.length] = saveData;
            }
            
            window.sessionStorage.setItem("json", JSON.stringify(jsonData));
        }
    });
});