<template>
  <div class="content">
    <div class="content-box">
      <h3>Это сайт с цитатами на каждый день</h3> 
      <p class="text">Тут ты можешь искать вдохновение, мотивацию да и просто умные мысли, выраженные в лаконичной форме</p> 
      <p>Приятного серфинга!</p> 
    </div>
  </div>
</template> 

<style scoped>
  .content 
  {
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-top: 10vh; 
    width: 100%; 
  } 

  .content-box 
  {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    width: 70%; 
    border-radius: 10px;
    border-left: 1px solid black; 
    padding-left: 10px; 
  }

  .text 
  { 
    display: inline-block; 
    text-align: center; 
    width: 50vw; 
  }
</style>