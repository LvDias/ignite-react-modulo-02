import { createContext, ReactNode, useReducer } from 'react'

import { ActionTypes, CoffeeList, CoffeeReducer } from '@/reducers/coffee'

const coffee = [
  {
    id: 1,
    img: '/cup/expresso.svg',
    category: ['Tradicional'],
    title: 'Expresso Tradicional',
    desc: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 2,
    img: '/cup/americano.svg',
    category: ['Tradicional'],
    title: 'Expresso Americano',
    desc: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 3,
    img: '/cup/expresso-cremoso.svg',
    category: ['Tradicional'],
    title: 'Expresso Cremoso',
    desc: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 4,
    img: '/cup/cafe-gelado.svg',
    category: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    desc: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 5,
    img: '/cup/expresso-cremoso.svg',
    category: ['Tradicional', 'Com Leite'],
    title: 'Café com Leite',
    desc: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 6,
    img: '/cup/latte.svg',
    category: ['Tradicional', 'Com Leite'],
    title: 'Latte',
    desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 7,
    img: '/cup/capuccino.svg',
    category: ['Tradicional', 'Com Leite'],
    title: 'Capuccino',
    desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 8,
    img: '/cup/macchiato.svg',
    category: ['Tradicional', 'Com Leite'],
    title: 'Macchiato',
    desc: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 9,
    img: '/cup/mochaccino.svg',
    category: ['Tradicional', 'Com Leite'],
    title: 'Mocaccino',
    desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 10,
    img: '/cup/chocolate-quente.svg',
    category: ['Especial', 'Com Leite'],
    title: 'Chocolate Quente',
    desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 11,
    img: '/cup/cubano.svg',
    category: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 12,
    img: '/cup/havaiano.svg',
    category: ['Especial'],
    title: 'Havaiano',
    desc: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 13,
    img: '/cup/arabe.svg',
    category: ['Especial'],
    title: 'Árabe',
    desc: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
  {
    id: 14,
    img: '/cup/irlandes.svg',
    category: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 0,
    shoppingCart: false,
  },
]

interface CoffeeContextProps {
  coffee: CoffeeList[]
  coffeeInsertShoppingCart: (id: number, quantity: number) => void
  coffeeAddShoppingCart: (id: number) => void
  coffeeRemoveShoppingCart: (id: number) => void
  coffeeCleanShoppingCart: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CoffeeReducer, {
    coffee,
  })

  function coffeeInsertShoppingCart(id: number, quantity: number) {
    const coffeeShoppingCart = {
      id,
      quantity,
      shoppingCart: false,
    }

    dispatch({
      type: ActionTypes.INSERT_COFFEE_SHOPPING_CART,
      payload: {
        data: coffeeShoppingCart,
      },
    })
  }

  function coffeeAddShoppingCart(id: number) {
    const coffeeShoppingCart = {
      id,
      shoppingCart: true,
    }

    dispatch({
      type: ActionTypes.ADD_SHOPPING_CART,
      payload: {
        data: coffeeShoppingCart,
      },
    })
  }

  function coffeeRemoveShoppingCart(id: number) {
    const coffeeShoppingCart = {
      id,
      shoppingCart: false,
    }

    dispatch({
      type: ActionTypes.ADD_SHOPPING_CART,
      payload: {
        data: coffeeShoppingCart,
      },
    })
  }

  function coffeeCleanShoppingCart() {
    dispatch({
      type: ActionTypes.CLEAN_SHOPPING_CART,
      payload: {
        data: {},
      },
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffee: coffeeState.coffee,
        coffeeInsertShoppingCart,
        coffeeAddShoppingCart,
        coffeeRemoveShoppingCart,
        coffeeCleanShoppingCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
