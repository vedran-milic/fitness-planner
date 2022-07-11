<script setup lang="ts">
import { Plan } from '../composables/plans';

interface Props {
  plan: Plan
}

const { plan } = defineProps<Props>();
</script>

<template>
  <h1>{{ plan.id }}</h1>
  <p>{{ plan.exerciseName }}</p>
</template>

<style>
</style>