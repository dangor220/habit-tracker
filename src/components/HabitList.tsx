import { useHabits } from '../context/useHabits';
import HabitItem from './HabitItem';

type HabitListProps = {
  visibleDates: Date[];
};

export default function HabitList({ visibleDates }: HabitListProps) {
  const { habits, deleteHabit, toggleHabit } = useHabits();
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          deleteHabit={deleteHabit}
          toggleHabit={toggleHabit}
          visibleDates={visibleDates}
        />
      ))}
    </div>
  );
}
