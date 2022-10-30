<template>
    <div class="content-box">
        <h3>Поиск по авторам: </h3>
        <div class="input-form">
            <input placeholder="Автор..." type="text" class="inp" v-model="inputTxt"> 
            <button class="inpBtn" v-on:click="saveInpValue">Найти</button>
        </div> 

        <div class="cites-wrapper">
            <Cites v-for="cite of findCites()" 
                v-bind:cite="cite" />
        </div> 
    </div>
</template> 

<script>
import quotes from '@/assets/quotes.json' 
import Cites from '@/components/Cites.vue' 

export default { 
    data() {
        return {
            inputTxt: '', 
            cites: '', 
            inputValue: '', 
            citesAndAuthors: [] 
        }
    }, 
    components: {
        Cites 
    },
    methods: {
        findCites() { 
            let cites = [] 
            
            let citesArrStringify = JSON.stringify(quotes) 
            let citesArr = JSON.parse(citesArrStringify).quotes
                        
            cites = citesArr.filter( el => 
                el.author.toLowerCase().includes(this.inputValue) 
            ) 

            return cites 
        }, 
        saveInpValue() {
            this.inputValue = this.inputTxt.trim().toLowerCase() 
            this.inputTxt = ''
        }
    }
}
</script>

<style> 
.content-box 
{
    margin-top: 5vh; 
    font-size: 20px; 
    max-width: 100vw; 
} 

.input-form 
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-left: 5vw; 
    gap: 1vw; 
} 

.inp 
{
    min-width: 250px; 
    width: 30vw;
    max-width: 270px;
    background: linear-gradient(150deg, #2B2B2B, #1E1E1E); 
    font-size: 16px; 
    border: 2px solid #C1C1C1; 
    border-radius: 10px; 
    color: white; 
    padding: 5px 8px 5px 8px; 
    box-shadow: 0px 0px 8px black; 
    font-family: 'Times New Roman', Times, serif; 
} 

.inpBtn 
{
    padding: 6px 18px 6px 18px; 
    background-color: white; 
    border-radius: 10px; 
    border: 1px solid black; 
    color: black; 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    transition-property: color, background-color, box-shadow; 
    transition-duration: 0.5s; 
} 

.inpBtn:hover 
{
    color: white; 
    text-shadow: 0 0 8px white; 
    background-color: black; 
    box-shadow: 0 0 8px black; 
}

.cites-wrapper 
{
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 5vh; 
    margin-top: 3vh; 
}
</style>