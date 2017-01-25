import React from 'react';
import { connect } from 'react-redux';
import { githubAuth } from '../../actions/AuthActions';

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    githubAuth: () => { dispatch(githubAuth()); },
  };
};

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
  }


  render () {
    const {username} = this.props;
    return (
      <div className="header">
        <h3> Hello, {username}! </h3>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
