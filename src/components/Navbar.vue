<template>
    <div class="links"> 
        <router-link to="/">Главная</router-link>
        <router-link to="/Cite-generator">Случайная цитата</router-link>  
        <router-link to="/Authors-filter">По авторам</router-link>  
    </div> 
</template> 



<style scoped> 
  .links 
  {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    padding: 5px; 
    gap: 3vw; 
    font-weight: 500;
    font-family: Avenir, Helvetica, Arial, sans-serif; 
    border: 1px solid black; 
    border-left: none; 
    border-right: none; 
    margin-top: 3vh; 
  }

  a 
  {
    text-decoration: none; 
    color: black; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    border-radius: 20px;
    padding: 10px; 
    text-shadow: 0px 0px 0px white; 
    transition-property: text-shadow, box-shadow, color, background-color;
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