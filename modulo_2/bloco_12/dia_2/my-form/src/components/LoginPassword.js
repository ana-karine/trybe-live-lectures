import React from 'react';

class LoginPassword extends React.Component {
  render() {
    return (
      <label>
        Password
        <input
          type="password"
          value={this.props.value}
          onChange={this.props.onChange}
          name="password"
          id="password"
        />
      </label>
    )
  }
}

export default LoginPassword;
