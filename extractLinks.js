import fs from 'fs';
import chalk from 'chalk';
import { text } from 'express';
import { compileFunction } from 'vm'

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))

    return resultados;
}

function trataErro(erro){
    console.log(erro);
    throw new Error (chalk.red(erro));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises
        .readFile(caminhoDoArquivo,encoding)
        console.log(extraiLinks(texto));
    } catch{
        trataErro(erro);
  }
}
pegaArquivo('./text.md');
