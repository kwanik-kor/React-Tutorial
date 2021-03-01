import React, { Component } from "react";
// import MyComponent from "./MyComponent";
import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import EventPractice2 from "./EventPractice2";

// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";

// import IterationSample from "./IterationSample";

// import LifeCycleSample from "./LifeCycleSample";
// import ErrorBoundary from "./ErrorBoundary";

import Info from "./Info";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return <Info />;
  }
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.handleClick}>랜덤 색상</button>
  //       <ErrorBoundary>
  //         <LifeCycleSample color={this.state.color} />
  //       </ErrorBoundary>
  //     </div>
  //   );
  // }
}

// ref 예제
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>
//       </div>
//     );
//   }
// }
// const App = () => {
//   return <ValidationSample />;
// };

export default App;
