import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderComponent,
  LocalComponent,
  NavComponent,
  ShoppingCartComponent,
} from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { coffee } = useContext(CoffeeContext)

  const coffeeShoppingCart = coffee.filter(
    (el) => el.shoppingCart === true,
  ).length

  return (
    <HeaderComponent>
      <Link to="/">
        <img src="/logo-coffee-delivery.svg" alt="" />
      </Link>

      <NavComponent>
        <LocalComponent>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocalComponent>

        <Link to={coffeeShoppingCart > 0 ? '/checkout' : '/'}>
          <ShoppingCartComponent notification={coffeeShoppingCart}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartComponent>
        </Link>
      </NavComponent>
    </HeaderComponent>
  )
}
