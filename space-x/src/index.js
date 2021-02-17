import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//1
const myfirstelement = (<div><h1>{Math.PI}</h1><h2>Hello World</h2></div>);

//2
function HelloFunction() {
  return <h1>HelloFunction</h1>;
}

//3
class HelloClass extends React.Component {
  render() {
    return <h1><i>HelloClass</i></h1>;
  }
}

//4
class HelloPropsc extends React.Component {
  render() {
    return <h1><i>Hello Props = {this.props.name}</i></h1>;
  }
}

//5
function HelloPropsf(props) {
  return <h1>Hello {props.name}</h1>;
}

//6
function Someone() {
  const name = "Net";
  return <span>{name}</span>;
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name} & <Someone />
      </div>
    );
  }
}

//7
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Firstname",
      lname: "Lastname",
      age: 20
    }
  }
  changeName = () => {
    this.setState({
      fname: "Spicy",
      lname: "Lemon"
    })
  }
  render() {
    return (
      <div>
        <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
        <button
          type="button"
          onClick={this.changeName}
        >Change Name</button>
      </div>
    );
  }
}

// 1
// ReactDOM.render(myfirstelement, document.getElementById('root'));

// 2
// ReactDOM.render(<HelloFunction />, document.getElementById('root'));

// 3
// ReactDOM.render(<HelloClass />, document.getElementById('root'));

// 4
// ReactDOM.render(<HelloPropsc name="Propsclass"/>, document.getElementById('root'));

//5
// ReactDOM.render(<HelloPropsf name="Propsfunction"/>, document.getElementById('root'));

//6
// ReactDOM.render(<Hello name="World" />, document.getElementById('root'));

//7
// ReactDOM.render(<Person />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));