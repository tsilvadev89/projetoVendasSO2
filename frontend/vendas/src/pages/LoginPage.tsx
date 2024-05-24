import React, { Component } from 'react'

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <div>LoginPage</div>

                <div>
                    <div>
                        Email
                        <input type="email" placeholder='Insira seu email'/>
                    </div>

                    <div>
                        Senha
                        <input type="password" placeholder='Insira sua senha'/>
                    </div>

                    <div>
                        <button>Entrar</button>
                    </div>
                </div>
                
            </>

        )
    }
}
