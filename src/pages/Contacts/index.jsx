import GoToBackArrow from "../../components/GoToBackArrow";
import "./index.css";
import map from "../../images/map.png";
import Review from "../../components/Review";

const ContactsPage = () => {
  return (
    <div className="contacts_page page_bg">
      <GoToBackArrow />
      <div className="contacts_page_title">
        <span>Контакты</span>
      </div>
      <div className="contacts_blocks">
        <div className="address">
          <div className="address_title">
            <span>Адрес</span>
          </div>
          <div className="address_text">
            <span>ул. Ленина 7/2б</span>
          </div>
        </div>
        <div className="phone">
          <div className="phone_title">
            <span>Телефон</span>
          </div>
          <div className="phone_number">
            <span>+1 234 567-89-10</span>
          </div>
        </div>
        <div className="grafic">
          <div className="grafic_title">
            <span>График работы</span>
          </div>
          <div className="grafic_clock">
            <span>08:00 - 21:00</span>
          </div>
          <div className="grafic_days">
            <span>Пн - Сб</span>
          </div>
        </div>
      </div>
      <div className="map">
        <img src={map} alt="map" />
      </div>
      <div className="contacts_page_title">
        <span>Отзывы</span>
      </div>
      <div className="reviews_list">
        <Review showExpert={true} />
        <Review showExpert={true} />
      </div>
    </div>
  );
};

export default ContactsPage;
