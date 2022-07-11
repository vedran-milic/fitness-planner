<script setup lang="ts">
import { Plan } from '../composables/plans';

interface Props {
  plan: Plan
}

const props = defineProps<Props>();
</script>

<template>
  <h1>{{ props.plan.id }}</h1>
  <p>{{ props.plan.exerciseName }}</p>
</template>

<style>
</style>