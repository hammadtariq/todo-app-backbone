(function () {
    'use strict';

    var TodoItem = Backbone.Model.extend({
        defaults: {
            itemValue: "wow",
            todoList: [],
        },
        initialize: function () {
            // this.addItem();
        },
        addItem: function () {
            // this.on("change:itemValue", function (model) {
            //     var test = model.get("itemValue");
            //     alert('itemValue is : ' + test);
            // })
        }
    });

    // var todoItem = new TodoItem(
    //     { description: "Pick up milk", status: 'incomplete', id: 1 }
    // );

    // var TodoView = Backbone.View.extend({
    //     defaults: {},
    //     initialize: function () {
    //         console.log('el ', this.el);
    //         console.log('jq ', this.$el);
    //     },
    //     render: function () {
    //         var html = `
    //             <h3> ${this.model.get('description')} </h3>`;
    //         $(this.el).html(html);
    //     }
    // });


    // $(document).ready(function () {
    //     var todoView = new TodoView({ model: todoItem, el: $("#myApp") });
    //     todoView.render();
    //     var todoItem = new TodoItem();
    //     todoItem.set({ itemValue: "my new value" });
    //     console.log("todo item: ", todoItem.get("itemValue"));
    // });


})();