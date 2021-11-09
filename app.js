const App = {
    data: function(){
        return{
            changes:false,
            color:"blue",
            bg:"orange",
            styles:{
                fontSize:"30px",
                background:"crimson",
                padding:"5px"
            },
            text:'I love YOU'
        }
    },
    methods:{
        change(){
            if (this.changes){
                this.styles.background="yellow"
                this.text = this.text.split('').reverse().join('')
            }
            else {
                this.styles.background="purple"
            }
        }
    }
}
Vue.createApp(App).mount("#app")
