import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const {user} = this.props;
    return (
      <div className="header">
        <h3> Hello, {user.name}! </h3>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Header);
