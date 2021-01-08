import React, { Component } from 'react' ;

// component 객체를 생성
class App extends Component 
{
  // 하나의 component가 가질 수 있는 변경 가능한 데이터 
  state = {
    count: 0 
  } ;

  handleChange = () => {
    this.setState({
      count: this.state.count + 1 
    }) ;
  } ;

  // Component class에 있던 render() method를 사용
  render()
  {
    return(
    <div className="App">
      <div className="props">
        {/* props가 들어가는 부분*/}
        <span>{this.props.message}</span>
      </div>

      <div className="state">
        {/* state가 들어가는 부분*/}
        {/* this.handleChange()와 같이 주면 안됨 */}
        {/* JSX파일을 HTML로 바꾸는 과정에서 함수가 실행되는 것으로 해석하기 때문 */}
        {/* 변수를 넣을 때에는 중괄호를 사용해야 함 */}
        {this.state.count}
        <button onClick={this.handleChange}>Count up!</button>
      </div>
    </div> 
    );
  }
}

// 만들어진 객체를 반환한다. 
export default App ;