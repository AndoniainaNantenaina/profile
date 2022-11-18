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
      <img src={require('../images/Ando-removebg-preview.png')}/>
      </Col>
      <Col>
      <h1>ANDONIAINA NOMENJANAHARY</h1>
      <TypeAnimation
        sequence={['IT Developer', 1000, 'Google Community Lead', 1000, 'Junior Developer', 1000]}
        style={{ fontSize: '2em' }}
        wrapper="h2"
        repeat={Infinity}
      />
      <Col><IconButton icon={<LinkedIn/>}/></Col>
      <Col><IconButton icon={<Twitter/>}/></Col>
      <Col><IconButton icon={<Google/>}/></Col>
      <Col><IconButton icon={<Facebook/>}/></Col>
      </Col>
    </div>
  )
}
