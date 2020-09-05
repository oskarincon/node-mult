const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'lista las tablas de multiplicar', opts)
    .command('crear', 'crear las tablas de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}