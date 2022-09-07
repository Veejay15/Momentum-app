let quotes = [
  "Imagination is more important than knowledge.",
  "Tell Me and I Forget; Teach Me and I May Remember; Involve Me and I Learn.",
  "We cannot solve our problems with the same thinking we used when we created them.",
  "The true sign of intelligence is not knowledge but imagination.",
  "If you can't explain it to a six year old, you don't understand it yourself.",
  "It is not that I'm so smart. But I stay with the questions much longer.",
  "Success is never permanent, and failure is never final.",
  "You never fail until you stop trying."
]


const quoteElement = document.querySelector('#quote');
const quoteButton = document.querySelector('.add-quote button');
const quoteInput = document.querySelector('.add-quote input');
const select = document.createElement('div');

select.classList.add("select-quotes")

function showQuoteInput() {
  quoteInput.classList.toggle('hide');
}


function addQuote(event) {
  if (event.code === "Enter") {
    quotes.push(quoteInput.value);
    select.textContent = `"${quoteInput.value}"`;
    select.selectedIndex = select.children.length - 1;
    quoteInput.classList.add('hide');
  }
}

function showQuotes() {
  let randomNumber = Math.round(Math.random() * (quotes.length - 1));
  quotes.forEach(quote => {
    const option = document.createElement('option');
    select.textContent = `"${quotes[randomNumber]}"`;
  })
  select.selectedIndex = randomNumber
  quoteElement.prepend(select);

}

function quoteButtonEvent() {
  createEventListener(quoteButton, 'click', showQuoteInput);
}

function quoteInputEvent() {
  createEventListener(quoteInput, 'keyup', addQuote);
}

function createEventListener(element, event, func) {
  element.addEventListener(event, func);
}


showQuotes();
quoteButtonEvent();
quoteInputEvent();