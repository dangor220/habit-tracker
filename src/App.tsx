import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList, { type Habit } from './components/HabitList';
import { useState } from 'react';
import { isSameDay } from 'date-fns';

export default function App() {
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
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList deleteHabit={deleteHabit} toggleHabit={toggleHabit} habits={habits} />
    </div>
  );
}
