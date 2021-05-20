import fs from "fs"; //importaçao do modulo que lida com Files(Arquivos) do próprio Node.
let args = process.argv.slice(2);

switch (args[0]) {
  case "1": //MÉTODO WRITE FILE
    console.log("Parametros do metodo em ordem: (nome.txt,seu texto)");
    console.log(
      "Obs: Ao utilizar este método em um arquivo já existente, irá sobrescrever todo conteúdo pelo novo conteúdo!"
    );
    let name = String(args[1]);
    let conteudo = String(args[2]);
    fs.writeFile(`${name}.txt`, `${conteudo}`, (error) => {
      //método writeFile -> Apaga todo conteúdo do arquivo(primeiro parametro), e escreve o segundo parametro nele
      if (error) {
        //tratar o callback do metodo writeFile!
        throw error;
      }
      console.log(`Arquivo ${name} criado/sobrescrito com sucesso!`); //Se tudo ocorrer normalmente, será printado essa linha!
    });

    break;
  case "2": //MÉTODO APPEND FILE
    console.log("Parametros do metodo em ordem: (nome.txt,seu texto)");
    console.log(
      "Obs: Ao utilizar este método em um arquivo já existente irá concatenar textos!"
    );
    let name1 = String(args[1]);
    let conteudo1 = String(args[2]);
    fs.appendFile(`${name1}.txt`, `${conteudo1}`, (error) => {
      //método appendFile -> Concatena no arquivo ja existente o segundo parametro!
      if (error) {
        //tratar o callback do metodo appendFile!
        throw error;
      }
      console.log(`Arquivo ${name1} atualizado com sucesso!`); //Se tudo ocorrer normalmente, será printado essa linha!
    });
    break;
  case "3": //MÉTODO DELETE FILE
    console.log("Parametros do metodo em ordem: (nome.txt)");
    console.log(
      "Obs: Ao utilizar este método em um arquivo já existente irá deletar o arquivo!"
    );
    let name2 = String(args[1]);
    fs.unlink(`${name2}.txt`, (error) => {
      //método unlink -> Deleta o arquivo citado!
      if (error) {
        //tratar o callback do metodo unlink!
        throw error;
      }
      console.log(`Arquivo ${name2} deletado com sucesso!`); //Se tudo ocorrer normalmente, será printado essa linha!
    });
    break;
  case "4": //MÉTODO RENAME FILE
    console.log("Parametros do metodo em ordem: (nome.txt,novoNome.txt)");
    console.log(
      "Obs: Ao utilizar este método em um arquivo já existente irá renomear o arquivo!"
    );
    let name3 = String(args[1]);
    let newName = String(args[2])
    fs.rename(`${name3}.txt`,`${newName}`,(error) => {
      //método rename -> Renomeia o arquivo citado!
      if (error) {
        //tratar o callback do metodo Rename!
        throw error;
      }
      console.log(`Arquivo ${name3} renomeado com sucesso!`); //Se tudo ocorrer normalmente, será printado essa linha!
    });
    break;
  case "5": //MÉTODO READFILE
    console.log("Parametros do metodo em ordem: (nome.txt,formato(UTF8))");
    console.log(
      "Obs: Ao utilizar este método o conteúdo do arquivo será printado!"
    );
    let name4 = String(args[1]);
    fs.readFile(`${name4}`,`UTF8`,(error,data) => { //O parametro data é o callback do conteúdo do arquivo lido!
        //método rename -> Renomeia o arquivo citado!
        if (error) {
          //tratar o callback do metodo Rename!
          throw error;
        } 
        console.log(`Arquivo ${name4} lido com sucesso!`); //Se tudo ocorrer normalmente, será printado essa linha!
        console.log(data); //print do conteúdo do arquivo
    })
    break;

  default:
    console.log("Operation not defined!");
    break;
}
