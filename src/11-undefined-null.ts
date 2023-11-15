(()=>{
  let myNumber: number | null;
  let myString: string | undefined;

  myNumber = null;
  myNumber = 12;

  myString = undefined;
  myString = 'string';

  // function hi(name: string | null){
  //   let hello = 'hello ';
  //   if(name){
  //     hello += name;
  //   } else{
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // };

  // hi('emapeire');
  // hi(null);

  function hiV2(name: string | null){
    let hello = 'hello ';
    hello += name?.toLowerCase() ?? 'nobody';

    console.log(hello);
  };

  hiV2('emapeire');
  hiV2(null);
})();
