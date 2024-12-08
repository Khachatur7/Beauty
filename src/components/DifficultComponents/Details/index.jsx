import "./index.css";
import pencilLogo from "../../../images/svg/pencil_icon.svg";
import expert from "../../../images/expert_one.png";
import i from "../../../images/svg/i.svg";
import clock from "../../../images/svg/time_icon.svg";
import tips from "../../../images/svg/rub_icon.svg"
import Rating from "../../Rating";
import { useNavigate } from "react-router-dom";

const Details = ({ type, img }) => {

  const navigate = useNavigate()

  return (
    <div className="details_component">
      {(type == "expert" || !type) && (
        <>
          <div className="details_component_main_content">
            <div className="details_img">
              <img src={expert} alt="expert" />
            </div>
            <div className="about_expert__block-text">
              <div className="expert_name">
                <span>Иван Иванов</span>
              </div>
              <div className="expert_profession">
                <span>Парихмакер-стилист</span>
              </div>
              <Rating text={"(1 отзыв)"} />
            </div>
          </div>
          {img == "pencil" && (
            <img src={pencilLogo} alt="" className="pencilLogo" />
          )}
          {
            img == "i" && 
            <button className="more_about_expert" onClick={()=>navigate("/expert")}>
            <img src={i} alt="" />
          </button>
          }
        </>
      )}
      {(type == "time") && (
        <>
          <div className="details_component_main_content">
            <div className="details_img">
              <img src={clock} alt="clock" />
            </div>
            <div className="about_expert__block-text">
              <div className="service_time">
                <span>09:00 - 11:00</span>
              </div>
              <div className="service_day">
                <span>Воскресенье, 21 ноября</span>
              </div>
            </div>
          </div>
          {img == "pencil" && (
            <img src={pencilLogo} alt="" className="pencilLogo" />
          )}
        </>
      )}
       { type == "tips" && (
        <>
          <div className="details_component_main_content">
            <div className="details_img">
              <img src={tips} alt="tips" />
            </div>
            <div className="about_expert__block-text">
              <div className="service_time">
                <span>50 ₽</span>
              </div>
              <div className="service_day">
                <span>Будет списано</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
