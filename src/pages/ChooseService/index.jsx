import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoToBackArrow from "../../components/GoToBackArrow";
import SearchInput from "../../components/Inputs/SearchInput";
import Discount from "../../components/Discount";
import ServiceList from "../../components/Lists/ServiceList";
import Button from "../../components/Buttons/Button";

const ChooseServicePage = () => {
  const [activeService, setActiveService] = useState("");
  const navigate = useNavigate();
  const services = [
    {
      name: "Губы",
      servicesItems: [
        {
          serviceName: "Juvidrerm 1 ml",
          duration: "40 мин",
          price: "15 000 ₽",
        },
        { serviceName: "Углы Джоли", duration: "1 час", price: "13 000 ₽" },
        {
          serviceName: "Скулы(яблочки молодости)",
          duration: "30 мин",
          price: "650 ₽",
        },
      ],
    },
    {
      name: "Ботулинотерпия",
      servicesItems: [
        {
          serviceName: "Лоб + Межбровка",
          duration: "1 час",
          price: "6 500 ₽",
        },
        {
          serviceName: "Лечение гипергидроза",
          duration: "2 ч · Ноги, ладони, подмышки - цена за 1 зону.",
          price: "3000 ₽",
        },
      ],
    },
  ];
  return (
    <div className="choose_service_page page_bg">
      <GoToBackArrow />
      <SearchInput />
      <Discount />
      {services.map((serv) => {
        return (
          <ServiceList
            key={serv.name}
            title={serv.name}
            services={serv.servicesItems}
            setActiveService={setActiveService}
            chosen={activeService}
          />
        );
      })}
      {activeService && (
        <div className="choose_service_result">
          <div className="choose_service_result_text">
            <span>Juvidrerm 1 ml</span>
            <span className="time_res">· 2ч</span>
            <span>3000 ₽</span>
          </div>
          <Button onClick={() => navigate("/choose-time")}>Продолжить</Button>
        </div>
      )}
    </div>
  );
};

export default ChooseServicePage;
