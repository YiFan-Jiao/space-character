import './style/reset.css';
import './style/index.css';

import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import New from './components/New';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route exact path='/space-character' element={<Catalog></Catalog>}></Route>
      <Route exact path='/character/:charactername' element={<Detail></Detail>}></Route>
      <Route exact path='/new' element={<New></New>}></Route>
      <Route exact path='*' element={<NotFound></NotFound>} />
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
