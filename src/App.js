import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './App.css';
import All from './details/All';
import Missed from './details/missed';
import Contacts from './details/contat';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <nav id='span1' style={{display:'flex',justifyContent:'center', gap:'2rem',marginTop:'40px'}}>
            <Link to='/'>All</Link>
            <Link to='./missed'>Missed</Link>
            <Link to='./contacts'>Contacts</Link>
        </nav> <br/>

        <Routes>
 
          <Route index element={<All />}/>
          <Route path='missed' element={<Missed/>}/>
          <Route path='contacts' element={<Contacts/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
