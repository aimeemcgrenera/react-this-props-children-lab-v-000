import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
<<<<<<< HEAD
        <div className={this.props.theme}>{child}</div> 
=======
        <div className="some-component-special-class">{child}</div> 
>>>>>>> 86d712786749188a8a8cfda9f075e1bc676c1901
      );
    });
 
    return (
<<<<<<< HEAD
      <div>
=======
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
>>>>>>> 86d712786749188a8a8cfda9f075e1bc676c1901
        {childrenWithWrapperDiv}        
      </div>      
    );
  }
}