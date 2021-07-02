/*
INSTRUCCIONES:

Cree una función tomando la variable "companies" como parámetro y devolviendo
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { fixData, isDataFixed } = require('../helpers/fixer.helper');
const companies = createAll();

cleanConsole(3, companies);
// fixData(companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ', isDataFixed(companies));
