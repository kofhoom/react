import { Button,Jumbotron } from 'react-bootstrap';
import shoesdata from './data';
import React, { useState } from 'react';
import axios from 'axios';

function Main(){
    let [신발데이터,신발데이터변경] = useState(shoesdata);
    return (
        <div>
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
      <button className="btn btn-danger" onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{
          console.log(result.data);
        }).catch(()=>{
          console.log('실패');
        })
      }}>더보기</button>
      </div>
      
    )
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


export default Main;