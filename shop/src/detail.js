


import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom' //뒤로가기
import styled from 'styled-components'
import './Detail.scss'
let 박스 = styled.div `
padding : 20px;
color : red;
`;
let 제목 =  styled.h4`
    font-size : 15px;
    color : ${function(props){return props.color}}
`;

/*
life cycle old
class Detail12 extends React.Component {
componentDidMount(){
  //Detail12가 보일때(렌더링이될떄)실행해주세요
}
componentWillUnmount(){
  //Detail12가 사라질때(렌더링이될떄)실행해주세요
}
}
*/



function Detail(props){
  let [입력값,입력값변경] = useState('');
  let [alert,alert변경] = useState(true);



  //life cycle hook 최신
  useEffect(()=>{
//컴포넌트가 보일때, 컴포넌트가 업데이트 될때(바뀔때계속작동)
console.log(1111111);
//시작할때 2초후에 알람창꺼지게 
let timer = setTimeout(()=>{ alert변경(false) /*document.querySelector('.my-alert2').style.display = 'none' 내가한거 */ },2000) 

return ()=>{clearTimeout(timer)}
//컴포넌트가 사라질때
/* 
return fadout =>{실행코드} //이름있을때
return () =>{실행코드} //없을때

*/
//여러개 실행하고 싶다면 useEffect 여려개 생성, 생성순으로 실행됨
  },[/*조건이 없으면 useEffect안에 기능은 페이지로드후 한번만 실행되고 그다음 조건이 없으면 실행되지 않는다, ex) alert ,등,등 이라는 state가 변경이 될때만 useEffect실행*/]);


    let {id} = useParams();  //{} (사용자가 입력한 url 파라미터들)
    let 찾은상품 = props.신발데이터.find(x => x.id == id);
      //function(x){return x.id == id};
    /*   1. find()는 array 뒤에 붙일 수 있으며, 안에 콜백함수가 들어갑니다.

2. 콜백함수 내의 파라미터는 (제가 상품이라고 적은거) array 안에 있던 하나하나의 데이터를 의미합니다.

3. return 오른쪽엔 조건식을 적을 수 있습니다. 이게 참인 데이터만 새로운 변수에 저장해줍니다.

4. 조건식엔 그리고 그걸 현재 URL의 /:id에 적힌 값과 상품의 영구번호 (상품.id)가 같은지 비교하고 있는 겁니다. */
    
let history = useHistory();
    // history오브젝트 생성가능 (방문기록등을 저장해놓는 오브젝트)

    return(
        <div className="container">
            <박스>
            <제목 className="red">상세페이지</제목>
            </박스>
            <input onChange={(e)=>{입력값변경(e.target.value)}}/>
            
            
            
            {
              alert === true
              ? (<div className="my-alert2">
              <p>제고가 얼마 남지 않았습니다.</p>
             </div>)
             : null
            }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ id +".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
            {/* <button className="btn btn-danger" onClick={()=>{history.push('/')}}>특정경로로 이동해주세요</button>  */}
        </div>
      </div>
</div> 
    )
}
/*내가한거
function Alert2() {
  return(
    <div className="my-alert2">
      <p>제고가 얼마 남지 않았습니다.</p>
     </div>
  )
}
*/

export default Detail