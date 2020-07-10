
var app = new Vue({
    el: '#app',
    data: {
        message: 'First Project!',
        on: false,
        color: "red",
        brightness: 1
    },
    computed: {
        style: function(){
            var sliderObject = {
                backgroundColor: this.color,
                opacity: this.brightness
            }
            return sliderObject;
        },
        dimComp: function(){
            return Math.round(this.brightness*100);
        }
    },
    methods: {
        toggle: function(){
            this.on = !this.on;
        }
    }
})