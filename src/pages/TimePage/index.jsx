import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Calendar from "../../components/Calendar";
import GoToBackArrow from "../../components/GoToBackArrow";
import TimeList from "../../components/Lists/TimeList";
import "./index.css";

const TimePage = () => {
  const navigate = useNavigate();

  return (
    <div className="time_page page_bg">
      <GoToBackArrow />
      <Calendar />
      <div className="times">
        <TimeList title={"День"} />
        <TimeList title={"Вечер"} />
      </div>
      <Button onClick={() => navigate("/confirmation")}>Продолжить</Button>
    </div>
  );
};

export default TimePage;
