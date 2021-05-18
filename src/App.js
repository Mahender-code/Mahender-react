import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import Board from './Components/Board/Board';
import BiddersContainer from './Components/Bidder/Bidders.container';
import Entry from './Components/Log/Entry';
import Buzzer from './Components/Buzzer/Buzzer'
function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <div>
          <div className="flex-1">
            <Buzzer/>
            <Board/>   
          </div>  
         <BiddersContainer/>
        </div>
        <Entry/>
      </div>
    </Provider>
  );
}

export default App;
