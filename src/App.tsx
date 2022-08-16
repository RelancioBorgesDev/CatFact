import "./styles/globals.css";
import styles from "./styles/styles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [phrase, setPhrase] = useState<string>(
    "Click in the button to generate, a fact about cats!"
  );
  const [factPhrase, setFactPhrase] = useState<string>("");

  useEffect(() => {
    const res = axios.get("https://catfact.ninja/fact");
    res.then((data) => setFactPhrase(data.data.fact));
  }, [phrase]);

  function onGenerate(e: any) {
    setPhrase(factPhrase);
  }

  return (
    <div className={styles.container}>
      <div>
        <p>{phrase}</p>
        <button onClick={onGenerate}>Generate Fact</button>
      </div>
    </div>
  );
}

export default App;
