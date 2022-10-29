<template>
    <div class="content-box">
        <h3>Поиск по авторам: </h3>
        <div class="input-form">
            <input type="text" v-model="inputTxt"> 
            <button v-on:click="saveInpValue">Найти</button>
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
                el.author.includes(this.inputValue) 
            ) 

            return cites 
        }, 
        saveInpValue() {
            this.inputValue = this.inputTxt 
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