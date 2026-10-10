import { Button } from './Button';
import { eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, startOfWeek } from 'date-fns';
import type { Habit } from './HabitList';

type HabitItemProps = {
  habit: Habit;
  deleteHabit: (id: string) => void;
  toggleHabit: (id: string, date: Date) => void;
};

export default function HabitItem({ habit, deleteHabit, toggleHabit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const completions = habit.completions.length;
  const streak = completions > 0 ? '🔥' + completions : '';

  return (
    <div className="rounded-xl bg-zinc-700 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">{streak}</span>
        </div>
        <Button
          className="text-sm"
          variant="ghost-destructive"
          onClick={() => deleteHabit(habit.id)}>
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={habit.completions.some((d) => isSameDay(date, d)) ? 'primary' : 'secondary'}
            onClick={() => toggleHabit(habit.id, date)}>
            <span className="font-medium">{format(date, 'EEE')}</span>
            <span> {format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
