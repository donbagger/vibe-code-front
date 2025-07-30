import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card className="bg-[#1A1A1A] border-[#43AA05]/30">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-medium text-[#43AA05] flex items-center justify-center">
            <span className="mr-2">⏰</span>
            Submission Deadline
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#43AA05]">{timeLeft.days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#43AA05]">{timeLeft.hours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#43AA05]">{timeLeft.minutes}</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#43AA05]">{timeLeft.seconds}</div>
              <div className="text-xs text-muted-foreground">Seconds</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}