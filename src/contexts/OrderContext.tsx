import { ActionTypes, Order, OrderReducer } from '@/reducers/order'
import { createContext, ReactNode, useReducer } from 'react'

export interface OrderContextProps {
  order?: Order
  CreateNewOrder: (data: Order) => void
}

export const OrderContext = createContext({} as OrderContextProps)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(OrderReducer, {})

  function CreateNewOrder({
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
    paymentMethod,
  }: Order) {
    dispatch({
      type: ActionTypes.CREATE_NEW_ORDER,
      payload: {
        data: {
          cep,
          street,
          number,
          complement,
          district,
          city,
          state,
          paymentMethod,
        },
      },
    })
  }

  const { order } = orderState

  return (
    <OrderContext.Provider value={{ order, CreateNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
