import logo from './logo.svg';
import './App.scss';
import Intro from "./components/intro/intro";
import RequestInfo from "./components/request-info/request-info";
import ReactGA from "react-ga";
import { DataStore } from '@aws-amplify/datastore';
import { Users } from './models';

ReactGA.initialize('G-66H7HBY29N');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {


  const submitForm = async () => {
      try {
          await DataStore.save(
              new Users({
                  "name": "Lorem ipsum dolor sit amet",
                  "mobile": "Test",
                  "email": "test12346789@testemailtestemail.com"
              })
          );
          console.log("Contatto aggiunto correttamente!");
      } catch (error) {
          console.log("Errore durante l'aggiunta del contatto", error);
      }

  };

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
