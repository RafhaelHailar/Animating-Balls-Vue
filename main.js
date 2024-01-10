const app = Vue.createApp({
    data() {
        return {
            animation: "rotate-x",
            overflow: "hidden"
        }
    },
    methods: {
        changeAnimation(animation) {
            this.animation = animation; 
            
            if ((animation.split("-"))[0] == "slide") this.overflow = "hidden";
            else this.overflow = "auto";
        }
    }
});

app.mount("#app");
