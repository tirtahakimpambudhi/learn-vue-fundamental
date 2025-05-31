<script setup lang="ts">
import Input from '@components/Input.vue';
import {addUser} from '@handlers/form';
import {isSubmitState} from "../states/isSubmit.ts";

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