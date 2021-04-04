import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import Home from './Home';
import Categories from './Categories';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import AddOrDelete from './AddOrDelete';

function App(){
  return(
    <div>
    <BrowserRouter>
    <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home"><Link class = "link" to = "/Home">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#link"><Link class = "link" to = "/Categories">Categories</Link></Nav.Link>
                  <Nav.Link href="#link"><Link class = "link" to = "/AddOrDelete">Add/Delete Product</Link></Nav.Link>
                  {/* <NavDropdown title="Add/Remove Product" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link class = "link" to = "/AddProduct">Add</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link class = "link" to = "/DeleteProduct">Delete</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown> */}
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
        
        <Route path = "/Home"> 
        <Home />
        </Route>

        <Route path = "/Categories"> 
        <Categories />
        </Route>

        <Route path = "/AddOrDelete"> 
        <AddOrDelete />
        </Route>

        

        </BrowserRouter> 
        </div>
  )
}

export default App;