import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from './App' ;

ReactDOM.render
(
  // index.js에서 App.js로 사용할 수 있는 하나의 변수를 전달 (message)
  // 이 message변수를 props라고 한다. (state오 구분하여 잘 알아둘 것)
  <App message="Hello Message" />,
  document.getElementById('root')
);
