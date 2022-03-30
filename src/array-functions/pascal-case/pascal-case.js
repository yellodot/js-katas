/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.

Example:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"

You can't use a loop!

Don't mutate the parameter.

*/

function pascalCase(string){
  let toUpper = string.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1, word.length));
  return toUpper.join('');
}


pascalCase("sO rAdicAL DuDe")