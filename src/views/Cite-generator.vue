<template>
  <div class="about">
    <blockquote>
      <h2>Генератор цитат!</h2> 

      <span class="span-text"> 
        <p class="text">Тут должна быть случайная умная цитата, которая тебе непременно понравится</p>
        <cite>Автор цитаты</cite>
      </span> 

      <button>Сгенерировать!</button>
    </blockquote>
  </div>
</template> 

<style scoped> 

  blockquote 
  {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 10vh; 
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
  }

  .span-text 
  { 
    position: relative; 
    max-width: 400px; 
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
