
const bigSq = document.querySelector('.big_square');

for( let i = 1; i <= 100; i++){
  const insertSq = functionInsertSq (i);
  bigSq.append(insertSq);
};

//FUNCTION

function functionInsertSq (numero){
  const sq = document.createElement('div');
  sq.className = 'small_square';
  

  sq.addEventListener('click', function(){

    this.innerHTML = numero;
    this.classList.add('choosed');

  });

  return sq;
};

function reset (){
  bigSq.innerHTML= ' ';
};