const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ]


document.addEventListener('click', function() {
    
    colPicker()
    document.querySelector('.container').style.background = vegCol ;
    document.querySelector('.heading').innerText = vegCol;
     vegCol = '#'
 })
 var vegCol = '#' ;
 function colPicker() {
     for(i = 0; i < 6; i++) {
         let im = Math.floor(Math.random() * 16)
         vegCol += col[im]
     }
     return vegCol
 }