import logo from './logo.svg';
import './App.scss';
import Intro from "./components/intro/intro";
import RequestInfo from "./components/request-info/request-info";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Intro></Intro>
            <RequestInfo></RequestInfo>
            <button className={'mt-10'}>Richiedi incontro via Web</button>
        </div>
    </div>
  );
}

export default App;
