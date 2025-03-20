import React, { useEffect, useState } from "react";
import { data } from "./data";

const Dictionary = () => {
  const [textValue, setTextValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [answer, setAnswer] = useState(null);
  //   console.log(data);
  const handleSearch = () => {
    setFlag(true);
  };

  useEffect(() => {
    if (!flag || !textValue) return;

    const result = data.find(
      (el) => el.word.toLowerCase() == textValue.toLowerCase()
    );

    setAnswer(result?.meaning || "Word not found in the dictionary.");
    setFlag(false);
  }, [flag]);

  useEffect(() => {
    if (!textValue) setAnswer(null);
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
      <button onClick={handleSearch}>Search</button>

      <h3>Definition:</h3>
      <p>{answer}</p>
    </>
  );
};

export default Dictionary;
