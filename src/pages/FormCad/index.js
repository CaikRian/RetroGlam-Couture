import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class CadastroUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            idade: '',
            dataNascimento: '',
          
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (name === 'interesses') {
            this.setState((prevState) => ({
                interesses: {
                    ...prevState.interesses,
                    [target.id]: value
                }
            }));
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode processar os dados do formulário, enviar para um servidor, etc.
    }

    render() {
        return (
            <div className="pages">
                <h1>CADASTRO</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <input placeholder='Nome Completo' type="text" id="nome" name="nome" value={this.state.nome} onChange={this.handleInputChange} required />

                    <input placeholder='E-mail' type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                   
                    <input placeholder='Confirmar E-mail' type="email" id="confirmarEmail" name="confirmarEmail" value={this.state.confirmarEmail} onChange={this.handleInputChange} required />
                    
                    <input placeholder='Senha' type="password" id="senha" name="senha" value={this.state.senha} onChange={this.handleInputChange} required />
                    
                    <input placeholder='Confirmar Senha' type="password" id="confirmarSenha" name="confirmarSenha" value={this.state.confirmarSenha} onChange={this.handleInputChange} required />
                    
                    <div>Data de Nascimento:
                    <input  type="date" id="dataNascimento" name="dataNascimento" value={this.state.dataNascimento} onChange={this.handleInputChange} required />
                    </div>
                    <button type="submit">CADASTRAR</button>
                    <Link to="/FormLogin">Já tem conta?</Link>
                </form>
            </div>
        );
    }
}

export default CadastroUsuario;
