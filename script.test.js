const wordGuessed = require("./script.js");

// test("De game is gestart", () => {
//   const output = wordpicker();

//   expect(output).not.toEqual("sinaasappel");
// });

// test("De letter komt voor in het woord", () => {
//   const word = "lamp";
//   const letter = "a";
//   const output = checkIfWordContainsLetter(word, letter);
//   expect(output).toBeTruthy();
// });

// test("Updaten van het aantal pogingen van de gebruiker", () => {
//     const
//     const output =
// })
test("Het woord is geraden", () => {
  const woord = ["v", "i", "s"];
  const letters = ["v", "i", "s"];
  expect(wordGuessed(woord, letters)).toBeTruthy();
});
