/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  if (name)
  {console.log("Hello "+name)}
  else {
    console.log("Hello")
  }
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  if(n%2 !==0){
    return true
  }
  else{
    return false
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  // Your code here
  if(isOdd(n)){
    return (n-1)/2
  }
  else{
    return n/2
  }
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n)){
    return n*n
  }
  else{
    return n*2
  }
}

/**
 * ageFromCivilID(civilID):
 * - receives a civilID as a STRING of the form <CYYMMDDXXXXX>
 *   where:
 *     - C is the century (1 = 18xx, 2 = 19xx, 3 = 20xx)
 *     - YY is the year (00 - 99)
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age of the civilID holder (rounded down to the nearest year)
 * - assume all civilIDs will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromCivilID(287050612345) -> 31
 *    ageFromCivilID(297111012345) -> 20
 */
function ageFromCivilID(civilID) {
  // Your code here
  var current=new Date()
  console.log(current)
  var year= current.getFullYear()
  var month=current.getMonth()+1
  console.log(month);
  var day=current.getDate()
  if(month<10){
    var all=`${year}0${month}${day}`
  }else{
    var all=`${year}${month}${day}`
  }
  console.log(all)
  let dob=0;
  let age=0;
  console.log(civilID[0])
  if(civilID[0]==='1'){
    dob=`18${civilID.slice(1,7)}`
    age=all-dob;
    age=age.toString().slice(0,3);
  }else if(civilID[0]==='2'){
    dob=`19${civilID.slice(1,7)}`
    age=all-dob;
    age=age.toString().slice(0,2);
  }else if(civilID[0]==='3'){
    dob=`20${civilID.slice(1,7)}`
    if(all-dob>=100000){
      age=all-dob;
      age=age.toString().slice(0,2);
    }else if(all-dob<100000 && all-dob>=10000){
      age=all-dob;
      age=age.toString().slice(0,1);
    }else{
      age=0;
    }
  }

  return +age
}

/**
 * canVoteInKuwait(civilID, isKuwaiti, isRoyal):
 * - receives a civilID as a STRING
 * - receives a boolean isKuwaiti
 * - receives a boolean isRoyal
 * - returns true if the person can vote, false otherwise:
 *   In Kuwait the conditions for voting are as follows:
 *    - Over 21
 *    - Is a Kuwaiti citizen
 *    - Is NOT a member of the royal family
 */
function canVoteInKuwait(civilID, isKuwaiti, isRoyal) {
  // Your code here
  if(ageFromCivilID(civilID)>21 && isKuwaiti && !isRoyal){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};
