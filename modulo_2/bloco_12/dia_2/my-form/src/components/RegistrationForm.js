import React from 'react';
import LoginInput from './LoginInput';
import LoginPassword from './LoginPassword';
import LoginName from './LoginName';

class RegistrationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Registro efetuado');
  }

  render() {
    const { name, login, password } = this.state;
    return (
      <section className="registration-form">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <LoginName value={name} onChange={this.handleChange} />
          <LoginInput value={login} onChange={this.handleChange} />
          <LoginPassword value={password} onChange={this.handleChange} />
          <button type="submit">Register</button>
        </form>
      </section>
    );
  }
}

export default RegistrationForm;
