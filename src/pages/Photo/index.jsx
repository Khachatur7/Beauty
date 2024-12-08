import CategoryBttn from "../../components/Buttons/CategoryBttn";
import GoToBackArrow from "../../components/GoToBackArrow";
import arrow from "../../images/svg/arrow.svg";
import photo_one from "../../images/lips_photo_1.png";
import photo_two from "../../images/lips_photo_2.png";
import photo_three from "../../images/lips_photo_3.png";
import photo_four from "../../images/lips_photo_4.png";
import photo_five from "../../images/lips_photo_5.png";
import photo_six from "../../images/lips_photo_6.png";

import "./index.css";
import { useState } from "react";

const PhotoPage = () => {
  const [active, setActive] = useState("");
  const [closeBttnsList,setCloseBttnsList] = useState(false);
  const bttns = [
    "Губы",
    "Хирургия",
    "Пластика",
    "3 категория",
    "4 кат",
    "Ботулинотерпия",
  ];

  const photos = [
    photo_one,
    photo_two,
    photo_three,
    photo_four,
    photo_five,
    photo_six,
  ];

  return (
    <div className="photo_page page_bg">
      <GoToBackArrow />
      <div className={`category_bttn_list ${closeBttnsList?"hide_category_bttns_list":""}`}>
        <div className="category_bttn_line">
          {bttns.slice(0, 3).map((bttn) => {
            return (
              <CategoryBttn
                onClick={() => setActive(bttn)}
                active={bttn === active}
              >
                {bttn}
              </CategoryBttn>
            );
          })}
          <button className="hide_bttns_bttn" onClick={()=>setCloseBttnsList(!closeBttnsList)}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="category_bttn_line">
          {bttns.slice(3, bttns.length).map((bttn) => {
            return (
              <CategoryBttn
                onClick={() => setActive(bttn)}
                active={bttn === active}
              >
                {bttn}
              </CategoryBttn>
            );
          })}
        </div>
      </div>
      <div className="photo_list">
        {photos.map((p) => {
          return (
            <div className="photo">
              <img src={p} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoPage;
