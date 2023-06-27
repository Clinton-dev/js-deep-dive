function handleLikes() {
  let count = 0;

  return function addLike() {
    count += 1;
    return count;
  };
}

const like = handleLikes();

console.log(like());
console.log(like());
console.log(like());
// console.log(like)
