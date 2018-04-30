/*
 * For index2.html
 */

sap.ui.define([
    "jquery.sap.global", /// Define jquery sap
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/ui/model/json/JSONModel"
], function(jQuery, Controller, JSONModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller2.Controller represents in the folder "controller2/Controller"
     * .App respresents the controller name(.js file name)
    */

    return Controller.extend("sap.ui.demo.walkthrough.controller2.App", {
        onInit : function(){
            var jsonData = window.sessionStorage.getItem("json");
            if(jsonData == null || 
               jsonData == undefined)
            {
                /// init data
                var data = {
                    "Data" : [
                        {"number" : "0", "name" : "name 0", "explain" : "explain 0"},
                        {"number" : "1", "name" : "name 1", "explain" : "explain 1"}
                    ]
                };
                var model = new JSONModel(data);
                sap.ui.getCore().setModel(model, 'model');
    
                window.sessionStorage.setItem("json", model.getJSON());
            }
            else{
                var model = new JSONModel(JSON.parse(jsonData));
                this.byId('table').setModel(model, 'model');
            }
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
            /// If user didn't choose a row, tell user choose a row
            if(this.byId('table').getSelectedIndex() == -1){
                alert('Choose a row data!');
            }
            /// If more than a row, rell user choose a row
            else if(this.byId('table').getSelectedIndices().length > 1){
                alert('Please choose a row!');
            }
            /// store status data and pass data in session and direct to edit2.html
            else{
                var rowData = this.byId('table').getRows();
                var index = this.byId('table').getSelectedIndex();
                var selectRow = rowData[index];
                var cellData = selectRow.getCells();

                var data = {
                    "status" : "modify"
                };
                var passData = {
                    "number" : cellData[0].getText(),
                    "name" : cellData[1].getText(),
                    "explain" : cellData[2].getText(),
                }
                
                window.sessionStorage.setItem("passStatus", JSON.stringify(data));
                window.sessionStorage.setItem("passData", JSON.stringify(passData));
                window.location = "edit2.html";
            }
        },

        /// For add row data
        add : function(){
            /// store status data in session and direct to edit2.html
            var data = {
                "status" : "add"
            };
            window.sessionStorage.setItem("passStatus", JSON.stringify(data));
            window.location = "edit2.html";
        },

        /// For delete rows
        delete : function(){
            /// If user didn't choose rows, tell user choose at least a row
            if(this.byId('table').getSelectedIndex() == -1){
                alert('Choose a row data!');
            }
            /// Remove select data from json in session
            else{
                var jsonData = JSON.parse(window.sessionStorage.getItem("json"));

                for(var i = 0; i < this.byId('table').getSelectedIndices().length; i++){

                    jsonData.Data[this.byId('table').getSelectedIndices()[i]] = null;
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
