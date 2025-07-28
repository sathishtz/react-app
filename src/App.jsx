import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Stu from "./Student.jsx"
import User from "./Condition.jsx"
import List from "./List.jsx"
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
    <List/>
    </>
  );
}

export default App