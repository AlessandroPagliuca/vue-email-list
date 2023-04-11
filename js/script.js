/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Vue Email List',
            randomMail: [],
            basePath:'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods:{
        getData(){
            this.randomMail = [];
            setTimeout(() => {
                for(let i = 0; i < 10; i++){
                    axios.get(this.basePath+'random/mail').then((result)=>{
                        console.log(result.data.response);
                        this.randomMail.push(result.data.response);
                    });
                }
            }, 3000);
           
           
        }
    },
    mounted(){
        setTimeout(() => {
            this.getData();
        }, 2000);
        
        

    },
}).mount('#app');