import { useState } from "react";

export const SendMessage = ({ setMessageList, mapIsNeed, setMapIsNeed}) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="count">
      <div className="message_css">
        <input
          className="message_input"
          placeholder="Напишите сообщение..."
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          className="message_input"
          placeholder="Ваше имя"
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            setMessageList((p) => [...p, {text, author, human: true}]);
            setMapIsNeed(!mapIsNeed)
          }}
        >
          Отправить в интернеты
        </button>
      </div>
    </div>
  );
};
