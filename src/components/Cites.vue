<template>
    <div class="quote-container"> 
        <span class="span-text"> 
            <p class="text">{{cite.quote}}</p>
            <cite>- {{cite.author}}</cite>
        </span> 
    </div> 
</template> 

<script>
export default {
    props: {
        cite: Object, 
        author: String 
    } 
}
</script>

<style scoped>
/* .cite 
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    gap: 1vh; 
    padding: 10px; 
    border: 1px solid black; 
    border-radius: 5px; 
} */


.quote-container 
  {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border: 1px solid black; 
    padding: 20px; 
    border-radius: 10px;
  }

  .span-text 
  { 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    position: relative; 
    max-width: 400px; 
    padding: 3px; 
    gap: 5vh; 
    margin-bottom: 10vh;
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
    right: -10px; 
    bottom: -30px; 
  } 

  @media screen and (max-width: 430px) {
    .span-text::before, 
    .span-text::after  
    {
      font-size: 50px; 
    } 

    .span-text::before 
    {
      left: 15px; 
      top: -10px;
    } 

    .span-text::after  
    {
      right: 15px; 
      bottom: -20px; 
    }
  } 

  @media screen and (max-width: 400px) { 

    .span-text 
    { 
      max-width: 300px; 
    }
    .span-text::before, 
    .span-text::after  
    {
      font-size: 40px; 
    } 

    .span-text::before 
    {
      left: 0px; 
      top: -15px; 
    } 

    .span-text::after  
    {
      right: 10px; 
      bottom: -20px; 
    }
  } 

</style>