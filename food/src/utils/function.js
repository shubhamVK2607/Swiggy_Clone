export function filterItems(arr , id)
{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1);
          break;
        }
      }

      return arr
    
}

export function removeDuplicates(arr)
{

   
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
      const key = JSON.stringify(arr[i]);
      if (obj[key] === undefined) {
        obj[key] = 1;
      } else {
        obj[key]++;
      }
    }
    
    const result = Object.keys(obj).map(key => {
      return { key: JSON.parse(key), value: obj[key] };
    });

    return result
    
}

export function restaurantFoodItem(temp)
{ 
    console.log("from function",temp)
    console.log("bta bhai",temp.cards[2].card.card.itemCards)

    for(let i=0;;i++)
    {    
    if(temp.cards[i].card.card.itemCards){
       return (temp.cards[i].card.card.itemCards)
    }
}
}

export function calculatePrice(cartItems)
{
  let sum=0
  for(let i=0;i<cartItems.length;i++)
  {
    sum=sum+(cartItems[i].price?cartItems[i].price:cartItems[i].defaultPrice)
  }
  console.log("summ",sum)
  return sum
}

export function AllRestaurant(jsonData)
{
   for(let i=0;i<jsonData.cards.length;i++)
   {
    if(jsonData.cards[i].cardType==='seeAllRestaurants')
    {
      return (jsonData.cards[i])
    }
   }
}