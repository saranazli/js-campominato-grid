
const bigSq = document.querySelector('.big_square');
const btnReset = document.querySelector('.reset');

for( let i = 1; i <= 100; i++){
  const insertSq = functionInsertSq (i);
  bigSq.append(insertSq);
};


btnReset.addEventListener('click', function(){
  reset ();
});

//FUNCTION


// funzione per fare comparire i quadratini colorati e il numero
function functionInsertSq (numero){

  const sq = document.createElement('div');
  sq.className = 'small_square';
  

  sq.addEventListener('click', function(){

    if ( this.innerHTML ===  ' ' ) {
      this.innerHTML = numero;
      this.classList.add('choosed');
    } else {
      this.innerHTML = ' ';
      this.classList.remove('choosed');
    };
    
  });

  return sq;
};

function reset (){
  bigSq.innerHTML= ' ';
};