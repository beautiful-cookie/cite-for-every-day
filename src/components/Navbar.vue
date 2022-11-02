<template>
    <div class="links"> 
        <router-link to="/" exact>Главная</router-link>
        <router-link to="/Cite-generator">Случайная цитата</router-link>  
        <router-link to="/Authors-filter">По авторам</router-link>  
    </div> 
</template> 



<style scoped> 

  .links 
  {
    position: relative; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-width: 90vw; 
    max-width: 100vw; 
    font-weight: 500;
    font-family: Avenir, Helvetica, Arial, sans-serif; 
    padding: 20px; 
    gap: 2vw; 
    margin-top: 3vh; 
    background: linear-gradient(to right, rgb(136, 136, 136), rgb(131, 130, 130)); 
  } 

  .links::after 
  {
    content: ''; 
    position: absolute; 
    min-width: 90vw; 
    max-width: 100vw; 
    height: 3px; 
    background-color: black; 
    border-radius: 3px;
    transition-property: box-shadow; 
    transition-duration: 0.4s;
    bottom: 0; 
    left: 0; 
    right: 0; 
  }
  .links:hover:after 
  {
    box-shadow: 0px -2px 4px 3px whitesmoke; 
  } 

  .links::before 
  {
    content: ''; 
    position: absolute; 
    min-width: 90vw; 
    max-width: 100vw; 
    height: 3px; 
    background-color: black; 
    border-radius: 3px;
    transition-property: box-shadow; 
    transition-duration: 0.4s;
    top: 0; 
    left: 0; 
    right: 0; 
  }
  .links:hover:before 
  {
    box-shadow: 0px 2px 4px 3px whitesmoke; 
  }


  a 
  {
    text-decoration: none; 
    color: white; 
    background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    padding: 10px 20px 10px 20px; 
    text-shadow: 0px 0px 0px white; 
    border-radius: 10px;
    border-bottom: 5px solid rgb(87, 87, 87); 
    transition-property: text-shadow, box-shadow, color, background-color, opacity, border;
    transition-duration: 0.3s; 
    opacity: .8; 
  }

  a:hover, 
  a.router-link-exact-active 
  {
    box-shadow: 0 0 8px black; 
    background-color: black; 
    text-shadow: 0 0 3px white; 
    text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray; 
    border-bottom: 5px solid rgb(228, 228, 228); 
    opacity: 1; 
  } 



</style>