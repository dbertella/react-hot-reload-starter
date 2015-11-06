import React, { Component } from 'react';

export default class FolderOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owners: this.props.owners || [],
    }
  }

  addOwner(newOwner) {
    this.setState({
      owners: this.state.owners.push(newOwner),
    })
  }
  render() {

    let owners = this.state.owners.map((el, i) => {
      return (
        <li key={i}>{el}</li>
      );
    });
    return (
      <div>
        <h3>FOLDER’S OWNERS</h3>
        <ul>
          { this.state.owners }
        </ul>
        <form onSubmit={this.addOwner.bind(this, this.ref.newOwner)}>
          <input type="text" name="newOwner" />
          <button>ADD OWNER</button>
        </form>
      </div>
    );
  }
}
