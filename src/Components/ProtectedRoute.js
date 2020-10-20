import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  componentDidMount() {
      
  }
  
  render() {
    const Component = this.props.component;
    const isAuthenticated = this.props.isAuthenticated;
    return isAuthenticated ? (
      <Component></Component>
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}

export default ProtectedRoute;