import React from 'react';
import {Main} from './main';

//Movimentos de Cubo Mágico
const moves = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];

export class Scrambler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            embaralhado: [],
            nMoves: "25",
            nScram: "5",
        }

        this.scramble = this.scramble.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //Lidar com a alteração do número de movimentos
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    

    //Lidar com o click fazendo aparecer um embalhamento
    handleClick() {
        const embalhamento = this.state.embaralhado;  

        for (let i = 1; i <= this.state.nScram; i++) {
            this.scramble(this.state.nMoves);
            document.getElementById('baralhos').innerHTML = embalhamento.join("&nbsp;");
        }
        
    }


    //Fazer embaralhamento com "m" movimentos
    scramble(m) {
        let i = 0; 
        
        this.state.embaralhado.push("<p>");

        while (i < m) {
            const embalhamento = this.state.embaralhado;

            let moveIndex = Math.floor(Math.random() * moves.length);
            let move = moves[moveIndex];
            let lastMoveI = this.state.embaralhado.length - 1;
            
            if (move === embalhamento[lastMoveI] || move === embalhamento[lastMoveI]+"'" || move === embalhamento[lastMoveI]+"2") {
                i--;  
            } else {
                embalhamento.push(move+'  ');
                i++;
            }
            
            if (i === m) {
                embalhamento.push("</p>")
            }
        };  
        
    }


    render() {
        return <Main onClick={this.handleClick} nMoves={this.state.nMoves} onChange={this.handleChange} nScram={this.state.nScram}/>
    }
}
