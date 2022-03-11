import * as S from "./styles";
import { useEffect, useState } from "react";

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
