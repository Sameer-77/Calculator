import ButtonsContainer from "./Components/ButtonsContainer"
import styles from "./App.module.css"
import { useState } from "react"
import Display from "./Components/Display"
function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayVal = calVal + buttonText
      setCalVal(newDisplayVal);
    }
  }
  return <center>
    <h1 style={{ marginTop: "20px" }}>CALCULATOR</h1>
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  </center>
}

export default App
