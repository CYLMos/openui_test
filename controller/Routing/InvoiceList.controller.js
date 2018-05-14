sap.ui.define([
    "sap/ui/core/mvc/Controller", /// Define controller
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {  /// Then implement it
    "use strice";  /// Use strict mode in the browser

    return Controller.extend("sap.ui.demo.walkthrough.controller.Routing.InvoiceLst", {
        onInit: function() {
            var model = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(model, "view");
        },

        onFilterInvoices: function(event) {
            var filter = [];
            var query = event.getParameter("query");

            if(query) {
                filter.push(new Filter("ProductName", FilterOperator.Contains, query));
            }

            var list = this.byId("invoiceList");
            var binding = list.getBinding("items");
            binding.filter(filter);
        },

        onPress: function(event) {
            var item = event.getSource();
            alert(encodeURIComponent(item.getBindingContext("invoice").getPath()));
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("detail", {
                /// Not allow '/' in data, so we add encodeURIComponent.
                invoicePath: encodeURIComponent(item.getBindingContext("invoice").getPath())
            });
        }
    });
});