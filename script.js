// script.js
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    const bmi = (weight / (height * height)).toFixed(2);

    let message = '';

    if (bmi < 18.5) {
        message = 'Zayıf';
    } else if (bmi < 24.9) {
        message = 'Normal';
    } else if (bmi < 29.9) {
        message = 'Fazla Kilolu';
    } else {
        message = 'Obez';
    }

    document.getElementById('result').innerText = `BMI: ${bmi} - ${message}`;
});