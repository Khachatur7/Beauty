import "./index.css";
import arrow from "../../images/svg/arrow.svg";
import { useState } from "react";
const Calendar = () => {
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const days = ["06", "07", "08", "09", "10", "11", "12"];
const [activeDay, setActiveDay] = useState("")

  return (
    <div className="calendar">
      <div className="calendar_header">
        <div className="month">
          <span>Ноябрь</span>
        </div>
        <div className="nav_arrows">
          <img src={arrow} alt="arrow" className="prev_month" />
          <img src={arrow} alt="arrow" className="next_month" />
        </div>
      </div>
      <div className="datas">
        <div className="weekdays">
          {weekdays.map((el) => {
            return (
              <div className="weekday">
                <span>{el}</span>
              </div>
            );
          })}
        </div>
        <div className="numbers">
          {days.map((el) => {
            return (
              <div className={`day ${activeDay===el && "active_cal_day"}`} onClick={()=>setActiveDay(el)}>
                <span>{el}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
