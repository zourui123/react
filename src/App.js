import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
class App extends Component {
  constructor(){
    super()
     this.state = {
      arr : [1,2,3]
     }
     // 修正事件的指针
     this.addTodo = this.addTodo.bind(this)
  }

  addTodo(){
    var val = this.refs.ipt.value;
    this.state.arr.push(val)
    this.setState({
      arr: this.state.arr
    })
  }
  render() {
    var good = '<div>it is good</div>';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <h1 className="zourui">{good}</h1>
      <label htmlFor="male">Male</label>
      <input type="radio" name="sex" id="male" />
      <br />
      <label htmlFor="female">Female</label>
      <input type="radio" name="sex" id="female" />
      <br/>
      <span dangerouslySetInnerHTML={{__html: good}}></span>
      <input type="text" ref="ipt" />
      <button onClick={this.addTodo}>add todo</button>
      <ul>
          {
            this.state.arr.map((item,index) =>{
              // key  =  {item}  没有引号
              return <li key={index}>{item}</li>
            })
          }
      </ul>
      <Title texts = 'true'></Title>
      </div>
    );
  }
}

export default App;
