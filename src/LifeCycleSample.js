import React, { Component } from "react";

/*
    LifeCycle Method에 대한 이해 
    1. Will 접두사가 붙은 method는 어떤 작업을 작동하기 '전'에 실행
    2. Did 접두사가 붙은 method는 어떤 작업을 작동한 '후'에 실행
    3. Mount, Update, UnMount
 */
/*
    1) Mount
     - constructor > getDerivedStateFromProps > render > componentDidMount
     - constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자
     - getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메소드
     - render : 준비한 UI를 렌더링하는 메소드
     - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드

    2) Update
     - Component가 Update가 이루어지는 시점
       - props가 바뀔 때 / state가 바뀔 때 / 부모 컴포넌트가 rerendering될 때 / this.forceUpdate로 강제로 업데이트 할 때
     - getDerivedStateFromProps > shouldComponentUpdate > render > getSnapshotBeforeUpdate > componentDidUpdate
    
    3) UnMount
     - componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메소드
*/
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapShot) {
      console.log("업데이트가 되기 직전 색상 : ", snapShot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
