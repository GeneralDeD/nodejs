import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './Blocks/Header';
import Block1 from './Blocks/Block1';
import Block2 from './Blocks/Block2';
import Block3 from './Blocks/Block3';
import Block4 from './Blocks/Block4';
import Block5 from './Blocks/Block5';
import Block6 from './Blocks/Block6';
import Block7 from './Blocks/Block7';
import Block8 from './Blocks/Block8';
import Block9 from './Blocks/Block9';
import Block10 from './Blocks/Block10';
import Footer from './Blocks/Footer';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
      </Container>
      <Footer />
    </>
  );
}

export default App;
