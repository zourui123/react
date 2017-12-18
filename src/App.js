import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
class App extends Component {
//   constructor(){
//     super()
//      this.state = {
//       arr : [1,2,3],
//       isToggleOn : true
//      }
//      // 修正事件的指针
//      this.addTodo = this.addTodo.bind(this);
//      this.handleClick = this.handleClick.bind(this,this.state.arr);
//   }

//   addTodo(){
//     var val = this.refs.ipt.value;
//     this.state.arr.push(val)
//     // setState 后 才能更新state 更新dom
//     this.setState({
//       arr: this.state.arr
//     })
//   }
//   handleClick(arr){
//     console.log(arr)
//     this.setState({
//       isToggleOn : !this.state.isToggleOn
//     })
//   }
//   render() {
//     var good = '<div>it is good</div>';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//       {/* 单选按钮 */}
//       <h1 className="zourui">{good}</h1>
//       <label htmlFor="male">Male</label>
//       <input type="radio" name="sex" id="male" />
//       <br />
//       <label htmlFor="female">Female</label>
//       <input type="radio" name="sex" id="female" />
//       <br/>
//        {/* 点击添加 todo */}
//       <span dangerouslySetInnerHTML={{__html: good}}></span>
//       <input type="text" ref="ipt" />
//       <button onClick={this.addTodo}>add todo</button>
//       <ul>
//           {
//             this.state.arr.map((item,index) =>{
//               // key  =  {item}  没有引号
//               return <li key={index}>{item}</li>
//             })
//           }
//       </ul>
//        {/* 调用组件 */}
//       <Title texts = 'true'></Title>
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//       </div>
//     );
//   }
// }
constructor() {
  super();
  this.state = {
    isGoing: true,
    numberOfGuests: 2
  };

  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  console.log(target)
  console.log(name);
  console.log(value)
}

render() {
  return (
  <div>
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
      </label>
    </form>
  </div>
  );
}
}

export default App;
