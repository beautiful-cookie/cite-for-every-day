<template>
    <div class="message">
        <h3>Поиск по авторам: </h3>
        <div class="input-form">
            <input type="text" v-model="inputTxt"> 
            <button v-on:click="saveInpValue">Найти</button>
        </div> 

        <div class="cites-container">
            <div class="cites-wrapper">
                <Cites v-for="cite of findCites()"
                    v-bind:cite="cite" />
            </div>
        </div>
    </div>
</template> 

<script>
import quotes from '@/assets/quotes.json' 
import Authors from '@/components/Authors.vue' 
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
        Authors, Cites 
    },
    methods: {
        collectAuthors() { 
            let citesArrStringify = JSON.stringify(quotes) 
            let citesArr = JSON.parse(citesArrStringify).quotes
            let authorsArr = [] 
            for (let i = 0; i < citesArr.length; i++) {
                authorsArr.push(citesArr[i].author)    
            }

            return authorsArr 
        }, 
        copyTextArea() {
            let inp = this.inputTxt 
            this.inputTxt = ''
            return inp  
        }, 
        findCites() { 
            let cites = [] 
            
            let citesArrStringify = JSON.stringify(quotes) 
            let citesArr = JSON.parse(citesArrStringify).quotes
            let authorsArr = [] 
            for (let i = 0; i < citesArr.length; i++) {
                authorsArr.push(citesArr[i].author)    
            }


            for (let i = 0; i < citesArr.length; i++) {
                if (citesArr[i].author.includes(this.inputValue)) {
                    cites.push(citesArr[i].quote) 
                }
            }
                        

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
.message 
{
    margin-top: 5vh; 
    font-size: 20px; 
} 

.authors-wrapper 
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    max-width: 100vw; 
} 

.authors
{
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    max-width: 70vw; 
} 

.input-form
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.cites-container 
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100vw; 
}

.cites-wrapper 
{
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 3vh; 
    margin-top: 3vh; 
    padding: 30px; 
    border: 1px solid black; 
    border-radius: 10px; 
    width: 70vw; 
}
</style>