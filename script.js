const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

/* 
if 
good & cheap + fast - cheap
good & fast + cheap - good
cheap & fast + good - fast
*/

good.addEventListener('click', () => {
  if ( cheap.checked && fast.checked ) {
    fast.checked = false;
  }
})

cheap.addEventListener('click', () => {
  if ( good.checked && fast.checked ) {
    good.checked = false;
  }
})

fast.addEventListener('click', () => {
  if ( good.checked && cheap.checked ) {
    cheap.checked = false;
  }
})