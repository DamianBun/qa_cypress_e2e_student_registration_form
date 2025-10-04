function generateUser() {
  const firstName = 'Jan';
  const lastName = 'Kowalski';
  const email = `${firstName}${lastName}@mail.com`;
  const mobileNumber = Math.random().toString().slice(2, 12);
  const currentAddress = 'Parzęczewo';
  const birthDate = '06 May,1997';
  return {
    firstName,
    lastName,
    email,
    mobileNumber,
    currentAddress,
    birthDate
  };
}

module.exports = {
  generateUser
};
