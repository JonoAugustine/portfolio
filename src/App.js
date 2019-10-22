import React from 'react';

import Content from './components/Content'
import Project from './components/Project/Project'

import './assets/style/root.css'

class App extends React.Component {

  render() {
    return ( 
      <div className = "root-app" >
        <Content child={<Project />}/>
      </div>
    );
  }
}

export default App;