const app = Vue.createApp({
    data() {
        return {
            list: [],
        }
    },
    methods: {
        emailGen(){
            for (let i = 0 ; i < 10; i++){

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data);
                    this.list.push(response.data);
                    console.log(this.list);
                })
            }
        }
    },
    beforeMount() {
        this.emailGen();
    },
})
app.mount("#app");
