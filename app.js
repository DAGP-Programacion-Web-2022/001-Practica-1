import chalk from 'chalk';

console.log(chalk.cyan('\nDiego Gentner 4H Practica 01\n'));
console.log('Hola amigos este es un console log normal');

console.log(chalk.red("Hola amigos este es un console chalk red"));
console.log(chalk.bgRed("Hola amigos este es un console chalk red subrayado\n"));

console.log(chalk.greenBright("Hola amigos este es un console chalk green"));
console.log(chalk.bgGreenBright(chalk.black("Hola amigos este es un console chalk green subrayado con chalk black")));