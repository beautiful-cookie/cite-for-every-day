<template>
  <div id="app">
      <Header />  

      <transition name="fade">
        <router-view />
      </transition>
  </div>
</template> 

<script>
  import Header from '@/components/Header.vue' 

  export default { 
    components: { 
      Header 
    } 
  }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.fade-enter-active, .fade-leave-active
{
  transition: opacity 0.5s;  
} 

.fade-enter, .fade-leave-to 
{
  transition: opacity 0.5s;  
  opacity: 0; 
}
</style>

