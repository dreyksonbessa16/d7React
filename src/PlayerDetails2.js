import React from 'react'

class PlayerDetails2 extends React.Component{
    render(){
        return (

            <div class="container p-3 my-3 bg-secondary text-black">
                <section class="container">
                    <ul class="list-group p-3 my-3 bg-secondary text-black">
                        <li class="list-group-item list-group-item-danger">Jogador: {this.props.jogador.nome}</li>
                        <li class="list-group-item list-group-item-secondary">Time: {this.props.jogador.time}</li>
                        <li class="list-group-item list-group-item-dark">Nacionalidade: {this.props.jogador.pais}</li>
                    </ul>
                </section>
                    <h6>by Dreykson Oliveira Bessa</h6>
            </div>

        );
    }
}
export default PlayerDetails2