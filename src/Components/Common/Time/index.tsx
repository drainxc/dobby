import * as S from "./styles";
import { useEffect, useState } from "react";
import { fillZero } from "../../../Library/Function/fillzero";

export default function Time() {
  const now = new Date();
  const [count, setCount] = useState<number>(0);
  const [time, setTime] = useState<timeType>({
    year: "0",
    month: "0",
    day: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  type timeType = {
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
    seconds: string;
  };

  counting();

  useEffect(() => {
    setTime({
      year: fillZero(2022 - now.getFullYear()),
      month: fillZero(3 - now.getMonth() - 1),
      day: fillZero(14 - now.getDate() - 1),
      hours: fillZero(14 - now.getHours() - 1),
      minutes: fillZero(60 - now.getMinutes() - 1),
      seconds: fillZero(60 - now.getSeconds()),
    });
  }, [count]);

  function counting() {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }
  
  return (
    <>
      <S.Time>
        <div>
          {time.year} : {time.month} : {time.day} : {time.hours} :{" "}
          {time.minutes} : {time.seconds}
        </div>
      </S.Time>
    </>
  );
}
