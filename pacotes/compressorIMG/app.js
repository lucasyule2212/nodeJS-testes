import sharp from "sharp"; //IMPORTANDO OS MÉTODOS DO PACOTE SHARP
let path = process.argv[2]; //Pegar na linha de comando o caminho da imagem a ser redimensionada
let width = Number(process.argv[3]); //Pegar na linha de comando o tamanho que eu queira que a imagem seja redimensionada

function resize(path, width) {
  //CRIANDO A FUNÇAO QUE VAI POSSUIR OS MÉTODOS DO SHARP

  sharp(path)
    .resize({ width: width }) // PARAMETRO DO SHARP= CAMINHO DA IMG, PARAMETRO DO RESIZE=OBJETO COM AS DIMENSOES QUE VC DESEJA, PARAMETRO TOFILE=ENDEREÇO E NOME DO ARQUIVO P SALVAR(O TOFILE GERA UM CALLBACK!)
    .toFile("./output_resized.jpg", (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Imagem redimensionada com sucesso!");
      }
    });
}
resize(path, width);
