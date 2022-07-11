<script setup lang="ts">
import { ref } from 'vue';
import PlannerCard from './PlannerCard.vue';
import { usePlans } from '../composables/plans';

const { plans, getPlans } = usePlans();

const refPlans = ref(plans);
getPlans();
</script>

<template>
  <h1>This is planner list</h1>
  <template v-if="refPlans && refPlans.length">
    <PlannerCard
      v-for="plan in refPlans"
      :key="plan.id"
      :plan="plan"
    />
  </template>
</template>

<style>
</style>