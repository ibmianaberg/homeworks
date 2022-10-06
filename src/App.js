import "./App.css";
import { useEffect, useState } from "react";
import { SendMessage } from "./SendMessage";

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [mapIsNeed, setMapIsNeed] = useState(false);

  useEffect(() => {
    if(messageList.length > 0 && mapIsNeed === true){
      setTimeout(()=>{
        setMessageList(
        [...messageList,
          {
            text: `Привет, друг ${messageList[messageList.length-1].author}!`,
            author: 'bot',
            human: true
          }
        ])
        setMapIsNeed(!mapIsNeed)
      }, 1500)
    }
  });
  console.log(messageList);

  // const mapListHelper =
  //    messageList
  //     .filter((e) => e.human)
  //     .map(
  //       (e, i) => (
  //         <div className="leftColumn" key={i}>
  //           {e.text} {e.author}
  //         </div>
  //       )
  //     );

  // const mapListHelper2 = messageList
  //     .filter((e) => !e.human)
  //     .map((e, i) => (
  //       <div className="rightColumn" key={i}>
  //         {e.text} {e.author}
  //       </div>
  //     ))

  const sortColumnList = () =>
    messageList.map((e, i) => {
      const style = e.human ? "leftColumn" : "rightColumn";

      return (
        <div className={style} key={i}>
          {e.text} {e.author}
        </div>
      );
    });

  return (
    <div className="App">
      <h1>
        <SendMessage
          setMessageList={setMessageList}
          mapIsNeed={mapIsNeed}
          setMapIsNeed={setMapIsNeed}
        />
        {sortColumnList()}
      </h1>

      <header className="App-header">
        <div className="block"></div>
      </header>
    </div>
  );
};

export default App;
