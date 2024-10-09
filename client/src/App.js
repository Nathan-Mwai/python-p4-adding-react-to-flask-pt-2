import { useEffect } from "react";


function App() {
  useEffect(()=>{
    fetch('/movies')
    .then(r => r.json())
    .then(movies => console.log(movies))
  }, []);
  return <h1>Checking the console to see a list of all movies!</h1>
}

export default App;
