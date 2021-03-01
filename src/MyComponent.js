import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello! My name is {name} <br />
        Children's value is {children}!! <br />
        My favorite number is {favoriteNumber}
      </div>
    );
  }
}

// Functional Component
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       Hello! My name is {name} <br />
//       Children's value is {children}!!
//     </div>
//   );
// };

// Props가 부모 Component에서 지정되지 않았을 때를 대비해서 지정
MyComponent.defaultProps = {
  name: "Kwan Ik Jang",
};

// 필수 Property와 Prop Types를 지정할 수 있음
//  - React가 Rendering은 실시하지만, console을 띄워보면 error를 볼 수 있음
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
