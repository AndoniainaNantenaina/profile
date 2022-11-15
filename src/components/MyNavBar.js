import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'rsuite'

export default function MyNavBar() {
  return (
    <Navbar>
      <Navbar.Brand>Andoniaina Nomenjanahary</Navbar.Brand>
      <Nav>
        <Nav.Item as={Link} to='/'>
            HOME
        </Nav.Item>
        
        <Nav.Item as={Link} to='/study'>
            STUDY
        </Nav.Item>
        
        <Nav.Item as={Link} to='/skills'>
            SKILLS
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>DOWNLOAD CV</Nav.Item>
      </Nav>
    </Navbar>
  )
}
