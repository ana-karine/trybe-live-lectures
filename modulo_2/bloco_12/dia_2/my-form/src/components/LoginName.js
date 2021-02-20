import React from 'react';

class LoginName extends React.Component {
  render() {
    return (
      <label>
        Name
        <input
          type="name"
          value={this.props.value}
          onChange={this.props.onChange}
          name="name"
          id="name"
        />
      </label>
    )
  }
}

export default LoginName;
