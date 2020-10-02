import { products } from '../products/products'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'

const initState = {
    addedItems: [],
    total: 0,
    items: [
        ...products
    ]
}

const cartReducer = (state = initState, action) => {
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
     
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
         
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }    
  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}
if(action.type=== ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUB_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}
return state
}

export default cartReducer;