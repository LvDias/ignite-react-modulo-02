import { IncreaseDecreaseInput } from '@/components/IncreaseDecreaseInput'
import { ButtonComponent, CoffeeComponent, InfoComponent } from './styles'
import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'

interface CoffeeProps {
  id: number
  img: string
  title: string
  price: number
  quantity: number
}

export function Coffee({ id, img, title, price, quantity }: CoffeeProps) {
  const { coffeeRemoveShoppingCart } = useContext(CoffeeContext)

  function handleRemoveCoffeeShopingCart() {
    coffeeRemoveShoppingCart(id)
  }

  return (
    <CoffeeComponent>
      <InfoComponent>
        <img src={img} alt="" />
        <div>
          <h3>{title}</h3>
          <div>
            <IncreaseDecreaseInput coffeeId={id} />
            <ButtonComponent onClick={handleRemoveCoffeeShopingCart}>
              <Trash size={16} />
              <h3>Remover</h3>
            </ButtonComponent>
          </div>
        </div>
      </InfoComponent>
      <h3>
        {(price * quantity).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </h3>
    </CoffeeComponent>
  )
}
