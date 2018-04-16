sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/ui/model/json/JSONModel" /// Define JSONModel
], function(Controller, JSONModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    /* "sap.ui.demo.walkthrough" is the root name
     * .controller.JSON_Model represents in the folder "controller/JSON_Model"
     * .App respresents the controller name(.js file name)
    */
    return Controller.extend("sap.ui.demo.walkthrough.controller.JSON_Model.App", {
        onInit : function() {
            /// Set data model
            var data = {
                recipient : {
                    name : "CYL"
                }
            };

            /// Create a JSONModel object and set the model
            var model = new JSONModel(data);
            this.getView().setModel(model);
        }
    });
});