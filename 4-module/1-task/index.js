function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  const collection = friends.map((friend) => `<li>${friend.firstName} ${friend.lastName}</li>`);
  ul.innerHTML = collection.join('');

  return ul;
}
