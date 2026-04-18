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
