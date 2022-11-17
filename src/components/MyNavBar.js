import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'rsuite'

export default function MyNavBar() {
  return (
    <Navbar>
      <Navbar.Brand>Andoniaina Nomenjanahary</Navbar.Brand>
      <Nav>
        <Nav.Item as={Link} to='/'>
            ACCEUIL
        </Nav.Item>
        
        <Nav.Item as={Link} to='/study'>
          ETUDES  
        </Nav.Item>
          
        <Nav.Item as={Link} to='/skills'>
            COMPETENCES
        </Nav.Item>

        <Nav.Item as={Link} to='/skills'>
            FORMATIONS
        </Nav.Item>

        <Nav.Item as={Link} to='/skills'>
            EXPERIENCES
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>DOWNLOAD CV</Nav.Item>
      </Nav>
    </Navbar>
  )
}
