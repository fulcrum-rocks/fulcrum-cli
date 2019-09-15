import * as figlet from 'figlet';

function helloFulcrum() {
  // tslint:disable-next-line: no-console
  figlet('Fulcrum Rocks', function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

helloFulcrum();
