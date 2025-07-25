import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Stu from "./Student.jsx"
import User from "./Condition.jsx"
function App() {
  
  return(
    <> 
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Stu name="Sathish" age="22" />
    <User name="kumar" login={false}/>
    </>
  );
}

export default App