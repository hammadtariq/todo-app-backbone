(function () {
    'use strict';

    var TodoItem = Backbone.Model.extend({
        defaults: {
            itemValue: { name: 'test', status: false },
            todoList: [],
        },
        initialize: function () {
        },
    });

    var TempView = Backbone.View.extend({
        defaults: {},
        initialize: function () {
            this.render();
        },
        render: function (model) {
            // var template = _.template($("#temp1").html(), {});
            var template = `
            <div>
                <input type="text" id="myInput">
                <button id="addBtn">ADD</button>
            </div>
            `
            this.$el.html(template);
        },
        events: {
            "click button#addBtn": "addTodo"
        },
        addTodo: function () {
            var item = document.querySelector("#myInput").value;
            var obj = Object.assign({}, this.model.get("itemValue"), { name: item });
            this.model.set({ todoList: this.model.get("todoList").concat(obj) });
            var listView = new ListView({ model: this.model, el: $("#myList") });
        }
    });


    var ListView = Backbone.View.extend({
        initialize: function () {
            this.render()
        },
        render: function () {
            var list = this.model.get("todoList");
            var items = list.map(element => {
                return `<li>${element.name}</li>`
            });
            this.$el.html(items);
        }
    });

    $(document).ready(function () {
        var todoItem = new TodoItem();
        var tempView = new TempView({ model: todoItem, el: $("#myApp") });
    });

})();