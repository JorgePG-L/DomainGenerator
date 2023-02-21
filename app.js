let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let end = [".com", ".es", ".net", ".org"];

pronoun.forEach((word1) => {
  adj.forEach((word2) => {
    noun.forEach((word3) => {
      end.forEach((word4) => {
      console.log(`${word1}${word2}${word3}${word4}`); 
    });
    });
  });
});
