const app = Vue.createApp({
    
    data(){
        return{
            firstname: "meshack",
            lastname:'kimutai',
            email:"meshack34@gmail.com",
            gender:"female",
            picture:"https://randomuser.me/api/portraits/men/10.jpg",

        }
    },
    methods:{
        getUser(){
            this.firstname: "meshack",
            this.lastname:'kimutai',
            this.email:"meshack34@gmail.com",
            this.gender:"female",
            this.picture:"https://randomuser.me/api/portraits/men/10.jpg",
        },
    },

})
app.mount('#app')