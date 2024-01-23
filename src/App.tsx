import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Layout from './ui/Layout';
import Houses from './pages/Houses';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/houses' element={<Houses />} />
          <Route path='/contact' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
