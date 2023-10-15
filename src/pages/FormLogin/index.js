import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
class FormLogin extends Component {
  constructor(props) {
    super(props);
    // Inicializamos o estado do componente com os valores iniciais dos campos do formulário.
    this.state = {
      email: '',
      senha: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Este método é chamado quando o formulário é enviado.
    // PreventDefault() impede o envio padrão do formulário, que atualizaria a página.
    console.log(this.state); // Aqui, os dados do formulário são exibidos no console.
    // Você pode substituir esta linha com lógica para enviar os dados a um servidor, por exemplo.
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Este método é chamado quando um campo de entrada é alterado.
    // "name" representa o nome do campo e "value" é o valor inserido.
    this.setState({ [name]: value });
    // Atualizamos o estado com os valores dos campos do formulário à medida que são alterados.
  }

  render() {
    return (
      <div className="pages">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>

            <input placeholder="E-mail" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            {/* O campo de entrada para o email com um evento "onChange" vinculado ao método handleChange */}
         
            <input placeholder="Senha" type="password" name="senha" value={this.state.senha} onChange={this.handleChange} required />
            {/* Usamos o tipo "password" para mascarar a senha enquanto o usuário a digita */}

            <button type="submit">ENTRAR</button>
            {/* O botão de envio do formulário que aciona o evento "onSubmit" no formulário */}
            <a>Esqueceu o Login?</a>
            <Link to="/FormCad">REGISTRE-SE</Link>
        </form>
      </div>
    );
  }
}

export default FormLogin;
