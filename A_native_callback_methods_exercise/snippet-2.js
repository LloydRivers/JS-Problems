let friends = ['nader', 'matty', 'jennifer', 'lora'];

let chosen = friends[0]; // nader

friends.forEach(function (friend) {
  if (friend.length > chosen.length) {
    chosen = friend;
  }
});

console.log(chosen); // jennifer