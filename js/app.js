$(function () {
    // Remove loader
    $('.loader').css('width', '0');

    var vm = new Vue({
        el: "#app",
        data: {
            title: "TODO List",
            demo: '',
            todos: [{
                    id: 1,
                    text: "Todo text",
                    done: true
                },
                {
                    id: 2,
                    text: "Todo text 2",
                    done: false
                },
                {
                    id: 3,
                    text: "Todo text ",
                    done: false
                }
            ]
        },
        methods: {
            add: function () {
                var item_text = $("#todo_input").val();

                if (this.todos.length == 0) {
                    id = 1
                } else {
                    var id = this.todos[this.todos.length - 1].id + 1;
                }

                var item = {
                    id: id,
                    text: item_text,
                    done: false
                }
                this.todos.push(item);
                this.demo = '';
            }
        }
    })
});