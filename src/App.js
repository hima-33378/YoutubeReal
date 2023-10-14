import './App.css';
import YTsidebar from './components/YTsidebar';
import Content from './components/Content';
import Shorts from './components/Shorts';
import Search from './components/Search';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import Subscriptions from './components/Subscriptions';


export const store = createContext();
function App() {

  let stu=[
    {name:'Hima',Roll:1},{name:'Lalli',Roll:2}
  ]
  const [data,setData]=useState(stu)
  return (
    <>
    <BrowserRouter>
    <store.Provider value={[data,setData]}>
    <div className='row'>
      <YTsidebar/>
      <div className='col-md-10 Sb'><Search/>   
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/Shorts' element={<Shorts/>}></Route>
        <Route path='/Subscriptions' element={<Subscriptions/>}></Route>
      </Routes>
      </div>
    </div>
    </store.Provider>
    </BrowserRouter>
    
    </>
    
  );
}
export default App;