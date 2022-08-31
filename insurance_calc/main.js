const form = document.querySelector('form');
const user = document.querySelector('#name');
const age = document.querySelector('#age');
const health = document.querySelectorAll('[name="health"]');
const habit = document.querySelectorAll('[name="habit"]');
let insurance = 0;
/* console.log(habit);
console.log(health); */
const getInsurance = (event) => {
    event.preventDefault();
    const userName = user.value;
    const userAge = age.value;

    if (userAge == 18) {
        insurance = 500;
    } else if (userAge > 18 && userAge <= 25) {
        insurance = insurance + (insurance * .1)
    } else if (userAge >= 26 && userAge <= 35) {
        insurance =insurance + (insurance * .3)
    } else if (userAge >= 36 && userAge <= 45) {
        insurance =insurance + (insurance * .6)
    } else if (userAge >= 46 && userAge <= 55) {
        insurance =insurance + (insurance * 1)
    } else if (userAge >= 56 && userAge <= 65) {
        insurance = insurance + (insurance * 1.5)
    } else if (userAge >= 66 && userAge <= 75) {
        insurance = insurance + (insurance * 2.1)
    }



     let healthCondition = [];
    let userHabits = [];
    health.forEach((item) => {
        if (item.checked){
            healthCondition.push(item.value);
        }
    });

    habit.forEach((item) => {
        if (item.checked){
            userHabits.push(item.value);
        }
    });



    console.log(userName);
    console.log(userAge);
    console.log(healthCondition);
    console.log(userHabits);
    console.log(insurance);
}

form.addEventListener('submit', getInsurance);