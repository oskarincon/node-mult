const fs = require('fs');
var colors = require('colors');

let getList = (base, limit) => {
    if (!Number(base)) {
        return `el valor de base ${base} no es un numero`;
    }
    if (!Number(limit)) {
        return `el valor de limit ${limit} no es un numero`;
    }
    let data = '';
    console.log('==================='.green);
    console.log(`==Tabla en base ${base}==`.rainbow);
    console.log('==================='.green);
    for (let i = 0; i <= limit; i++) {
        data += `${base} X ${i} =  ${base * i}\n`;
    }
    return data;
}

let getMult = (base, limit) => {
    if (!Number(base)) {
        reject(`el valor de base ${base} no es un numero`)
        return;
    }
    if (!Number(limit)) {
        reject(`el valor de limit ${limit} no es un numero`)
        return;
    }
    let data = '';
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= limit; i++) {
            data += `${base} X ${i} =  ${base * i}\n`;
        }
        fs.writeFile(`./tabla/tabla-${base}-al-${limit}.txt`, data, (err) => {
            (err) ? reject(err): resolve(colors.yellow(`tabla/tabla-${base}-al-${limit}.txt`))
        })
    })
}

module.exports = {
    getList,
    getMult

}