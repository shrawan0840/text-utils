import "./App.css";
// import { About } from './components/About';
import Navbar from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  // const [darkMode, setdarkMode] = useState(false);
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
