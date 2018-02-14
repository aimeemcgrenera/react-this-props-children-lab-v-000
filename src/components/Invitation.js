import React from 'react';

export default class Invitation extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="invitation">
        <h1>You've been invited!</h1>
=======
      <div className="Invitation">
        <h1>"You've been invited!"</h1>
>>>>>>> 86d712786749188a8a8cfda9f075e1bc676c1901
        <p>{this.props.children}</p>
      </div>
    );
  }
}