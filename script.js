// ============================================================
// TUTORIAL 4: JAVASCRIPT FUNDAMENTALS
// RSVP card — wire up the behavior
// ============================================================
//
// BEFORE YOU START: open the browser console (F12 → Console)
// You'll use it to check your work throughout.
//
// Run this any time to see the current state of your variables:
//   checkStatus()
//
// ============================================================


// ── 1. DATA: what are we tracking? ──────────────────────────
//
// These two variables represent the user's choice.
// Only one can be true at a time.
// (Later, think about whether you need both.)

let isGoing    = false;
let isNotGoing = false;


// ── 2. ELEMENTS: find everything we'll need ─────────────────
//
// We grab all the elements once, at the top.
// Then we use the variables below instead of querySelector every time.

const nameInput    = document.querySelector('#name-input');
const guestInput   = document.querySelector('#guest-input');
const guestField   = document.querySelector('#guest-field');

// Try getting the yes, no, confirmation and regret elements from the html.
const btnYes       = document.querySelector('#btn-yes');
const btnNo        = document.querySelector('#btn-no');

btnYes.disabled = true;
// const confirmation = ;
// const regret       = ;


// ── 3. HELPERS: small functions that do one thing ───────────
//
// getName() returns the name from the input, or 'Someone' if it's empty.
// .trim() removes whitespace from both ends of a string.

const getName = () => {
  const raw = nameInput.value.trim();
  return raw || 'Someone';
  // What does || do here? If raw is an empty string (falsy), return 'Someone'.
};

// getGuests() returns the guest count as a NUMBER.
// Try: console.log(typeof guestInput.value) — what do you see?
// Number() converts the string "3" to the number 3.

const getGuests = () => Number(guestInput.value);
// console.log(String(getGuests)); 
// btnYes.disabled = false; 

// if (nameInput.value.trim() === ""){
//   btnYes.disabled = true; 
// } else{
//   btnYes.disabled = false;
// }

// ── 4. TASK 1 & 2: wire up the YES button ───────────────────
//
// When the user clicks Going:
//   - set isGoing = true, isNotGoing = false
//   - add 'active' class to btnYes, remove it from btnNo
//   - remove 'hidden' from guestField (show it)
//   - remove 'hidden' from confirmation, add 'hidden' to regret
//   - call updateConfirmation() (written below in Task 3)

btnYes.addEventListener('click', () => {

  // YOUR CODE HERE
  if (isGoing === false){
    isGoing = true;
  } 
   if (isNotGoing === true){
    isNotGoing = false;
  } 
  console.log(isGoing)
  console.log(isNotGoing)
  btnYes.classList.add('active');
  btnNo.classList.remove('active');
  guestField.classList.remove('hidden');
  confirmation.classList.remove('hidden');
  regret.classList.add('hidden');
  updateConfirmation()

});


// When the user clicks Can't make it:
//   - set isGoing = false, isNotGoing = true done
//   - add 'active' class to btnNo, remove it from btnYes done 
//   - add 'hidden' to guestField (hide it)
//   - add 'hidden' to confirmation, remove 'hidden' from regret
//   - set regret.textContent using a template literal with getName()

btnNo.addEventListener('click', () => {

  // YOUR CODE HERE
  isGoing = false;
  isNotGoing = true; 
  btnYes.classList.remove('active');
  btnNo.classList.add('active');
  guestField.classList.add('hidden');
  confirmation.classList.add('hidden');
  regret.classList.remove('hidden');
  regret.textContent = `${getName()} can't make it. Next time!`; 


  // console.log(isGoing)
  // console.log(isNotGoing)

});


// ── 5. TASK 3 & 4: build the confirmation message ───────────
//
// updateConfirmation() assembles the message from name + guest count.
//
// Template literal syntax:  `${expression} rest of string`
//
// The guest count needs a conditional:
//   0 guests → "flying solo."
//   1 guest  → "bringing 1 guest."
//   2+ guests → "bringing 3 guests."
//
// Hint: write the conditional first, store the result in a variable,
// then use that variable in the template literal.

const updateConfirmation = () => {
  const guests = Number(getGuests()); 
  // console.log("why" + guests)
  const numGuest = {
    0 : "flying solo.",
    1 : "bringing 1 guest.", 
    2 : "bringing 3 guests."
  }
  text1 = ``; 

  if (guests === 0){
    text1 = `flying solo.`; 
  }
  else if (guests === 1){
    text1 = `is bringing ${guests} guest.`; 
  }
   else{
    text1 = `is bringing ${guests} guests.`; 
  }
  confirmation.textContent = `${getName()} is coming — ${text1}`; 


  // YOUR CODE HERE: build guestLine based on guests value


  // YOUR CODE HERE: set confirmation.textContent using a template literal
  // Example shape: `${getName()} is coming — ${guestLine}`

};


// ── 6. TASK 5: live updates ──────────────────────────────────
//
// Add 'input' event listeners to nameInput and guestInput.
// Each one should check whether the user has made a choice yet,
// and if so, call the right update function.
//
// Hint: use the isGoing and isNotGoing variables to check.

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === ''){
    btnYes.disabled = true; 
  } else{
    btnYes.disabled = false;
  }

  if (isGoing === true && isNotGoing === false){
    console.log(nameInput.value); 
    updateConfirmation();
  }
  else{
    // console.log("nah no name lol")
  }
  // YOUR CODE HERE
  // console.log(nameInput.value.trim() === null)


});

guestInput.addEventListener('input', () => {

  // YOUR CODE HERE
  if (isGoing === true && isNotGoing === false){
    //  getGuests(guestInput.value);
    console.log(guestInput.value);  
    //  const numberOfGuests = getGuests();
    updateConfirmation(); // update it here 
    
    // console.log("guests: ", numberOfGuests);  
    
  }
  else{
    console.log("nah")
  }



});


// ── DEBUGGING ────────────────────────────────────────────────
//
// Type checkStatus() in the browser console to see current variable values.

const checkStatus = () => {
  console.log('=== current state ===');
  console.log('isGoing:    ', isGoing);
  console.log('isNotGoing: ', isNotGoing);
  console.log('name:       ', nameInput.value);
  console.log('guests:     ', getGuests(), '(type:', typeof getGuests(), ')');
  console.log('raw value:  ', guestInput.value, '(type:', typeof guestInput.value, ')');
  console.log('====================');
};

// Type resetCard() in the browser console to clear everything and start over.

const resetCard = () => {
  isGoing    = false;
  isNotGoing = false;
  btnYes.disabled = true;

  nameInput.value  = '';
  guestInput.value = '0';

  btnYes.classList.remove('active');
  btnNo.classList.remove('active');

  guestField.classList.add('hidden');
  confirmation.classList.add('hidden');
  regret.classList.add('hidden');

  confirmation.textContent = '';
  regret.textContent       = '';

  console.log('Card reset.');
};