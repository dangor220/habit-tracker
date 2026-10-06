import { useState, type SubmitEvent } from 'react';
import { Button } from './Button';

type HabitFormProps = {
  addHabit: (name: string) => void;
};

export default function HabitForm({ addHabit }: HabitFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (name.trim() === '') return;

    setName('');
    addHabit(name);
  };

  return (
    <form className="flex gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="flex-1 rounded bg-zinc-700 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        type="text"
        placeholder="New habit..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button disabled={name.trim() === ''} className="rounded-lg px-4 py-2 font-medium">
        Add Habit
      </Button>
    </form>
  );
}
