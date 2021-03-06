/*
 * For index.html
 */

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
            var jsonData = window.sessionStorage.getItem("json");

            /*
             * If session don't have data, create initial data
             * else will put session data in model
             */
            if(jsonData == null || 
                jsonData == undefined)
            {
                /// Init data
                var data = {
                    "Data" : [
                        {"number" : "0", "name" : "name 0", "explain" : "explain 0"},
                        {"number" : "1", "name" : "name 1", "explain" : "explain 1"}
                    ]
                };
                var model = new JSONModel(data);
                this.byId('table').setModel(model, 'model');
    
                /// Store the data in session
                window.sessionStorage.setItem("json", model.getJSON());
            }
            else{
                var model = new JSONModel(JSON.parse(jsonData));
                this.byId('table').setModel(model, 'model');
            }
        },

        /// If selected row changes, put new row in session
        selectionChange : function(oEvent){
            var items = oEvent.getParameter("listItem");
            var model = items.getBindingContext('model').getObject();
            window.sessionStorage.setItem('passData', JSON.stringify(model));
        },

        /// For research
        research : function(){
            /// clear status and pass data in session
            window.sessionStorage.setItem("passStatus", null);
            window.sessionStorage.setItem("passData", null);

            var json = window.sessionStorage.getItem('json');
            var model = new JSONModel(JSON.parse(json));

            this.byId('table').setModel(model, 'model');
        },

        /// For modify
        modify : function(){
            /// If pass data in session don't have data, tell user choose a row
            if(window.sessionStorage.getItem('passData') == null ||
               window.sessionStorage.getItem('passData') == undefined ||
               window.sessionStorage.getItem('passData') == 'null')
            {
                alert('Choose a row data!');
            }

            /// If have data, store status data in session and direct to edit.html
            else{
                var data = {
                    "status" : "modify"
                };
                
                window.sessionStorage.setItem("passStatus", JSON.stringify(data));
                window.location = "edit.html";
            }
        },

        /// For add row data
        add : function(){
            /// store status data in session and direct to edit.html
            var data = {
                "status" : "add"
            };
            window.sessionStorage.setItem("passStatus", JSON.stringify(data));
            window.location = "edit.html";
        },

        /// For delete a row
        delete : function(){
            /// If pass data in session don't have data, tell user choose a row 
            if(window.sessionStorage.getItem('passData') == null ||
               window.sessionStorage.getItem('passData') == undefined ||
               window.sessionStorage.getItem('passData') == 'null')
            {
                alert('Choose a row data!');
            }
            /// Remove select data from json in session
            else{
                var jsonData = JSON.parse(window.sessionStorage.getItem("json"));
                var selectData = JSON.parse(window.sessionStorage.getItem('passData'));

                for(var i = 0; i < jsonData.Data.length; i++){
                    if(jsonData.Data[i].number == selectData.number &&
                       jsonData.Data[i].name == selectData.name)
                    {
                        delete jsonData.Data[i];
                        break;
                    }
                }

                /// Clear the null item
                jsonData = replacer(jsonData);

                var model = new JSONModel(jsonData);
                this.byId('table').setModel(model, 'model');

                window.sessionStorage.setItem('json', JSON.stringify(jsonData));
            }
        }
    });
});

/// Clear null item in json
function replacer(jsonData){
    var data = {
        Data : []
    }
    for(var i = 0; i < jsonData.Data.length; i++){
        if(jsonData.Data[i] != null || jsonData.Data[i] != undefined){
            data.Data.push(jsonData.Data[i]);
        }
    }

    return data;
}
