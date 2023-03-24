const { createApp } = Vue

createApp({
    data(){
        return {
            name: '',
            age: 21,
            input_name: "",
        }
    },
    methods: {
        submitform(e) {

            e.prevenDefault();
            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}).mount("#app")