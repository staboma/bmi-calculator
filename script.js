document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    const bmi = (weight / (height * height)).toFixed(2);

    let message = '';

    if (bmi < 18.5) {
        message = 'Zayıf';
        document.getElementById('result').style.color = '#ffc107';
    } else if (bmi < 24.9) {
        message = 'Normal';
        document.getElementById('result').style.color = '#28a745';
    } else if (bmi < 29.9) {
        message = 'Fazla Kilolu';
        document.getElementById('result').style.color = '#ff9800';
    } else {
        message = 'Obez';
        document.getElementById('result').style.color = '#dc3545';
    }

    document.getElementById('result').innerText = `BMI: ${bmi} - ${message}`;
});
