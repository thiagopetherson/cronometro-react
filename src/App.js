import React, {Component} from 'react';
import './style.css'

// Importando a imagem do cronometro
import cronometro from './assets/cronometro.png'; // Pegando a imagem e colocando em uma variável

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0, // Estado que guarda o valor do número que rodará no cronômetro
      botao: 'VAI' // Estado com o texto do botão
    };
    this.timer = null;
    this.vai = this.vai.bind(this); // Dando bind na função
    this.limpar = this.limpar.bind(this); // Dando bind na função
  }

  // Função que  serve para dar partida ou pausar o cronômetro
  vai(){
    let state = this.state;

    if(this.timer !== null){
      // Se timer for diferente de null, então nós vamos PAUSAR o cronômetro e adicionar um novo texto ao botão
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      // Se timer for igual a null, então vamos DAR PARTIDA no cronômetro (dar início ao setInterval, etc...)

      // Disparando setInterval e adicionando nessa state
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1; // Adicionando (somando) esse tempo (texto) ao contador que é mostrado no cronômetro
        this.setState(state); // Setando esse valor acima ao state 'numero'
      },100); // O setInterval roda a cada 100 milissegundos
      state.botao = 'PAUSAR'; // Adicionando um novo texto ao botão
    }

    this.setState(state); // Setando o estado
  }

  // Essa função serve para zerar o cronômetro
  limpar(){

    // Se timer for null, então zeraremos o zeremos o cronômetro (pararemos o setInterval)
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null; // Zerando o contador
    }
    
    // Reiniciando o botão, zerando os estados, colocando texto inicial no botão...
    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state); // Setando o estado

  }

  // Renderização do HTML do componente
  render(){
    return(
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;