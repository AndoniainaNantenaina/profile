import React from 'react'
import { Col } from 'rsuite'
import { TypeAnimation } from "react-type-animation";

export default function Home() {

  return (
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      height : "80vh",
    }}>
      <Col>
      <h1>ANDONIAINA NOMENJANAHARY</h1>
      <TypeAnimation
        sequence={['IT Developer', 1000, 'Google Community Lead', 1000, '', 1000]}
        style={{ fontSize: '2em' }}
        wrapper="h2"
        repeat={Infinity}
      />
      </Col>
    </div>
  )
}
