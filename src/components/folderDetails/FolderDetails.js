import React, { Component } from 'react';

import FolderDetailForm from './FolderDetailForm';
import FolderOwner from './FolderOwner';
import FolderOptions from './FolderOptions';

export default class FolderDetails extends Component {
  render() {
    return (
      <section className="container">
        <h2>Folder Details</h2>
        <div className="left">
        	<FolderDetailForm />
        	<FolderOwner />
        </div>
        <div className="right">
        	<FolderOptions />
        </div>
      </section>
    );
  }
}
