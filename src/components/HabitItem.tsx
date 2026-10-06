import { Button } from './Button';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

type HabitItemProps = {
  habit: {
    id: number;
    name: string;
  };
};

export default function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  console.log(visibleDates);

  return (
    <div className="rounded-xl bg-zinc-700 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">🔥 3</span>
        </div>
        <Button>Delete</Button>
      </div>
      <div>
        {visibleDates.map((date) => (
          <Button key={date.toISOString()}>
            <span className="font-medium">{format(date, 'EEE')}</span>
            <span> {format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
