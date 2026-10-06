import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList, { type Habit } from './components/HabitList';
import { useState } from 'react';

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([{ id: '0', name: 'Learn JS' }]);

  const addHabit = (name: string) => {
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), name }]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}
