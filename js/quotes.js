const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data))
    .catch((error) => console.log(error));
};

const loadQuote2 = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  blockQuote.innerText = quote.quote;
};

loadQuote();

const data = { result: [{ userName: { title: "Mr.", name: "sakib khan" } }] };
