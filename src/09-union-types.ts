(()=>{
  let userId: string | number;
  userId = 12;
  userId = 'hello';

  function greeting(myText: string | number){
    typeof myText === 'string' ? console.log(`string ${myText.toUpperCase()}`) :
    console.log(`number ${myText.toFixed(1)}`);
  }
  greeting('hello');
  greeting(12.24);
})();
