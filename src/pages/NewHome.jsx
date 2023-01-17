import {Col, IconButton, Row} from "rsuite";
import React from "react";
import {TypeAnimation} from "react-type-animation";
import {Facebook, Google, LinkedIn, Twitter} from "@mui/icons-material";

const NewHome = () => {
    return(
        <div style={
            {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
                borderRadius: '25px',
                padding: '10px',
                margin: '10px',
            }
        }>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <h2 style={{color: 'white', height: "100%"}}>ANDONIAINA Nomenjanahary</h2>
                    <TypeAnimation
                        sequence={['IT Developer', 1000, 'Google Community Lead', 1000, 'Junior Developer', 1000]}
                        style={{ fontSize: '2em' }}
                        wrapper="h2"
                        repeat={Infinity}/>
                    <Col><IconButton appearance='primary' color='blue' href='http://www.linkedin.com/in/nomenjanahary-andoniaina-45b44b179' icon={<LinkedIn></LinkedIn>}/></Col>
                    <Col><IconButton appearance='primary' color='cyan' href='#' icon={<Twitter/>}></IconButton></Col>
                    <Col><IconButton appearance='primary' color='red' href='https://g.dev/andoniaina_nomenjanahary' icon={<Google/>}/></Col>
                    <Col><IconButton appearance='primary' color='blue' href='#' icon={<Facebook/>}/></Col>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{alignItems: "center"}}>
                    <img src={require('../images/Ando-removebg-preview.png')} alt="AN-Profile" border="0" style={{width: 'auto', height: '100%'}}/>
                </Col>
            </Row>
        </div>
    );
}

export default NewHome;