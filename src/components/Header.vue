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
      
      <Navbar /> 
    </nav>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue' 

  export default {
    components: {
      Navbar 
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
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 70vw;
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



  @media screen and (max-width: 1000px) {
    .title-quotes::before 
    {
      left: -50px; 
    } 
    .title-quotes::after
    {
      right: -50px;
    }
  } 

  @media screen and (max-width: 860px) {
    .title-quotes::before 
    {
      left: -40px; 
    } 
    .title-quotes::after
    {
      right: -40px;
    }
  } 

  @media screen and (max-width: 600px) { 

    .title 
    {
      max-width: 60vw; 
    } 

    .title-quotes 
    {
      width: 50vw;
    }
    .title-quotes::before 
    {
      left: -10px; 
    } 
    .title-quotes::after
    {
      right: -10px;
    }
  } 

    @media screen and (max-width: 540px) {
    .title-quotes::before 
    {
      left: -10px; 
    } 
    .title-quotes::after 
    {
      right: -10px; 
      bottom: -20px;
    }
  }

  @media screen and (max-width: 480px) { 

    .title 
    {
      max-width: 60vw; 
    } 

    .title-quotes 
    {
      width: 80vw;
    }
    .title-quotes::before 
    {
      left: -20px; 
    } 
    .title-quotes::after
    {
      right: -20px; 
    }
  }
</style>