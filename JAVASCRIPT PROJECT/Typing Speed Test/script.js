
    const paragraphs = [
      "The quick brown fox jumps over the lazy dog.",
      "Typing speed is measured in words per minute.",
      "Practice makes perfect in improving typing skills.",
      "JavaScript enables dynamic functionality in websites."
    ];

    let timer;
    let timeLeft = 60;
    let isTyping = false;
    let currentText = "";

    const timerDisplay = document.getElementById("timer");
    const paragraphDisplay = document.getElementById("paragraph");
    const inputField = document.getElementById("input");
    const startButton = document.getElementById("startBtn");
    const resultDisplay = document.getElementById("result");

    startButton.addEventListener("click", startTest);

    function startTest() {
      timeLeft = 60;
      isTyping = true;
      inputField.value = "";
      inputField.disabled = false;
      inputField.focus();
      resultDisplay.textContent = "";
      currentText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
      paragraphDisplay.textContent = currentText;
      startButton.disabled = true;
      updateTimer();
      timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      timerDisplay.textContent = `Time: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        finishTest();
        return;
      }
      timeLeft--;
    }

    function finishTest() {
      isTyping = false;
      inputField.disabled = true;
      const typedText = inputField.value.trim();
      const wordsTyped = typedText.split(/\s+/).length;
      const wpm = Math.round(wordsTyped);
      resultDisplay.textContent = `Your typing speed is ${wpm} WPM.`;
      startButton.disabled = false;
    }
  