import React, { useEffect, useState } from "react";
import { data } from "./data";

const Dictionary = () => {
  const [textValue, setTextValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    // if (!textValue) {
    //   setFlag(false);
    //   return;
    // }

    const result = data.find(
      (el) => el.word.toLowerCase() == textValue.toLowerCase()
    );

    if (result) setAnswer(result?.meaning);
    else {
      setAnswer("");
      setFlag(true);
    }
  };

  useEffect(() => {
    if (!textValue) {
      setAnswer(null);
      setFlag(false);
    }
  }, [textValue]);

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Search for a word..."
      />
      <button onClick={getAnswer}>Search</button>

      <h3>Definition:</h3>
      <p>{answer}</p>
      <p>{flag && !answer ? "Word not found in the dictionary." : ""}</p>
    </>
  );
};

export default Dictionary;
