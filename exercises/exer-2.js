/* INSTRUCCIONES:

Crear una función tomando como parámetro la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { userHasCar } = require('../helpers/fixer.helper');
const companies = createAll();

cleanConsole(2, companies);
let hasCar = true;
console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ', userHasCar(companies, hasCar));
