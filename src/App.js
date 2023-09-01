import React from 'react'
import Navbar1 from './components/Navbar1';
import Hero from './components/Hero';
import Wedo from './components/Wedo';

import Success from './components/Success';
import Clients from './components/Clients';
import Get from './components/Get';
import Footers from './components/Footers';
import Quote from './components/Quote';
import Our from './components/Our';
import Award from './components/Award';
import What from './components/What';
import Accordins from './components/Accordins';




const App = () => {
  return (
    <div>
      <Navbar1/>
      <Hero/>
      <Wedo/>
      <Accordins/>
      <Success/>
      <Clients/>
      <Our/>
      <Award/>
      <Quote/>
      <What/>
      <Get/>
      <Footers/>
      </div>
  )
}
export default App