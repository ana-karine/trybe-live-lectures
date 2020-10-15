const users = [
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false }
];

// Encontra a primeira pessoa que não saiba dirigir
const firstPersonThatDontDrive = users.find((user) => {
  // ele deve retornar qual é a regra de negocio
  return user.isDriver === false;
});

console.log(firstPersonThatDontDrive);
