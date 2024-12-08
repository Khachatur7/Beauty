import "./index.css";
import arrow from "../../../images/svg/arrow.svg";
import { useState } from "react";
import ExitBttn from "../../Buttons/ExitBttn";

const PromotionComponent = ({ img, title, description, data }) => {
  const terms = [
    `Акция действует с 1 по 30 декабря 2024 года.`,
    `При записи на стрижку или окрашивание — процедура восстановления волос в подарок.`,
    `Акция доступна для всех клиентов, как новых, так и постоянных.`,
    `Предложение не суммируется с другими скидками и акциями.`,
  ];
  const [popup, setPopup] = useState(false);
const [hideText,setHideText] = useState(false)
  const showPopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="promotion_component">
      <div className="promotion_component_bg">
        <img src={img} alt="promotion_component_bg" />
      </div>
      <div className="promotion_component_info_block">
        <span className="promotion_title">{title}</span>
        <p className="promotion_text">{description}</p>
        <div className="promotion_data_text">
          <span>Дата проведения:</span>
          <span>{data}</span>
        </div>
      </div>
      <button className="more_bttn" onClick={showPopup}>
        <span>Подробнее</span>
      </button>
      {popup && (
        <div className="more_popup">
          <ExitBttn onClick={showPopup}/>
          <div className={`more_popup_text ${hideText?"hide_text":""}`}>
            <div className="more_popup_title">
              <span>Сияй этой зимой вместе с нами!</span>
              <div className={`hide_text_bttn ${hideText?"hide_text_bttn_active":""}`} onClick={()=>setHideText(!hideText)}>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <p>
              Подарите своим волосам здоровье и блеск этой зимой! Воспользуйтесь
              нашей акцией: при записи на стрижку или окрашивание в период с 1
              по 30 декабря, вы получаете процедуру восстановления волос в
              подарок! Профессиональное восстановление подарит вашим волосам
              силу, блеск и гладкость, что идеально подойдет для зимнего времени
              года.
            </p>
            <div className="promotion_terms">
              <span>Условия акции:</span>
              <ol>
                {terms.map((t) => {
                  return (
                    <li>
                      <span>{t}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionComponent;
