const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(array) {
    const answer = array.find(array => array.result === "W")
    console.log(answer)
    if (answer === undefined) {
    console.log("didn't work")
        return undefined;
    
     } else {
        return answer.year
    }
}

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

  
//   function superbowlWin(record) {
//     const found = record.find(record => record.result === 'W');
//     console.log(found);
//     if (found === undefined) {
//       return undefined;
//     } else {
//       return found.year;
//     }
//   }
