
    let num1, num2, score = 0;

    function generateQuestion() {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      document.getElementById('question').textContent = `What is ${num1} + ${num2}?`;
      document.getElementById('answer').value = '';
    }

    function checkAnswer() {
      const userAnswer = parseInt(document.getElementById('answer').value);
      if (userAnswer === num1 + num2) {
        score++;
        alert('Correct!');
      } else {
        alert(`Wrong! The correct answer was ${num1 + num2}`);
      }
      document.getElementById('score').textContent = `Score: ${score}`;
      generateQuestion();
    }

    window.onload = generateQuestion;