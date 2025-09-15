// List of meme questions/images/answers (extend as needed)
const memes = [
  { img: "memes/meme1.png", question: "Why do programmers prefer dark mode?", answer: "Because light attracts bugs!" },
  { img: "memes/meme2.png", question: "Why was the computer cold?", answer: "It left its Windows open!" },
  { img: "memes/meme3.png", question: "Why did the developer go broke?", answer: "Because he used up all his cache!" },
  { img: "memes/meme4.png", question: "Why did the computer keep sneezing?", answer: "It had a bad case of the cookies!" },
  { img: "memes/meme5.png", question: "Why do Java developers wear glasses?", answer: "Because they don't C#!" },
  { img: "memes/meme6.png", question: "How many programmers does it take to change a lightbulb?", answer: "None, that's a hardware problem!" },
  { img: "memes/meme7.png", question: "Why did the developer get stuck in the shower?", answer: "They read the shampoo bottle: Lather, Rinse, Repeat." },
  { img: "memes/meme8.png", question: "Why was the function sad?", answer: "Because it didn't return anything." },
  { img: "memes/meme9.png", question: "Why do programmers hate spaces?", answer: "Because they prefer tabs." },
  { img: "memes/meme10.png", question: "Why did the mobile phone wear glasses?", answer: "Because it lost its contacts!" }
];

// ---- Main Logic ----
let score = 0;
let cur = 0;

const memeImg = document.getElementById('meme-img');
const memeQuestion = document.getElementById('meme-question');
const userAnswer = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreboard = document.getElementById('score');
const total = document.getElementById('total');
const nextBtn = document.getElementById('next-btn');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

total.textContent = memes.length;

// show first meme
loadMeme();

function loadMeme() {
  memeImg.src = memes[cur].img;
  memeQuestion.textContent = memes[cur].question;
  userAnswer.value = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";
  submitBtn.disabled = false;
}

// answer check
submitBtn.onclick = () => {
  const ans = userAnswer.value.trim().toLowerCase();
  const correct = memes[cur].answer.toLowerCase();

  if (ans && correct.includes(ans)) {
    score++;
    scoreboard.textContent = score;
    feedback.innerHTML = "<span style='color:green;'>Correct! 😎</span>";
    correctSound.play();
    submitBtn.disabled = true;
    nextBtn.style.display = 'inline-block';
  } else {
    feedback.innerHTML = "<span style='color:#e52e71;'>Try again! 😅</span>";
    wrongSound.play();
  }
};

// next meme
nextBtn.onclick = () => {
  cur++;
  if (cur >= memes.length) {
    memeArea.innerHTML = "<h2>Game Over!</h2><p>Your Score: " + score + " / " + memes.length + "</p>";
    feedback.textContent = "";
    userAnswer.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }
  loadMeme();
};

// Enter key submits
userAnswer.addEventListener("keyup", (e) => {
  if (e.key === "Enter") submitBtn.click();
});
