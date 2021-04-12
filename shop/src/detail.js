import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom' //뒤로가기
import styled from 'styled-components';

let 박스 = styled.div `
padding : 20px;
color : red;
`;
let 제목 =  styled.h4`
    font-size : 15px;
    color : ${function(props){return props.color}}
`;
function Detail(props){
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
            <제목 color="blue">상세페이지</제목>
            </박스>
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

export default Detail