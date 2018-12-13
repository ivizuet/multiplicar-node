let { crear, listar } = require("./multiplicar/multiplicar");
const args = require('yargs').command(
    "listar", "Muestra el resultado sin crear un archivo", {
        base: {
            demand: true,
            describe: "Numero que sera la base para la tabla"
        },
        limite: {
            default: 10,
            describe: "Limite de la tabla"
        }
    }
).command(
    "crear", "Crea un archivo de resultado", {
        base: {
            demand: true,
            describe: "Numero que sera la base para la tabla"
        },
        limite: {
            default: 10,
            describe: "Limite de la tabla"
        }
    }
).argv;


args._.forEach(element => {
    switch (element) {
        case "listar":
            listar(args.base, args.limite);
            break;
        case "crear":
            crear(args.base, args.limite)
                .then(respuesta => console.log(respuesta))
                .catch(err => console.log(err))
            break;
    }
});