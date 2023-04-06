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