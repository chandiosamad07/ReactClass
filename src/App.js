import logo from './logo.svg';
import './App.css';
import Great from './components/great'
import Welcome from './components/welcome';
import Message from './components/Message';
import BasicExample from './components/nav';

function App() {
  return (
    <div className="App">
     {/* <BasicExample /> */}
     <Message /> 
      {/* <Great name="Abdul" heroName ="Samad"/>
      <Great name="Samad"/>
      <Great name="Chandio"/>
      <Welcome /> */}
    </div>
  );
}

export default App;
