import { Button } from './Button';

export default function HabitForm() {
  return (
    <form className="flex gap-2">
      <input
        className="flex-1 rounded bg-zinc-700 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        type="text"
        placeholder="New habit..."
      />
      <Button>Add Habit</Button>
    </form>
  );
}
