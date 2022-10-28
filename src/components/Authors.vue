<template>
    <div class="wrapper">
        <div>
            <Author v-for="(author, i) of authorsList" 
                    v-bind:author="author" 
                    v-bind:index="i" /> 
        </div>
    </div>
</template> 

<script>
import Author from '@/components/Author.vue' 

export default {
    components: {
        Author
    }, 
    props: ['authorsList']
}
</script> 

<style scoped>
.wrapper 
{ 
    height: 30vh; 
    overflow: scroll; 
}
</style>