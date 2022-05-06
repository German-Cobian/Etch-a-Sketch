const container = document.getElementById('container');
const btn = document.querySelector('button');

function main() {
    let num = prompt('What size grid (n * n) would you like to play with? Enter the number of squares per side for the new grid.');
    gridGen(num);
    btn.addEventListener('click', reset);
}
const gridGen = (num) => {
// The two container.style.setProperty code lines set the columns and the rows of the 
// grid in accordance to a number passed on to the function.   
    container.style.setProperty('--grid-columns', num);
    container.style.setProperty('--grid-rows', num);
    for (c = 0; c < num * num; c++) {
       let cell = document.createElement('div');
       cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
   });
        container.appendChild(cell).className = 'grid-cells'
    };
}
function reset() {
    location.reload();
}
main();

