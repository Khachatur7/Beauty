import "./index.css";
import i from "../../../images/svg/i.svg";
import avatar from "../../../images/svg/any_expert_logo.svg";
import TimeBttn from "../../Buttons/TimeBttn";
import Rating from "../../Rating";
import CircleButton from "../../Buttons/CircleButton";
import { useState } from "react";
const ExpertComponent = ({ expert, onClick, active, MoreAbout }) => {
  const times = ["09:00", "10:30", "11:45", "12:00", "13:00", "13:30"];
  const [activeTimeBttn, setActiveTimeBttn] = useState("");
  return (
    <>
      {expert ? (
        <div className="expert_component">
          <div className="expert_component__top_content">
            <div className="about_expert">
              <div className="expert_img">
                <img src={expert.expertImg} alt="expert_img" />
              </div>
              <div className="about_expert__block-text">
                <div className="expert_name">
                  <span>{expert.name}</span>
                </div>
                <div className="expert_profession">
                  <span>{expert.profession}</span>
                </div>
                <Rating text={expert.rewiews} />
              </div>
            </div>
            <div className="expert_component_bttns">
              <button className="more_about_expert" onClick={MoreAbout}>
                <img src={i} alt="" />
              </button>
              <CircleButton onClick={onClick} active={active} />
            </div>
          </div>
          <div className="expert_component__bottom_content">
            <div className="registration_day">
              <span>Ближайшая дата по записи:</span>
              <span className="day">{expert.dataRegistr}</span>
            </div>
            <div className="times">
              {times.map((time) => {
                return (
                  <TimeBttn
                    text={time}
                    onClick={() => setActiveTimeBttn(time)}
                    active={time === activeTimeBttn}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="any_expert">
          <div className="any_expert_avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="any_expert_title">
            <span>Любой специалист</span>
          </div>
          <CircleButton onClick={onClick} active={active} />
        </div>
      )}
    </>
  );
};

export default ExpertComponent;
