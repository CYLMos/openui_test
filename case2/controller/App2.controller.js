/*
 * For edit.html
 */

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
            /// Get status and pass data in session
            var jsonStatus = JSON.parse(window.sessionStorage.getItem("passStatus"));
            var jsonData = JSON.parse(window.sessionStorage.getItem("passData"));

            if(jsonStatus.status == 'modify'){
                /// Make the input of number can't modify
                this.byId('input_number').setEditable(false);

                var model = new JSONModel(jsonData);
                this.getView().setModel(model);
            }
        },

        /// For back button
        back : function(){
            /// Rest status and pass data to null in session
            window.sessionStorage.setItem("passStatus", null);
            window.sessionStorage.setItem("passData", null);
            window.location = "index.html";
        },

        /// For save button
        save : function(){
            /// Reset pass data to null in session
            window.sessionStorage.setItem("passData", null);

            var jsonStatus = JSON.parse(window.sessionStorage.getItem("passStatus"));
            var jsonData = JSON.parse(window.sessionStorage.getItem("json"));

            var saveData = {
                "number" : this.byId('input_number').getValue(),
                "name" : this.byId('input_name').getValue(),
                "explain" : this.byId('ta_explain').getValue()
            }

            /// If is modify mode, change the data user wanted to change
            if(jsonStatus.status == 'modify'){
                for(var i = 0; i < jsonData.Data.length; i++){
                    if(jsonData.Data[i].number == saveData.number){
                        jsonData.Data[i].name = saveData.name;
                        jsonData.Data[i].explain = saveData.explain;

                        break;
                    }
                }
            }
            /// If is add mode, Add data in json
            else if(jsonStatus.status == 'add'){
                jsonData.Data[jsonData.Data.length] = saveData;
            }
            
            window.sessionStorage.setItem("json", JSON.stringify(jsonData));
            alert('Save success!');

            window.location = "index.html";
        }
    });
});