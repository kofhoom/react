/*eslint-disable*/ 
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목 , 글제목변경1] = useState(['남자코트 추천1','남자코트 추천2','남자코트 추천3']); 
  let [modal, modal변경] = useState(false);
  let [리스트제목,리스트제목변경] = useState(0);
  let [저장,저장값변경] = useState('');
  let [입력값,입력값변경] = useState('');

  // 디스트럭처링
  
  return (  
    <div className="App">
       <div className="black-nav">
        <div>개발 blog</div> 
       </div>
 
       {/* <List 입력값 = {입력값}/> */}
      {
        글제목.map(function(a,i){ //(현제 들어있는 어레이 갯수 포문,현재 들어있는 어레이 순서넘버)
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{리스트제목변경(i)}}>{a}</h3>
              <p>2월 18일 발행</p>
              <hr />
            </div> 
          )
        })
      }
        <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}} />
        <button onClick={()=> {
          var newArreycopy = [...글제목];
          //독립적인 카피본 생성[...]
          newArreycopy.unshift(입력값);
          글제목변경1(newArreycopy);
        }}>저장</button>
        </div>

            
        <button onClick={ ()=>{ modal변경(!modal) } }> 열기 </button>
        {/* !modal modal이 true라면 false가 되고 modal이 false면 true가 된다. modal 기본값 (false) */}
      { 
         modal === true 
         ? <Modal 제목={글제목} 리스트제목={리스트제목}/>
         : null
        // 부모가 보내는 값을 자식 컨포넌트 전송 왜냐면 app안에 있지 안는 단독 컴포넌트에게 데이터 바인딩을 해줘야하기떄문
        //null 없어지는 형태
      }

      {/* <input onChange={(e)=>{입력값변경(e.target.value)}} />   
      {입력값} */}
      
      {/* 뭔가 입력이 될때 onChange */}
      {/* e.target.valueS =e.target 현재 이벤트가 동작하는곳.사용자 입력한값 */}
    </div>
  );
 
}


function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.제목[props.리스트제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// function List(props){
//   return (
//     <div className="list">
//       <h3 onClick={()=>{리스트제목변경(i)}}>{입력값}</h3>
//       <p>2월 18일 발행</p>
//       <hr />
//     </div> 
//   )
// }
export default App;
