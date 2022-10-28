<template>
    <div class="cite">
        {{cite}} 
    </div>
</template> 

<script>
export default {
    props: {
        cite: String, 
        author: String 
    } 
}
</script>

<style scoped>
.cite 
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 10px; 
    border: 1px solid black; 
    border-radius: 5px; 
}
</style>