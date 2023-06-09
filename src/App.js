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
      <Route  path='/space-character' element={<Catalog></Catalog>}></Route>
      <Route  path='/character/:charactername' element={<Detail></Detail>}></Route>
      <Route  path='/new' element={<New></New>}></Route>
      <Route  path='/*' element={<NotFound></NotFound>} />
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
