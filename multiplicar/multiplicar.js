const fs = require('fs');

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base * index}\n`);
        }
        return resolve();
    });

};

let crear = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla_del_${base}.txt`, data,
            (err) => {
                if (err) {
                    reject(err);
                }
                resolve(`tabla_del_${base}.txt`);
            })
    });
}


module.exports = {
    listar,
    crear
}