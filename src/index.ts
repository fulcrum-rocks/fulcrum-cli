import * as figlet from 'figlet';
import * as utils from 'util';

const figletAsync = utils.promisify(figlet);

async function helloFulcrum() {
  const logo = await figletAsync('Fulcrum Rocks');
  console.log(logo);
}

helloFulcrum();
