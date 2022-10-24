<template>
    <div>
      <nav>
        <h2>Генератор цитат</h2> 
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