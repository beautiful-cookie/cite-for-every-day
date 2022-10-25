<template>
    <div>
      <nav>
        <div class="title-wrapper">
          <div class="title-quotes">
            <div class="title"> 
              <cite class="title-cite">Если я цитирую других, то лишь для того, чтобы лучше выразить свою собственную мысль</cite> 
              <span class="autor"><cite>- Мишель Монтень</cite></span> 
            </div>
          </div>
        </div>

        <div class="links">
          <router-link to="/"><strong>Главная</strong></router-link> |
          <router-link to="/Cite-generator"><strong>Случайная цитата</strong></router-link>
        </div>
  
      </nav>
    </div>
</template>

  
<style scoped> 
    nav 
    {
      display: flex; 
      flex-direction: column;
      justify-content: center; 
      align-items: center; 
    } 

  .title-wrapper 
  {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100vw; 
    overflow: hidden; 
  } 

  .title-quotes
  {
    width: 70vh;
    position: relative; 
  }

  .title-quotes:before, 
  .title-quotes:after 
  { 
    position: absolute; 
    color: black; 
    font-size: 50px;
    font-family: Times, sans-serif;    
    line-height: 50px;  
    border-radius: 50%; 
  }

  .title-quotes::before 
  {
    content: '“'; 
    left: -40px; 
    top: 0;
  } 

  .title-quotes::after  
  {
    content: '”'; 
    right: -40px; 
    bottom: -15px; 
  }

    .title 
    { 
      position: relative;
      display: flex; 
      justify-content: center; 
      align-items: center; 
      flex-direction: column; 
      text-align: center;  
      max-width: 70vw; 
      gap: 2vh;
      margin-top: 2vh; 
      margin-bottom: 2vh;  
      padding-left: 15px; 
      padding-right: 15px; 
    } 

    .title:before, 
    .title:after 
    {
      content: ""; 
      position: absolute; 
      height: 90px; 
      width: 2px; 
      background-color: black;  
      box-shadow: 0 0 8px black; 
      top: auto; 
    } 

    .title::before 
    {
      left: 0; 
    } 

    .title::after 
    {
      right: 0; 
    }

    .title-cite 
    {
      font-size: 18px; 
      text-shadow: 4px 8px 8px black; 
    }
    .author 
    {
      text-decoration: underline; 
      font-size: 10px; 
    }

    .links 
    {
      display: flex; 
      justify-content: center; 
      align-items: center; 
      width: 100%; 
      padding: 5px; 
      gap: 1vw; 
      font-family: Avenir, Helvetica, Arial, sans-serif; 
      border: 1px solid black; 
      border-left: none; 
      border-right: none; 
    }

    a 
    {
      text-decoration: none; 
      color: black; 
      font-weight: 300; 
      border-radius: 5px;
      padding: 3px; 
      transition-property: box-shadow, color, background-color;
      transition-duration: 0.3s; 
    } 

    a:hover 
    { 
      box-shadow: 0 0 8px black; 
      background-color: black; 
      color: white; 
      text-shadow: 0 0 1px white;  
    }
</style>