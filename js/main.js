const {createApp} = Vue;

createApp({
    data(){
        return{
            listOfEmails: []
        }
    },
    methods: {
        emailGenerator(){

            for(let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    
                    this.getIntoArray(result.data.response);

                });

            }
            
        },
        getIntoArray(element){

            this.listOfEmails.push(element);

        }
    },
    mounted () {
        
        this.emailGenerator();

    }
}).mount('#app')