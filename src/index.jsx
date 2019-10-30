// La ruta del fichero a importart es dinámica
const { scope, action, entity } = applicationParameters;
const componentRoute = `./${scope}/${entity}/${action}.jsx`;
console.log('componentRoute', componentRoute, componentRoute === './scope/entity/action.jsx');

// Esto funciona perfectamente
const requiredPackage1 = import('./scope/entity/action.jsx');
console.log('requiredPackage1', requiredPackage1);

// Esto falla, pese a que el valor de componentRoute === './scope/entity/action.jsx'
const requiredPackage2 = import(componentRoute);
console.log('requiredPackage', requiredPackage);
