const bigSq = document.querySelector('.big_square');

for( let i = 1; i <= 100; i++){
  const insertSq = functionInsertSq ();
  bigSq.append(insertSq);
};

//FUNCTION

function functionInsertSq (){
  const sq = document.createElement('div');
  sq.className= 'small_square';

  return sq;
}

function reset (){
  bigSq.innerHTML= ' ';
};