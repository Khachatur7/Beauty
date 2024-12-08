import "./index.css";
import Rating from "../Rating";
import avatar from "../../images/review_avatar.png";
import expertImg from "../../images/expert_one.png";
const Review = ({showExpert}) => {
  return (
    <div className="review">
      <div className="reviewer">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="text_info">
          <div className="reviewer_name">
            <span>Ирина</span>
          </div>
          <Rating text={"21 ноября 2024 год"} />
        </div>
      </div>
      <div className="review_text">
        <span>Отличный мастер, однозначно советую!</span>
      </div>
     {
      showExpert &&  <div className="review_expert">
      <span>Иван Иванов</span>
      <div className="review_expert_img">
        <img src={expertImg} alt="expertImg" />
      </div>
    </div>
     }
    </div>
  );
};

export default Review;
