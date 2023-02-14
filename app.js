let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

pronoun.forEach((word1) => {
  adj.forEach((word2) => {
    noun.forEach((word3) => {
      console.log(`${word1}${word2}${word3}.com`);
    });
  });
});
