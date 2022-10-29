import logo from './logo.svg';
import './App.css';
import Device from './Components/Device/Device';
import Watch from './Components/Watch steps/Watch';

function App() {
  return (
    <div className="App"  style={{border:'2px solid yellow',margin:'5px',borderRadius:'10px'}}>
      <Device name="iphone" price="13000"></Device>
     {/* //! Main kotha holo app js a value disi then ata use hoiche device.js a then price ta deviceDEtails thke ana hoiche */}
      <Watch ></Watch>
    </div>
  );
}

export default App;
