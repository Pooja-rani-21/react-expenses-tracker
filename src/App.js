
import './App.css';
import Checkbox from './CheckBox/Checkbox';
import Arraytask from './components/Arraytask'
import Usestate from './HOOKS/Usestate'
import List from './Outputlist/List';
import UseReduce from './UseReduce/UseReduce';
import {Routes,Route} from 'react-router-dom'
import ReactCurd from './ReactCurd/Curd'
import Curd from './ReactCurd/Curd';
import First from './ReactCurd/First';
import ReduxCount from './Redux/ReduxCount';

  
function App() {
return (
    <div>
            {/* <Arraytask/> */}
             {/* <Usestate /> */}
             {/* <UseReduce />    */}
             {/* <Checkbox />  */}
              {/* <List/>  */}
              {/* <Curd /> */}
              <First />

              {/* <ReduxCount /> */}
            
              
          {/* <Routes>
              <Route path='/' element={<List></List>}/>
              <Route path='List' element={<UseReduce></UseReduce>} /> 
              <Route path='components' element={<Arraytask></Arraytask>} />

             <Route path='Hooks'>
              <Route path='Usestate' element={<Usestate/>}/> 
             </Route> 
           
          </Routes> */}

            
          
            
    </div>
  );
}

export default App;
