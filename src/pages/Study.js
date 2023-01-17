import React from 'react'
import { Col, Divider, Panel, Timeline } from 'rsuite'

export default function Study() {
  return (
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      // height : "80vh",
    }}>
      <Col>
      <h2>ETUDES</h2>
      <Divider/>
      <Timeline align='alternate' endless={false}>
        <Timeline.Item title='TEST TITLE'>
          <Panel header="ESTI Antanimena" bordered>
            <h4>MASTER</h4>
            <p>Aujourd'hui</p>
            <h3>M1 en Management des Systèmes d'Information.</h3>
          </Panel>
          <Space h={20}/>
        </Timeline.Item>
        <Timeline.Item>
          <Panel header="ESTI Antanimena" bordered>
            <h4>LICENCE</h4>
            <p>Déc. 2018 - Août 2022</p>
            <h3>Licence en Intégration et Développement.</h3>
          </Panel>
          <Space h={20}/>
        </Timeline.Item>
        <Timeline.Item>
          <Panel header="Institution Ste Famille Mahamasina" bordered>
            <h4>BACCALEAUREAT</h4>
            <p>2018</p>
            <h3>Terminale A2.</h3>
          </Panel>
          <Space h={20}/>
        </Timeline.Item>
      </Timeline>
      </Col>

    </div>
  )
}

const Space = (props) => {
  return(
    <div style={{height : props.h}}></div>
  );
}
