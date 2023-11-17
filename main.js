const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'ToDO list',
            todoList: [
                {
                    text: 'andare in palestra',
                    done: false
                },
                {
                    text: 'fare il ToDO',
                    done: false
                },
                {
                    text: 'studiare VUE',
                    done: true
                },
                {
                    text: 'preparare i pasti',
                    done: false
                },
                {
                    text: 'fare la lavatrice',
                    done: true
                },
                {
                    text: 'comprare i giochi per ps5',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteBtn(index) {
            this.todoList.splice(index, 1);
        }      
    }
};

createApp(opzioni).mount('#app')
