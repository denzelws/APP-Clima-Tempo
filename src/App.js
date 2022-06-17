
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import TimeLocation from './components/TimeLocation';



function App() {
  
  return (
   <body className='bg-gradient-to-br from-cyan-500 to-pink-500 h-screen w-screen'>
    <NavBar/>
    <Input/>
    <TimeLocation/>
   </body>
  ); 
}

export default App;
