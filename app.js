const argv = require('./config/yargs').argv;
const { getMult, getList } = require('./funciones/multiplicar');
var colors = require('colors');

let command = argv._[0];

let createTable = (base, limit = 10) => {
    getMult(base, limit)
        .then(archivo => console.log(`Archivo ${archivo} fue creado`))
        .catch(e => console.log(`error en ${e}`));
}
let listTable = (base, limit = 10) => {
    let result = getList(base, limit)
    console.log(result);
}

switch (command) {
    case 'listar':
        listTable(argv.base, argv.limite);
        break;
    case 'crear':
        createTable(argv.base, argv.limite);
        break;
    default:
        console.log(`comando ${command} no es conocido`);
        break;
}