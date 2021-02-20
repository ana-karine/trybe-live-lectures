import React from 'react';
import LoginInput from './LoginInput';
import LoginPassword from './LoginPassword';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // com bind:
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Login funcionou');
  }

  render() {
    const { login, password } = this.state;
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <LoginInput value={login} onChange={this.handleChange} />
          <LoginPassword value={password} onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
