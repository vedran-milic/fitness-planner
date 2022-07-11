export interface Plan {
  id: number;
  exerciseName: string
}

export function usePlans() {
  const plans: Array<Plan> = [];

  function getPlans() {
    plans.push(
      {
        id: 0,
        exerciseName: 'Some random name',
      },
      {
        id: 1,
        exerciseName: 'Some random name 1',
      },
      {
        id: 2,
        exerciseName: 'Some random name 2',
      },
      {
        id: 3,
        exerciseName: 'Some random name 3',
      },
    )
  }

  return {
    plans,
    getPlans
  }
}
