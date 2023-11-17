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
                    done: false
                },
                {
                    text: 'preparare i pasti',
                    done: false
                },
                {
                    text: 'fare la lavatrice',
                    done: false
                },
                {
                    text: 'comprare i giochi per ps5',
                    done: false
                }
            ]
        }
    },
   methods: {
        
   }
};

createApp(opzioni).mount('#app')
