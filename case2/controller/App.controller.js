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
            if(jsonData == null || 
                jsonData == undefined)
            {
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

        selectionChange : function(oEvent){
            var items = oEvent.getParameter("listItem");
            var model = items.getBindingContext('model').getObject();
            window.sessionStorage.setItem('passData', JSON.stringify(model));
        },

        research : function(){
            window.sessionStorage.setItem("passStatus", null);
            window.sessionStorage.setItem("passData", null);

            var json = window.sessionStorage.getItem('json');
            var model = new JSONModel(JSON.parse(json));

            this.byId('table').setModel(model, 'model');
        },

        modify : function(){
            if(window.sessionStorage.getItem('passData') == null ||
               window.sessionStorage.getItem('passData') == undefined ||
               window.sessionStorage.getItem('passData') == 'null')
            {
                alert('Choose a row data!');
            }

            else{
                var data = {
                    "status" : "modify"
                };
                
                window.sessionStorage.setItem("passStatus", JSON.stringify(data));
                window.location = "edit.html";
            }
        },

        add : function(){
            var data = {
                "status" : "add"
            };
            window.sessionStorage.setItem("passStatus", JSON.stringify(data));
            window.location = "edit.html";
        },

        delete : function(){
            if(window.sessionStorage.getItem('passData') == null ||
               window.sessionStorage.getItem('passData') == undefined ||
               window.sessionStorage.getItem('passData') == 'null')
            {
                alert('Choose a row data!');
            }
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

                jsonData = replacer(jsonData);

                var model = new JSONModel(jsonData);
                this.byId('table').setModel(model, 'model');

                window.sessionStorage.setItem('json', JSON.stringify(jsonData));
            }
        }
    });
});

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
