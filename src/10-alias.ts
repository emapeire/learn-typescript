(()=>{
  type UserID = 1 | 2 | 3 | 4;
  let userId: UserID;
  userId = 1;
  userId = 2;
  userId = 3;
  userId = 4;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  console.log(userId, shirtSize);
})();
