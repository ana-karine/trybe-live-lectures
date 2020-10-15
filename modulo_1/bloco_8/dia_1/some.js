const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
];

// Faça um algoritmo que verifique se existe alguma pessoa que não dirige

// Utilizando forEach
users.forEach((user) => {
  if (user.isDriver === false) {
    // temos alguém na família que não dirige
  }
})


// Utilizando some (do inglês: algum)
const familyHavePersonThatDontDrive = users.some((user) => {
  // isDriver for false
  return user.isDriver === false;
});
console.log(familyHavePersonThatDontDrive);
