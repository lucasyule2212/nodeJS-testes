import sharp from "sharp"; //IMPORTANDO OS MÉTODOS DO PACOTE SHARP
import compress_images from "compress-images"; //IMPORTANDO OS MÉTODOS DO PACOTE COMPRESS-IMAGES

let path = process.argv[2]; //Pegar na linha de comando o caminho da imagem a ser redimensionada
let width = Number(process.argv[3]); //Pegar na linha de comando o tamanho que eu queira que a imagem seja redimensionada

function resize(pathInput,outputPath,width) {
  //CRIANDO A FUNÇAO QUE VAI POSSUIR OS MÉTODOS DO SHARP

  sharp(pathInput)
    .resize({ width: width }) // PARAMETRO DO SHARP= CAMINHO DA IMG, PARAMETRO DO RESIZE=OBJETO COM AS DIMENSOES QUE VC DESEJA, PARAMETRO TOFILE=ENDEREÇO E NOME DO ARQUIVO P SALVAR(O TOFILE GERA UM CALLBACK!)
    .toFile(outputPath, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Imagem redimensionada com sucesso!");
          compress(outputPath,"./compressed_");     //APÓS O REDIMENSIONAMENTO USAR O PACOTE DE COMPRESSAO DE IMG
          console.log("Imagem comprimida com sucesso!");
      }
    });
}

function compress(pathInput,outputPath) { //FUNÇAO DO PACOTE COMPRESS IMAGES
    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
console.log("-------------");
console.log(error);
console.log(completed);
console.log(statistic);
console.log("-------------");
}
);
}


resize(path,"./output_resize.jpg" ,width);

