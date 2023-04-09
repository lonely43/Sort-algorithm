function Sort(array){
   for(let i = 0; i < array.length; i++)
   {
      let min = i;
      for(let x = i+1; x < array.length; x++)
      {
         if(array[min] > array[x])
         {
            min = x
         }
      }
      let tmp = array[i]
      array[i] = array[min]
      array[min] = tmp
   }
   return array
}

console.log(Sort([0,-26,10,99,0,4]))
