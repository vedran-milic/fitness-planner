export interface Plan {
  id: number;
  exerciseName: string;
  duration?: string;
  repetitions?: number;
}

export function usePlans() {
  const plans: Array<Plan> = [];

  function getPlans() {
    plans.push(
      {
        id: 0,
        exerciseName: 'Some random name',
        duration: '00:30'
      },
      {
        id: 1,
        exerciseName: 'Some random name 1',
        repetitions: 12
      },
      {
        id: 2,
        exerciseName: 'Some random name 2',
        duration: '00:30'
      },
      {
        id: 3,
        exerciseName: 'Some random name 3',
        repetitions: 15
      },
    )
  }

  return {
    plans,
    getPlans
  }
}
