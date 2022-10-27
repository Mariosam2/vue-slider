import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            activeImg: 0,
            message: 'Hello Vue!',
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            stop: (interval) => {clearInterval(interval)},
            
        }
    },
    methods: {
        prev(){
            let minIndex = 0;
            let maxIndex = this.slides.length - 1;
            this.activeImg--;
            if(this.activeImg < minIndex){
                this.activeImg = maxIndex;
            }
        },        
        next(){
            let minIndex = 0;
            let maxIndex = this.slides.length - 1;
            this.activeImg++;
            if(this.activeImg > maxIndex){
                this.activeImg = minIndex;
            }
        },
        getCurrentImg(index){
            this.activeImg = index;
        },
        start(){
            this.interval = setInterval(this.next,3000);
            
            
        },
        
    },
    mounted(){
        //console.log(this)
        //console.log(this.activeImg)
        //console.log(this.number);
        this.start();
        
       
    }
}).mount('#app')



