import React from 'react';

export default class Skills extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <ul>
          {this.props.skills.map(skill => (
            // key is required in repeater
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {/*
          onSkillAdd is only defined on the props 
          If not specified - no error
        */}
        <button onClick={this.props.onSkillAdd}>Add new skill</button>
        
        {/* SLOT FOR CHILDREN */}
        <div>SLOT FOR CHILDREN: {this.props.children || <div>N/A children</div>}</div>
      </div>
    )
  }

  
  /***** UPDATE-RELATED hooks ******/
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  // /* 
  //    warning.js:33 Warning: Skills has a method called componentShouldUpdate(). 
  //    Did you mean shouldComponentUpdate()? 
  //    The name is phrased as a question because the function is expected to return a value.
  // */
  // componentShouldUpdate(){
  //   console.log('componentShouldUpdate');
  // }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;  // returnValue === undefined -> compile error
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  
  /***** MOUNT-RELATED hooks ******/
  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentShouldMount(){
    console.log('componentShouldMount');
  }
}