import chalk from 'chalk';
import * as figlet from 'figlet';

async function helloFulcrum() {
  const logo = figlet.textSync('FR', { font: '3D-ASCII' });
  console.log(chalk.blueBright(logo));
}

helloFulcrum();
