import React from 'react';
import ReactDOM from 'react-dom';
import PlayerDetails2 from './PlayerDetails2'
import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {

     jogadores = [
        {
           nome : "Éverton Ribeiro",
           time : "Flamengo",
           pais : "Brasil"
        },
        {
            nome : "Gabriel Barbosa",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Giogian De Arrascaeta",
            time : "Flamengo",
            pais : "Uruguaio"
        },
        {
            nome : "Bruno Henrique",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Diego Ribas",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Rafinha",
            time : "Flamengo",
            pais : "Alemão, Brasileiro"
        },
        {
            nome : "Gerson Santos",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Diego Alves",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Filipe Luis",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Gustavo Henrique",
            time : "Flamengo",
            pais : "Brasil"
        },
        {
            nome : "Rogrigo caio",
            time : "Flamengo",
            pais : "Italiano, Brasileiro"
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            indice: 0
        }

    }

    

    incrementar = (event) =>{
        
        if(this.state.indice <= this.jogadores.length-2){
            this.setState({
                indice: this.state.indice+1
            })
        }
    }

    decrementar = (event) =>{

            if(this.state.indice != 0){
                this.setState({
                    indice: this.state.indice - 1
                })
            }
        
        
    }

    render() {
        return (
            <div>

                <div
                    class="container">
                        <div class="container p-3 my-3 bg-primary text-white">
                            <h1>Flamengo</h1>
                            <h6>Lista de Jogadores Titulares do flamengo atualmente</h6>
                        </div>
                        <div class="container">
                        
                            {this.jogador}
                        </div>

                <PlayerDetails2 jogador = {this.jogadores[this.state.indice]}></PlayerDetails2>
                


                    <button type="button" class="btn btn-dark" onClick={this.decrementar}>
                        Jog. Ant.
                   </button>

                    <button type="button" class="btn btn-dark" onClick={this.incrementar}>Prox. Jog.</button>


                </div>

            </div>



        );

    }

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
