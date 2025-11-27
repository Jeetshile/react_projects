import React from 'react';
import Navbar from './components/Navigation/Navbar.jsx';
import Contact_head from './components/Contact_header/Contact_head.jsx';
import Contact_form from './components/Contact_form/Contact_form.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Contact_head /> 
      <Contact_form/>
      
    </div>
  )
}

export default App;