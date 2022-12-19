const app = Vue.createApp({
    data() {
        return {
            myName: 'Mirabbos Ozodjonov',
            myAge: 25,
            imageURL: './images/nature.jpg'
        };
    },

    methods: {
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');