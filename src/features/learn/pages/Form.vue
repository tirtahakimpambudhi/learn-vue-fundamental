<script setup lang="ts">
import Input from '@learn/components/Input.vue';
import {addUser} from '@learn/handlers/form';
import {isSubmitState} from "@learn/states/isSubmit";

</script>

<template>
    <form class="" @submit.prevent="(e) => addUser(e)">
        <Input :label="'Name'" :typeInput="'text'"></Input>
        <Input :label="'Email'" :typeInput="'email'"></Input>

        <button type="submit" :disabled="isSubmitState">
          {{ isSubmitState ? 'Submitting...' : 'Submit' }}
        </button>
    </form>
</template>

<style scoped></style>