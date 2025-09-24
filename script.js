let currentQuestion = 0;
let score = 0;

function loadQuestion(index) {
  let q = questions[index];
  document.getElementById("question-en").innerText = q.question_en;
  document.getElementById("question-hi").innerText = q.question_hi;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options_en.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = `${opt} / ${q.options_hi[i]}`;
    btn.onclick = () => checkAnswer(i, q.correct);
    optionsDiv.appendChild(btn);
  });

  let video = document.getElementById("question-video");
  video.src = q.video;
  video.load();

  document.getElementById("score").innerText = `Score: ${score}/${questions.length}`;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("✅ Correct!");
    score++;
  } else {
    alert("❌ Wrong!");
  }
  document.getElementById("score").innerText = `Score: ${score}/${questions.length}`;
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  } else {
    alert(`🎉 Quiz finished! Your final score is ${score}/${questions.length}`);
  }
});

// Load first question
loadQuestion(currentQuestion);
