// javascriptings:
/// 2026 -> 0xSakCodes :)

const mascot = document.querySelector(".mascot");
const cards = document.querySelector('.cards');
const fakeWin = document.getElementById('fakeWin');
const realWin = document.getElementById('realWin');

let escaped = false;

// card clicks:
document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('click', () => {
    document.body.classList.add('shake');

    setTimeout(() => document.body.classList.remove('shake'), 300);
    spawnConfetti();
  });
});

// main flow:
mascot.addEventListener('click',()=>{
  if(escaped) return;
  escaped=true;

  fakeWin.style.display='flex';
  for(let i=0;i<40;i++) spawnConfetti();
  setTimeout(()=>{
    fakeWin.innerHTML = `<div class="big-text">WAIT— NO NO NO 😵‍💫</div>`;
    document.body.classList.add('shake');
    setTimeout(()=>{
      document.body.classList.remove('shake');
      fakeWin.style.display='none';
      mascot.style.visibility='hidden';
      cards.style.visibility='hidden';
      realWin.style.display='flex';

      setTimeout(()=>realWin.classList.add('show'),50);
      for(let i=0;i<80;i++) spawnConfetti();
      for(let i=0;i<40;i++) spawnKitty();
      for(let i=0;i<30;i++) spawnStar();
      
    }, 1200);
  }, 1500);
});

// confetti
function spawnConfetti() {
  const c = document.createElement('div');
  c.className = 'confetti';
  c.style.left = Math.random() * window.innerWidth + 'px';
  c.style.top = Math.random() * window.innerHeight + 'px';
  c.style.background = `hsl(${Math.random() * 360}, 70%,60%)`;
  document.body.appendChild(c);

  const dx =(Math.random() - 0.5 ) * 200;
  const dy =(Math.random() - 0.5 ) * 200;

  c.animate([
    {transform:`translate(0,0)`},
    {transform:`translate(${dx}px,${dy}px)`}
  ],{duration:900});
  setTimeout(() => c.remove(), 900);
};

/* spawn kitties :> */
function spawnKitty() {
  const k = document.createElement('div');
  k.className = 'kitty';
  k.innerText = ['😺','😼','😻','🐾'][Math.floor(Math.random() * 4];
  k.style.left = Math.random() * window.innerWidth + 'px';
  k.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(k);
  setTimeout(() => k.remove(), 5000);
}

setInterval(spawnKitty, 1200);
