const checkIfWordContainsLetter = require("./script.js");

// test("De game is gestart", () => {
//   const output = wordpicker();

//   expect(output).not.toEqual("sinaasappel");
// });

test("De letter komt voor in het woord", () => {
  const word = "lamp";
  const letter = "a";
  const output = checkIfWordContainsLetter(word, letter);
  expect(output).toBeTruthy();
});

// test("Updaten van het aantal pogingen van de gebruiker", () => {
//     const
//     const output =
// })
