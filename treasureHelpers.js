const images = {
  treasure: '🎁',
  snow: '❄️',
  snowman: '☃️',
  bell: '🔔',
};

// check if the current cell is a treasure and display the treasure
const isTreasure = (e) => {
  if (e.target.matches('.treasure')) {
    e.target.innerHTML = images.treasure;
    return true;
  }
};

// check if the current cell is a tree and change it to a snowman
function isTree(event) {
  if (event.target.className === 'tree' && event.target.innerHTML === '🎄') {
    event.target.innerHTML = images.snowman;
    return true;
  }
}

// function to make announcement when the treasure is found
function makeAnnouncement(counter) {
  const announcement = document.body.appendChild(document.createElement('div'));

  announcement.innerText = `Bravo!! You found the treasure after ${counter} steps`;
  announcement.style.fontSize = '2rem';
}

export { isTreasure, isTree, makeAnnouncement };
