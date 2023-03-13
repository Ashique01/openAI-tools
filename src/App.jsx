import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./Components/OptionSelection";
import { arrayItems } from "./AIOptions/index";
import Translation from "./Components/Translation";
import "./App.css";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };
  const doTask = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doTask={doTask} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
