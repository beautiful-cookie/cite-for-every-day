<template>
    <div>
      <nav>
        <h2>Cite generator</h2> 
        <div class="links">
          <router-link to="/"><strong>Home</strong></router-link> |
          <router-link to="/Cite-generator"><strong>Cite generator</strong></router-link>
        </div>
  
      </nav>
    </div>
  </template>
  
  <script>
  
  export default {
    components: {
      
    }
  }
  </script>
  
  
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
        font-weight: 500; 
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
      }
  </style>