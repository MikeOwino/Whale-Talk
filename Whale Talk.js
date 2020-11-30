let input = 'Next, you want to double the letter u, so you must mimic the code from the last step. Re-create the if statement, but modify it so it pushes the letter u a second time.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i ++){

console.log('i is '+ i);

for(let j = 0; j < vowels.length; j++ ){
  if(input[i] === vowels[j]){ 
     if(input[i] === 'e'){
         resultArray.push('ee')
     }
      else if(input[i] === 'u'){
      resultArray.push('uu');  
      }
      else {
         resultArray.push(input[i]);        }
    }
  }
}

console.log(resultArray);
console.log(resultArray.join('').toUpperCase());
