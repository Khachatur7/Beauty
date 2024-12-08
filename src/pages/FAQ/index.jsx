import GoToBackArrow from "../../components/GoToBackArrow";
import Question from "../../components/DifficultComponents/Question";
import "./index.css";

const FAQ = () => {
  const questions = [
    `Cколько процедур RF лифтинг необходимо сделать для заметного эффекта?`,
    `Как часто нужно делать процедуру маникюра?`,
    `Какие эффекты от процедуры PRP-терапии для лица?`,
    `Как долго держится эффект от процедуры ботокса?`,
  ];
  const answer = `Эффект от ботокса обычно сохраняется от 3 до 6 месяцев, в зависимости от индивидуальных особенностей организма.`

  return (
    <div className="faq_page page_bg">
      <GoToBackArrow />
      <div className="faq_title">
        <span>Часто задаваемые вопросы</span>
      </div>
      <div className="questions_list">
        {questions.map(q=>{
            return <Question text={q} answer={answer}/>
        })}
      </div>
    </div>
  );
};

export default FAQ;
