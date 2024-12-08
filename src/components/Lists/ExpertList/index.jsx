import "./index.css";
import firstExpert from "../../../images/expert_one.png";
import secondExpert from "../../../images/expert_two.png";
import ExpertComponent from "../../DifficultComponents/ExpertComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Buttons/Button";

const ExpertList = () => {
  const navigate = useNavigate();
  const experts = [
    {
      name: "Иван Иванов",
      profession: "Парихмакер-стилист",
      rewiews: "(1 отзыв)",
      expertImg: firstExpert,
      dataRegistr: "сб, 23 ноября",
      navigate: "/expert",
    },
    {
      name: "Анна Анина",
      profession: "Массажистка",
      rewiews: "(24 отзывов)",
      expertImg: secondExpert,
      dataRegistr: "вс, 13 ноября",
      navigate: "/expert",
    },
  ];

  const [choosenExpert, setChoosenExpert] = useState("");

  return (
    <div className="expert_list">
      <ExpertComponent
        active={choosenExpert === ""}
        onClick={() => setChoosenExpert("")}
      />
      {experts.map((expert) => {
        return (
          <ExpertComponent
          key={expert.name}
            expert={expert}
            active={choosenExpert === expert.name}
            onClick={() => setChoosenExpert(expert.name)}
            MoreAbout={() => navigate(expert.navigate)}
          />
        );
      })}
      {
        choosenExpert && <Button onClick={() => navigate("/choose-service")}>Записаться</Button>
      }
    </div>
  );
};

export default ExpertList;
