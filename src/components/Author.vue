<template>
    <div>
        <div class="author">
            {{this.author}}
        </div> 
    </div>
</template> 

<script>
export default {
    props: {
        author: { 
            type: String, 
            required: true 
        }, 
        index: Number 
    }
}
</script>

<style scoped> 
.author
{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 10px; 
    border: 1px solid black; 
}
</style>