import React from 'react';

export class Main extends React.Component {
    render() {
        return (

            <div className="main">
                <h1>Cube Scrambler</h1>
                
                <br/>
              
                    <ul>

                        <li style={{fontSize: 25, fontWeight:"bold" }}>
                            Seu embaralhamento:
                        </li>

                        {/* Input do número de movimentos de cada embaralhamanto */}
                        <li >
                            <label> &nbsp; &nbsp; &nbsp; &nbsp; Número de movimentos: </label>

                            <input 
                                type='number' 
                                name="nMoves" 
                                value={this.props.nMoves} 
                                onChange={this.props.onChange}>
                            </input>

                        </li>

                        {/* Input com o número de embaralhentos desejados */}
                        <li >
                            <label> &nbsp; &nbsp; &nbsp; &nbsp; Número de embaralhamentos: </label>
                            
                            <input 
                                type='number' 
                                name="nScram" 
                                value={this.props.nScram} 
                                onChange={this.props.onChange}>
                            </input>

                        </li>

                    </ul>


                <article>
                    
           
                    <button onClick = {this.props.onClick}> Scramble! </button>

                        
                    <div id="baralhos">

                    </div>

                </article>
            </div>
            
        );
    }
};