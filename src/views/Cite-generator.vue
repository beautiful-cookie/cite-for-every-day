<template>
  <div class="about">
    <div class="cites">
      <h2>Генератор цитат!</h2> 

      <span class="span-text"> 
        <p class="text">Тут должна быть случайная умная цитата, которая тебе непременно понравится</p>
      </span> 

      <button>Сгенерировать!</button>
    </div>
  </div>
</template> 

<style scoped>
  .cites 
  {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 10vh; 
  } 

  .span-text 
  {
    max-width: 400px; 
  }
  .text 
  { 
    text-align: center; 
    /* border: 1px solid rgba(0, 0, 0, 0.5);  */
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
    padding: 20px; 
  } 

  .span-text::before 
  {
    content: '"'; 
    position: absolute; 
    background-color: black; 
    color: white; 
    border-radius: 50%; 
    width: 20px; 
    font-weight: 500; 
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transform: translate(-1000%);
    top: auto; 
    margin: auto;  
  } 

  .span-text::after  
  {
    content: '"'; 
    position: absolute; 
    background-color: black; 
    color: white; 
    border-radius: 50%; 
    width: 20px; 
    font-weight: 500; 
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transform: translate(1000%);
    top: auto; 
    margin: auto;  
  }

</style>
