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
  <ul
    v-if="refPlans && refPlans.length"
    class="planner-list">
    <PlannerCard
      v-for="plan in refPlans"
      :key="plan.id"
      :plan="plan"
    />
  </ul>
</template>

<style>
  .planner-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0 auto;
    max-width: 100%;
    padding: 0;
    width: 22.5rem; /* 360px */
  }
</style>