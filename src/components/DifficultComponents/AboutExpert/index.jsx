import "./index.css";
import firstExpert from "../../../images/about_expert.png";
import Rating from "../../Rating";

const AboutExpert = () => {
  return (
    <div className="about_expert_component">
      <div className="about_expert_component_main_info">
        <div className="expert_img">
          <img src={firstExpert} alt="expert_img" />
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
      <div className="expert_about_me">
        <p>
          Здравствуйте, меня зовут Иван Иванов. Я парикмахер-стилист с опытом
          работы более 12 лет.
        </p>
        <p>
          Моя цель – помочь каждому клиенту подчеркнуть свою индивидуальность
          через стильную и подходящую причёску. Я специализируюсь на создании
          актуальных стрижек, укладок и окрашиваний, уделяя внимание всем
          деталям.
        </p>
        <p>
          В работе использую только профессиональные средства и современные
          техники, чтобы добиться идеального результата. Регулярно прохожу
          обучение и слежу за новыми трендами, чтобы предлагать вам лучшее.
          Приходите, и мы вместе создадим образ, который подчеркнёт вашу
          индивидуальность и стиль.
        </p>
      </div>
    </div>
  );
};

export default AboutExpert;
