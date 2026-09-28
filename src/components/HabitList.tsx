import HabitItem from './HabitItem';

export default function HabitLis() {
  const habits = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
  ];

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {habits.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
