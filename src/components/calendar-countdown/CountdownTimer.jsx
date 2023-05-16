import { useCountdown } from "../../hook/useCountdown ";
import { ExpiredCountdown } from "./ExpiredCountdown";
import { ShowCounter } from "./ShowCounter";

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredCountdown />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
