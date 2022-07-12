<script setup lang="ts">
import { Plan } from '../composables/plans';

interface Props {
  plan: Plan
}

const props = defineProps<Props>();
</script>

<template>
  <li class="planner-card">
    <div class="planner-card-drag-handle">
      handle
    </div>
    <div class="planner-card-content">
      <h3>{{ props.plan.exerciseName }}</h3>
      <p v-if="props.plan.duration" class="repetition">
        {{ props.plan.duration }}
      </p>
      <p v-if="props.plan.repetitions" class="repetition">
        x {{ props.plan.repetitions }}
      </p>
    </div>
  </li>
</template>

<style>
.planner-card {
  align-items: center;
  display: flex;
  width: 100%;
}

.planner-card-drag-handle {
  width: 60px;
}

.planner-card-content {
  border-bottom: 1px solid gray;
  flex: 1;
  text-align: left;
}

.repetition {
  color: gray;
}
</style>