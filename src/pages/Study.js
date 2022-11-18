import React from 'react'
import { Col, Panel } from 'rsuite'

export default function Study() {
  return (
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      height : "80vh",
    }}>
      <Col>
      <h2>ETUDES</h2>
      <Space h={35}/>
      <Panel header="ESTI Antanimena" bordered>
        <h4>MASTER</h4>
        <h5>Aujourd'hui</h5>
        <h3>M1 en Management des Systèmes d'Information.</h3>
      </Panel>
      <Space h={20}/>
      <Panel header="ESTI Antanimena" bordered>
        <h4>LICENCE</h4>
        <h5>Déc. 2018 - Août 2022</h5>
        <h3>Licence en Intégration et Développement.</h3>
      </Panel>
      <Space h={20}/>
      <Panel header="Institution Ste Famille Mahamasina" bordered>
        <h4>BACCALEAUREAT</h4>
        <h5>2018</h5>
        <h3>Terminale A2.</h3>
      </Panel>
      </Col>
    </div>
  )
}

const Space = (props) => {
  return(
    <div style={{height : props.h}}></div>
  );
}
