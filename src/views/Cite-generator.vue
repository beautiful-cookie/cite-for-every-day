<template>
  <div class="about">
    <blockquote>
      <h2>Случайная цитата:</h2> 

      <div class="quote-container"> 
        <span class="span-text"> 
          <p class="text">{{this.citeText}}</p>
          <cite>{{this.citeAuthor}}</cite>
        </span> 
      </div>

      <button v-on:click="this.findCite">Сгенерировать!</button>
    </blockquote>
  </div>
</template> 

<script> 
import quotes from '@/assets/quotes.json' 

export default {
  data() {
    return {
      citeText: 'Тут должна быть случайная умная цитата, которая тебе непременно понравится', 
      citeAuthor: 'Автор цитаты' 
    }
  }, 
  methods: {
      findCite() {
        let citesArrStringify = JSON.stringify(quotes) 
        let citesArr = JSON.parse(citesArrStringify)
        let citesLenght = citesArr.quotes   
        let citeNum = Math.floor(Math.random() * (citesLenght.length - 1) + 1) 
        let cite = citesLenght[citeNum] 
        this.citeText = cite.quote 
        this.citeAuthor = cite.author 
      }
    }
}
</script>

<style scoped> 

  blockquote 
  {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 5vh; 
    margin-top: 5vh;
    font-size: 16px; 
  } 

  button 
  {
    color: black; 
    font-weight: 500; 
    border-radius: 5px; 
    padding: 5px; 
    width: 300px; 
    height: 50px; 
    font-weight: 600;
    background-color: white; 
    border: 1px solid black; 
    transition-property: box-shadow, color, background-color;
    transition-duration: 0.3s; 
  }

  button:hover 
  { 
    box-shadow: 0 0 8px black; 
    background-color: black; 
    color: white; 
    text-shadow: 0 0 8px white; 
  } 

  .quote-container 
  {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100vw; 
    height: 35vh; 
  }

  .span-text 
  { 
    position: relative; 
    width: 400px; 
  }
  .text 
  { 
    text-align: center; 
    border-radius: 10px;
    padding: 20px; 
  } 

  .span-text:before, 
  .span-text:after 
  { 
    position: absolute; 
    color: black; 
    font-size: 100px;
    font-family: Times, sans-serif;    
    line-height: 100px;  
    border-radius: 50%; 
  }

  .span-text::before 
  {
    content: '“'; 
    left: -15px; 
    top: -15px;
  } 

  .span-text::after  
  {
    content: '”'; 
    right: -30px; 
    bottom: -30px; 
  }


</style>
