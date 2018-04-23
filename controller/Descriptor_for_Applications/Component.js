sap.ui.define([
    "sap/ui/core/UIComponent",  /// Define UIComponent
    "sap/ui/model/json/JSONModel", /// Define JSONModel
    "sap/ui/model/resource/ResourceModel" /// Define ResourceModel
], function(UIComponent, JSONModel, ResourceModel) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    return UIComponent.extend("sap.ui.demo.walkthrough.controller.Descriptor_for_Applications.Component", {

        /* Define metadata
         * Define all data in the json file
         * The name of the json file was called "manifest.json"
         * The location of manifest.json is same as component.js
        */
        metadata : {
            manifest : "json"
        },

        init : function(){
            /// Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            var data = {
                recipient : {
                    name : "World"
                }
            };

            var jsonModel = new JSONModel(data);
            this.setModel(jsonModel);
        }
    });
});