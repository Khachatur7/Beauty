import { useState } from "react";
import Button from "../../components/Buttons/Button";
import Details from "../../components/DifficultComponents/Details";
import GoToBackArrow from "../../components/GoToBackArrow";
import StarSVG from "../../components/SVG/StarSVG";
import TextArea from "../../components/Inputs/TextArea";
import TipButton from "../../components/Buttons/TipButton";
import expert from "../../images/about_expert.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const LeaveReview = () => {
  const bttnsText = ["50 ₽", "100 ₽", "Без чаевых", "Своя сумма"];
  const [tipsType, setTipsType] = useState("");
  const navigate = useNavigate()
  return (
    <div className="leave_review_page page_bg">
      <GoToBackArrow />
      <div className="review_component">
        <div className="review_component_service">
          <div className="expert_img">
            <img src={expert} alt="expert_img" />
          </div>
          <div className="review_component_service__block-text">
            <div className="expert_name">
              <span>Иван Иванов</span>
            </div>
            <div className="review_component_about_service">
              <span>21 ноября 2024 в 09:00 · 3000 ₽ </span>
            </div>
          </div>
          <div className="send_review_stars">
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
          </div>
        </div>
        <TextArea placeholder={"Напишите отзыв"} />
        <div className="give_tips">
          <div className="tips_title">
            <span>Чаевые</span>
          </div>
          <div className="tips_bttns_list">
            {bttnsText.map((bttn) => {
              return (
                <TipButton
                  onClick={() => setTipsType(bttn)}
                  active={bttn === tipsType}
                >
                  {bttn}
                </TipButton>
              );
            })}
          </div>
        </div>
      </div>
      {(tipsType == bttnsText[0] || tipsType == bttnsText[1]) && (
        <Details type={"tips"} />
      )}
      {tipsType == bttnsText[3] && (
        <>
          <div className="tips_input">
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17H5V14H11V12H5V10H9.5C12.257 10 14.5 7.757 14.5 5C14.5 2.243 12.257 0 9.5 0H4C3.73478 0 3.48043 0.105357 3.29289 0.292893C3.10536 0.48043 3 0.734784 3 1V8H0V10H3V12H0V14H3V17ZM5 2H9.5C11.154 2 12.5 3.346 12.5 5C12.5 6.654 11.154 8 9.5 8H5V2Z"
                fill="#C0C0C0"
              />
            </svg>
            <input type="text" placeholder="Введите сумму..." />
          </div>
        </>
      )}
      <Button onClick={()=>navigate("/")}>Отправить</Button>
    </div>
  );
};

export default LeaveReview;
