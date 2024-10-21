import { produce } from "immer"

type OrderPaymentMethod = 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'

export interface Order {
  cep: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: OrderPaymentMethod,
}

interface OrderState {
  order?: Order
}

export enum ActionTypes {
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
}

export interface OrderAction {
  type: ActionTypes
  payload: { 
    data: Order
  }
}

export function OrderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.data
      })
    default:
      return state
  }
} 