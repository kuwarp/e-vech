import React from 'react';
// import { Header,Features, } from './containers';
// import { Navbar } from './components';
import { Footer, Blog, Possibility, Header } from './containers';
import Whyjac from './containers/jainauto/Whyjac';
import Slide from './containers/slide/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <Slide />
    <Whyjac />
    {/* <Features /> */}
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
