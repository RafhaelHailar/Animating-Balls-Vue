const app = Vue.createApp({
    data() {
        return {
            animation: "rotate-x"
        }
    },
    methods: {
        changeAnimation(animation) {
            this.animation = animation; 
        }
    }
});

app.mount("#app");
