const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'ToDO list',
            newTodo: '',
            inputError: false,
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
            ],
            
        }
    },
    methods: {
        deleteBtn(index) {
            // l'indice lo passo al metodo (così capisco quale item lavoro)
            // splice è un metodo, ha bisogno di 2 proprietà:
            // 1) indice che mi dice suq aule item lavoro
            // 2) quanti elementi voglio elimninare
            this.todoList.splice(index, 1);
        },
        addItem()  {
            // oggetto che mi creo uguale all'oggetto task
            let todoNew = {
                text: this.newTodo,
                done: false
            };
            
            // add controller to todoList text field
            if (this.newTodo == '' || this.newTodo.length < 3) {
                // imposto true così mi da l'errore
                this.inputError = true;
                // alert('Inserisci testo');
            } else {
                // .push() aggiunge alla coda
                // unshift aggiunge all'inizio 
                this.todoList.unshift(todoNew);
                this.newTodo = '';

                // così resetto lo stato di errore, posso procedere
                this.inputError = false;
            }
        },
        // metodo di toggle per il done
        checkItem(index) {
            // controllo se esiste l'oggetto
            if (this.todoList[index]) {
                // dall'array vai in posizione index e cambia la proprietà con il contrario di quello che c'è già
                this.todoList[index].done = !this.todoList[index].done;
            }
        }
    }
};

createApp(opzioni).mount('#app')
