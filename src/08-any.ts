(()=>{
  let myDynamicVar:any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  // do not use :any !

  myDynamicVar = 'Hello';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 12.23;
  const rta2 =(<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
