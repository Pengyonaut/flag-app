import Flags from './components/Flags';
import Header from "./components/Header"
import TitleSection from './components/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/theme.scss"
import './App.css';



function App() {
  return (
    <body className="App">
 
      <Header/>

    <Flags/>

    </body>
  );
}

export default App;
