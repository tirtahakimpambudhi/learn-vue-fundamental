<script setup lang="ts">

</script>

<template>
     <main class="max-w-4xl mx-auto px-6 py-8">

    <!-- Form Component -->
    <slot name="form">
    
    </slot>

    <!-- Filter Component -->
    <slot name="filter">

    </slot>

    <!-- Content Component -->
    <slot name="content">

    </slot>

    <!-- Progress Component -->
     <slot name="progress">
        
     </slot>


     </main>
</template>

<style scoped>
/* Your styles here */
</style>