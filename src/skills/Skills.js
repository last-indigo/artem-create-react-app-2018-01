import React from 'react';

export default class Skills extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul>
        {this.props.skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
    )
  }
}