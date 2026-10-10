import { isSameDay } from 'date-fns';
import { useState, type ReactNode } from 'react';
import { HabitContext, type Habit } from './useHabits';

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), name, completions: [] }]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const toggleHabit = (id: string, date: Date) => {
    console.log(id, date);

    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const alreadyDone = habit.completions.some((completion) => isSameDay(completion, date));
        const completions = alreadyDone
          ? habit.completions.filter((completion) => !isSameDay(completion, date))
          : [...habit.completions, date];

        return { ...habit, completions };
      }),
    );
  };

  return (
    <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>{children}</HabitContext>
  );
}
