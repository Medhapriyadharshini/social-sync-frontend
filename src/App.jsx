import './App.css';
import Header from './Components/Header';
import AddBot from './Pages/AddBot';
import {Routes, Route} from 'react-router-dom';
import ManageBot from './Pages/ManageBot';
import RunHistory from './Pages/RunHistory'
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<AddBot/>}/>
          <Route path='manageBot' element={<ManageBot/>} />
          <Route path='runHistory' element={<RunHistory/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </section>
      
    </div>
  );
}

export default App;
