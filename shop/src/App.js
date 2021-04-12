/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';
import shoesdata from './data';
import { useState } from 'react';


function App() {
  let [신발데이터,신발데이터변경] = useState(shoesdata);
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
<Jumbotron className="background">
  <h1>shose 20% sale</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
<div className="container">
  <div className="row">


    {
      신발데이터.map((a,i)=>{
        return (
        <Card 신발데이터들={신발데이터[i]} i={i} key={i}/>
        )
      })
    }
  </div>
      </div>
    </div>
  );
}
function Card (props) {
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i +1) + ".jpg"} width="100%"/>
    <h4>{props.신발데이터들.title}</h4>
    <h4>{props.신발데이터들.content} & {props.신발데이터들.price}</h4>
  </div>
  )
  
}
export default App;
