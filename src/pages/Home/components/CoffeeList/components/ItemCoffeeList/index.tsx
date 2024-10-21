import { IncreaseDecreaseInput } from '@/components/IncreaseDecreaseInput'
import {
  ContentComponent,
  ImageAndCategoryComponent,
  ItemCoffeeListComponent,
  ShoppingComponent,
  TextComponent,
} from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'

export interface ItemCoffeeListProps {
  id: number
  img: string
  category: string[]
  title: string
  desc: string
  price: number
}

export function ItemCoffeeList({
  id,
  img,
  category,
  title,
  desc,
  price,
}: ItemCoffeeListProps) {
  const { coffeeAddShoppingCart } = useContext(CoffeeContext)

  function handleAddCoffeeShoppingCart() {
    coffeeAddShoppingCart(id)
  }

  return (
    <ItemCoffeeListComponent>
      <ContentComponent>
        <ImageAndCategoryComponent>
          <img src={img} alt="" />
          <div>
            {category.map((el) => {
              return <span key={el}>{el}</span>
            })}
          </div>
        </ImageAndCategoryComponent>

        <TextComponent>
          <h3>{title}</h3>
          <p>{desc}</p>
        </TextComponent>
      </ContentComponent>

      <ShoppingComponent>
        <h2>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
        <IncreaseDecreaseInput coffeeId={id} />
        <button onClick={handleAddCoffeeShoppingCart} type="button">
          <ShoppingCartSimple size={20} weight="fill" />
        </button>
      </ShoppingComponent>
    </ItemCoffeeListComponent>
  )
}
