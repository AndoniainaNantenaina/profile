import React from 'react'
import { Col, IconButton } from 'rsuite'
import { TypeAnimation } from "react-type-animation";
import { LinkedIn, Twitter, Facebook, Google } from '@mui/icons-material';

export default function Home() {

  return (
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      height : "80vh",
    }}>
      <Col>
        <img src={require('../images/Ando-removebg-preview.png')} alt='profil-AN'/>
      </Col>
      <Col>
      <h1>ANDONIAINA NOMENJANAHARY</h1>
      <TypeAnimation
        sequence={['IT Developer', 1000, 'Google Community Lead', 1000, 'Junior Developer', 1000]}
        style={{ fontSize: '2em' }}
        wrapper="h2"
        repeat={Infinity}
      />
      <Col><IconButton appearance='primary' color='blue' href='http://www.linkedin.com/in/nomenjanahary-andoniaina-45b44b179' icon={<LinkedIn></LinkedIn>}/></Col>
      <Col><IconButton appearance='primary' color='cyan' href='#' icon={<Twitter/>}></IconButton></Col>
      <Col><IconButton appearance='primary' color='red' href='https://g.dev/andoniaina_nomenjanahary' icon={<Google/>}/></Col>
      <Col><IconButton appearance='primary' color='blue' href='#' icon={<Facebook/>}/></Col>
      </Col>
    </div>
  )
}
