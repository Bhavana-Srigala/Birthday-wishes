function showWish(option) {

  let wish = "";

  if (option === 1) {
    wish = "😚💋I wish uh will always be with me forever💞🫂";
  }
  else if (option === 2) {
    wish = "😘💖Wishing you happiness , success and lots of beautiful moments this year with me😁🩷";
  }
  else if (option === 3) {
    wish = "💕✨May all ur dreams come true , Because uhh deserve the best🥰💋";
  }

  const box = document.getElementById("wishBox");

  box.classList.remove("pop");
  void box.offsetWidth;
  box.classList.add("pop");

  box.innerText = wish;
}


/* Falling hearts effect */

function confettiEffect() {

  const hearts = ["🩷","🩵"];

  for (let i = 0; i < 25; i++) {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    confetti.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

}


/* Background floating hearts */

function backgroundHearts() {

  const hearts = ["🩷","🩵"];

  setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("bg-heart");

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    },12000);

  },800);

}

backgroundHearts();


/* Celebrate button */

function celebrate() {

  alert("I Love Youuu Kannaluuu 🤍🎀");

  confettiEffect();

  const box = document.getElementById("wishBox");

  box.classList.remove("pop");

  void box.offsetWidth;

  box.classList.add("pop");

  box.innerText =
  "I feel so blessed to have a person like you in my life, I Love uhhh chooo muchh I'm always be with uhh 🤗💘✨";

}
