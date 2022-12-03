import './App.css';
import Navbar from './components/Navbar'
import Recording from './components/Recording';
import Webinar from './components/Webinar';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
    <Recording/>
    <Webinar/>

    </div>
   
  );
}

export default App;
