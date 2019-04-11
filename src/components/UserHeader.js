import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
   componentDidMount() {
     this.props.fetchUser(this.props.userId);
   }

  render() {
    // find user we care about: http://jsonplaceholder.typicode.com/users/1
    const user = this.props.users.find(user => user.id === this.props.userId);
    if(!user){
      return null; // component shows nothing
    }

    return <div className="header">{user.name}</div>;
  }
}

// provides access to redux level state
// provides component access to a prop called
// this.prop.users
// which has all the users we care about
const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
