/* import { Coffee } from './components/Coffee' */
import { useContext } from 'react'
import { InfoComponent, ShoppingCartComponent } from './styles'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import { Coffee } from './components/Coffee'

export function ShoppingCart() {
  const { coffee } = useContext(CoffeeContext)

  const coffeeShoppingCart = coffee.filter((el) => el.shoppingCart === true)
  const totalPrice = coffeeShoppingCart.reduce((result, item) => {
    return result + item.price * item.quantity
  }, 0)

  return (
    <ShoppingCartComponent>
      {coffeeShoppingCart.map((coffee) => {
        return (
          <Coffee
            key={coffee.id}
            id={coffee.id}
            img={coffee.img}
            title={coffee.title}
            price={coffee.price}
            quantity={coffee.quantity}
          />
        )
      })}

      <InfoComponent>
        <div>
          <p>Total de itens</p>
          <span>
            R${' '}
            {totalPrice.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </span>
          <p>Entrega</p>
          <span>R$ 3,50</span>
          <h3>Total</h3>
          <h3>
            R${' '}
            {(totalPrice + 3.5).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
        <button type="submit">Confirmar Pedido</button>
      </InfoComponent>
    </ShoppingCartComponent>
  )
}
