/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';
import shoesdata from './data';
import React, { useState } from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import Main from './main'
import Detail from './detail'

//기획
//중요한 데이터는 항상  app.js를 통해 저장(최상위데이터에서 관리할떄 중요 상위->하위)
function App() {
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/detail">Link</Nav.Link>
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
<Switch>
<Route exact path="/"> 
{/* 매칭되는걸 다보여주기 때문에 exact는 경로가 정확히 일치할떄만 보여줌 */}
{/* <Route path="/어쩌구" component={Modal}> */}
{/* 하나를 깔끔하게 보여주고 싶을때 compont */}
{/* path는 각 페이지의 주소의 내용 */}
<Main />
</Route>

<Route path="/detail/:id">
<Detail 신발데이터={shoesdata}/>
</Route>

<Route path="/:id">
{/* 모든문자라는 경로를 의미(파라미터) 콜론뒤에 맘대로작명*/}
<div>아무거나적었을때</div>
</Route>
</Switch>
{/* Switch 여러개가 맞아도 하나만 보여준다 */}
</div>
  );
}

export default App;
