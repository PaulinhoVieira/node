import No from "./No.js";

class Estrela{
  constructor(){
    this.root = null;
    this.inicio = null;
    this.final = null;
  }

  percoreMatriz(matriz){
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          this.inserirMatriz(matriz[i][j], matriz.length, matriz[i].length, i , j);
      }
  }
  }

  inserirMatriz(value, linha, coluna, contLin, contCol){
    let contAuxLinha = 0;// preciso salvar a posiçao anterior na mesma linha do current e a posiçao a cima acompanhando o current
    if(this.root === null){
      this.root = new No(value);
    }else{
      let no = this.root;
      while(true){
        if(no.value === null){
          no = new No(value);
          break;
        }
        if(no.right === null && coluna != contCol){
          no.right = new No(value);
          break;
        }else if(coluna != contCol){
          no = no.right;
        }else if(contAuxLinha != contLin && contLin != linha){
          for (let x = 0; x < coluna; x++){
            no = no.left;
          }
          no = no.down;
        }
      }
    }
  }


}