const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

let obj = voters.reduce(
  (res, data) => {
    if (data.age <= 20 && data.voted === true) {
      res.numYoungVotes += 1;
    }
    if (data.age <= 20) {
      res.numYoungPeople += 1;
    }
    if (data.age > 20 && data.age < 45 && data.voted === true) {
      res.numMidVotesPeople += 1;
    }
    if (data.age > 20 && data.age < 45) {
      res.numMidsPeople += 1;
    }
    if (data.age > 45 && data.voted === true) {
      res.numOldVotesPeople += 1;
    }
    if (data.age > 45) {
      res.numOldsPeople += 1;
    }
    return res;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(obj);

