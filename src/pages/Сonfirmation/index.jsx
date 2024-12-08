import { useNavigate } from "react-router-dom";
import Attention from "../../components/Attention";
import Button from "../../components/Buttons/Button";
import Details from "../../components/DifficultComponents/Details";
import GoToBackArrow from "../../components/GoToBackArrow";
import Input from "../../components/Inputs/Input";
import ServiceComponent from "../../components/DifficultComponents/ServiceComponent";
import Consent from "../../components/Сonsent";
import "./index.css";

const ConfirmaionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation_page page_bg">
      <GoToBackArrow />
      <div className="content_title">
        <span>Детали записи</span>
      </div>
      <div className="details_list">
       <Details type={"expert"} img={"pencil"}/>
       <Details type={"time"} img={"pencil"}/>
       </div>
      <div className="content_title">
        <span>
          Услуги <span>· 2ч</span>
        </span>
      </div>
      <ServiceComponent
        title={"Juvidrerm 1 ml"}
        duraion={"40 мин"}
        price={"3000 ₽"}
        img={"pencil"}
      />
      <div className="content_title">
        <span>Ваши данные</span>
      </div>
      <form className="form">
        <Input placeholder={"Имя"} />
        <Input placeholder={"Номер телефона"} />
        <Input placeholder={"Комментарий к записи"} />
      </form>
      <Consent />
      <Attention />
      <Button onClick={()=>navigate("/order-details")}>Записаться</Button>
    </div>
  );
};

export default ConfirmaionPage;
