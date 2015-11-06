import React, { Component } from 'react';

import { Files, FolderDetails, SignersAndApprovers, VisibleSignature } from './../../components/'

export default class Home extends Component {
  render() {
    return (
    	<div>
	      <h1>Home</h1>
	      <FolderDetails />
	      <Files />
	      <SignersAndApprovers />
	      <VisibleSignature />
      </div>
    );
  }
}
