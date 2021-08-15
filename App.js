import React, { Component } from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          { "text": "TicTacToe and avoiding state management complexity" },
          { "text": "Vanilla Tilt, direct DOM access and Memory Leaks" },
          { "text": "Fetching Pokemons and error boundaries" },
          { "text": "Safely fetch Rick and Morty Characters handling Async operations" },
          { "text": "Simple fetch-and-cache pattern with Rick and Morty Characters" }

        ]
    }
  }
  render() {
    return (
      <div>
        <ListItems />
        <ol>
          {this.state.data.map((item) => <List data={item} />)}
        </ol>
      </div>
    );
  }
}

class ListItems extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Hello World!</h1>
        <p>A few practical React exercises with detailed solutions for real-world use cases. This site is very loosely based on Kent C Dodd's Epic React Workshops.</p>

          <h1>List of exercises</h1>
  
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      // <ul>
        <li>{this.props.data.text}</li>
     
    );
  }
}

export default App;

// class App extends React.Component {

//   render() {
//     const questionList = [
//       { description: 'How to render list in React?', key: 0 },
//       { description: 'Do you like JS?', key: 1 },
//       { description: 'Do you know CSS?', key: 2 }
//     ];

//     return (
//       <ol>
//         {questionList.map(question => {
//           return (
//             <li key={question.key}>{question.description}</li>
//           );
//         })}
//       </ol>
//     );
//   }
// }
