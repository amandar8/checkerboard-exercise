function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for (let i = 0; i < 81; i++) {
  let tile = document.createElement('div');
  let body = document.getElementsByTagName('body')[0];

  tile.style.width = '11.1%';
  tile.display = 'float';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';

  if (i % 2 === 0) {
    tile.style.background = getRandomColor();
  } else {
    tile.style.background = getRandomColor();
  }

  body.appendChild(tile);

}
let flash = prompt("Dance Party!? (Y/N)").toLowerCase();
if (flash === "y") {
    setInterval(buildGrid, 200, 90, "random");
}
else {
    let color = prompt("What colors would you like? (redAndBlack, random, or gradient)").toLowerCase();
    buildGrid(90, color);
}
