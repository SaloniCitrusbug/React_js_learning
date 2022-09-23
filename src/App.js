import './App.css';
import Jssx from './Compo/Jsx'
import First from './Compo/First'
import Msgs from './Compo/Msg'
import Classcompo from './Compo/Classcompo'

function App() {
  return (
    <div className="App">
      <Jssx className="abc"></Jssx>
      <Jssx className="abgc"></Jssx>
      <Jssx className="adsbc"/>      
      <First className="sss">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptate modi, consequatur vero dolor aspernatur.</p>
      </First>
      <Msgs></Msgs>
      <Classcompo/>
    </div>
  );
}

export default App;