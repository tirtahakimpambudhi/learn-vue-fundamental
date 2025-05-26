<script setup lang="ts">
import Input from '@components/Input.vue';
import {addUser} from '@handlers/form';

</script>

<template>
    <form @submit.prevent="addUser">
        <Input :label="'name'" :typeInput="'text'"></Input>
        <button type="submit" >Kirim</button>
    </form>
</template>

<style scoped></style>