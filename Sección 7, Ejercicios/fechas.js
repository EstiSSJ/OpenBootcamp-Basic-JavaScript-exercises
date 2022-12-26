const actualDate = new Date()
console.log(actualDate)

const myBirthDate = new Date(2004, 01, 12);
console.log(myBirthDate)

const isTodayMoreThanMyBirth = actualDate.getTime() > myBirthDate.getTime();
console.log(isTodayMoreThanMyBirth)


const birthDay = myBirthDate.getDate()
const birthMonth = myBirthDate.getMonth()
const birthYear = myBirthDate.getFullYear()
