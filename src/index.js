
// You should implement your task here.
module.exports = function towelSort (matrix) {
if(matrix === undefined){
  return [];
}
let res = [];
for(let i = 0; i<matrix.length; i++){
  if(i % 2 == 1){
   matrix[i].reverse();
  }
  res = [].concat(...matrix);
 
}
return res;
}