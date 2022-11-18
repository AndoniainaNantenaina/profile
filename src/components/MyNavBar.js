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
        
        <Nav.Item as={Link} to='/etudes'>
          ETUDES  
        </Nav.Item>
          
        <Nav.Item as={Link} to='/competences'>
            COMPETENCES
        </Nav.Item>

        <Nav.Item as={Link} to='/formations'>
            FORMATIONS
        </Nav.Item>

        <Nav.Item as={Link} to='/experiences'>
            EXPERIENCES
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>DOWNLOAD CV</Nav.Item>
      </Nav>
    </Navbar>
  )
}
