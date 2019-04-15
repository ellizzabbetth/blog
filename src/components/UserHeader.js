import React from 'react';
import { connect } from 'react-redux';
//
class UserHeader extends React.Component {
   // don't want UserHeader to fetch it's own data
   // so comment componentDidMount.
   // componentDidMount() {
   //   this.props.fetchUser(this.props.userId);
   // }

  render() {
    // find user we care about: http://jsonplaceholder.typicode.com/users/1
    //  MOVED TO MAPSTATETOPROPS: const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props; // destructure user off this.props.user
    if(!user){
      return null; // component shows nothing
    }

    return <div className="header">{user.name}</div>;
  }
}

// -----------  MAPSTATETOPROPS -----------------------------------
// provides access to redux level state
// provides component access to a prop called
// this.prop.users
// which has all the users we care about

// extract computation on redux state + props coming into component
// to mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
