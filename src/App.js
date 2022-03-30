import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { data } from "./helpers/data";


const App = () =>{
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Main veri = {data}/>

    </div>
  )

}

export default App;
