import logo from './logo.svg';
import './App.scss';
import Intro from "./components/intro/intro";
import RequestInfo from "./components/request-info/request-info";
import ReactGA from "react-ga";

function App() {
    ReactGA.initialize('G-66H7HBY29N');
    ReactGA.pageview(window.location.pathname + window.location.search);

  const submitForm = () => console.log('submitted');

  return (
    <div className="App">
        <div className="container">
            <Intro></Intro>
            <RequestInfo></RequestInfo>
            <button className={'mt-10'} onClick={submitForm}>Richiedi incontro via Web</button>
        </div>
    </div>
  );
}

export default App;
