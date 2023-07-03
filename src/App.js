import { useEffect, useState } from "react";
import style from "./App.module.css"

function RandomQuots() {
  const [quots, setQuots] = useState("");

  const getQuots = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        setQuots(data[randomNumber]);
      });
  };

  useEffect(() => {
    getQuots();
  }, []);

  return (
    <div className={style.quote}>
      <div className={style.quote_container}>
        <p className={style.text}>{quots.text}</p>
        <p className={style.text}>Author: {quots.author}</p>
        <div className={style.container_button}>
          <button onClick={getQuots} className={style.button}>getQuote</button>
            <a className={style.button}
              href={`https://twitter.com/compose/tweet`}
              target="blank"
              >
              Tweet
            </a>
        </div>
      </div>
    </div>
  );
}
export default RandomQuots;
