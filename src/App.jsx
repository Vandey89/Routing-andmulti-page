import React from 'react';
import './App.css';
import {Page, NotFound, DynamicPage } from './components/page'
import { BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom';



function App() {
  return (        //obora4ivaem nashe prilogenie v router
   <Router>
    <nav>         
      <Link to='/'>purple</Link>
          <Link to='/gold'><h5>gold</h5></Link>
            <Link to='/green'><h5>green</h5></Link>
      </nav>
   <Routes>

      <Route path='/' element={<Page color='purple'></Page>} />
      <Route path='/gold' element={<Page color='gold'></Page>} />
      <Route path='/green' element={<Page color='green'></Page>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/any/:myColor' element={<DynamicPage />} />
      
  
    </Routes>
    </Router>
  
  );
}

export default App;

/*
<Route path='/any/:color' component={DynamicPage} />
*/
