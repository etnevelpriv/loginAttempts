import { LoginAttempt } from "./loginAttempt"

const init = function () {
  console.log("Init betöltődött.")
  const attempts = [
    new LoginAttempt("Balint", new Date(2019, 7, 15), true),
    new LoginAttempt("Gergo", new Date(2020, 10, 10), false),
    new LoginAttempt("d", new Date(2020, 10, 10), true),
    new LoginAttempt("Emese", new Date(2022, 12, 12), true),
    new LoginAttempt("Daniel", new Date(2022, 10, 10), false)
  ];

  console.log(attempts)
  displayLoginAttempts(attempts);
};

const displayLoginAttempts = function () {
  console.log("displayLoginAttemts függvény meghívódott")
  for (let i = 0; i < attempts.length; i++) {
    console.log(`Ciklus lefutott ${i}szer`)
    console.log(attempts[i]);

    
  };
  console.log("Ciklus vége")
};

document.addEventListener("DOMContentLoaded", init);