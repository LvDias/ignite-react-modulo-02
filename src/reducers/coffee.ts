import { produce } from 'immer'

export enum ActionTypes {
  INSERT_COFFEE_SHOPPING_CART = 'INSERT_COFFEE_SHOPPING_CART',
  ADD_SHOPPING_CART = 'ADD_SHOPPING_CART',
  REMOVE_SHOPPING_CART = 'REMOVE_SHOPPING_CART',
  CLEAN_SHOPPING_CART = 'CLEAN_SHOPPING_CART'
}

export interface CoffeeList {
  id: number
  img: string
  category: string[]
  title: string
  desc: string
  price: number
  quantity: number
  shoppingCart: boolean
}

interface CoffeeState {
  coffee: CoffeeList[]
}

export function CoffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.INSERT_COFFEE_SHOPPING_CART:
      return produce(state, (draft) => {
        const { id, quantity } = action.payload.data

        const coffeeIndex = state.coffee.findIndex((el) => el.id === id)

        draft.coffee[coffeeIndex].quantity = quantity
      })
    case ActionTypes.ADD_SHOPPING_CART:
      return produce(state, (draft) => {
        const { id, shoppingCart } = action.payload.data

        const coffeeIndex = state.coffee.findIndex((el) => el.id === id)
        draft.coffee[coffeeIndex].shoppingCart = shoppingCart
      })
    case ActionTypes.REMOVE_SHOPPING_CART:
      return produce(state, (draft) => {
        const { id, shoppingCart } = action.payload.data

        const coffeeIndex = state.coffee.findIndex((el) => el.id === id)
        draft.coffee[coffeeIndex].quantity = 0
        draft.coffee[coffeeIndex].shoppingCart = shoppingCart
      })
      case ActionTypes.CLEAN_SHOPPING_CART:
        return produce(state, (draft) => {
          for(let coffee of draft.coffee) {
            coffee.quantity = 0
            coffee.shoppingCart = false
          }
        })
    default:
      return state
  }
}
