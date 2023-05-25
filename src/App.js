import './style/reset.css';
import './style/index.css';

import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route exact path='/space-character' element={<Catalog></Catalog>}></Route>
      {/* <Route exact path='/user/:username' element={<User></User>}></Route> */}
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
