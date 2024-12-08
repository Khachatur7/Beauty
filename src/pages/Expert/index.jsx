import "./index.css";
import GoToBackArrow from "../../components/GoToBackArrow";
import AboutExpert from "../../components/DifficultComponents/AboutExpert";
import Review from "../../components/Review";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const Expert = () => {

  const navigate = useNavigate()

  return (
    <div className="expert_page page_bg">
      <GoToBackArrow />
      <AboutExpert />
      <Review />
      <Button className={"bottom_bttn"} onClick={()=>navigate(-1)}>Записаться к специалисту</Button>
    </div>
  );
};

export default Expert;
