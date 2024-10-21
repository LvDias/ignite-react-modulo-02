import { Minus, Plus } from '@phosphor-icons/react'
import { IncreaseDecreaseInputComponent } from './styles'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'

interface IncreaseDecreaseInputProps {
  coffeeId: number
}

export function IncreaseDecreaseInput({
  coffeeId,
}: IncreaseDecreaseInputProps) {
  const { coffee, coffeeInsertShoppingCart } = useContext(CoffeeContext)

  const coffeeShoppingCart = coffee.find((el) => el.id === coffeeId)

  const [quantity, setQuantity] = useState(
    coffeeShoppingCart ? coffeeShoppingCart.quantity : 0,
  )

  function increaseQuantity() {
    setQuantity((state) => {
      return state + 1
    })
  }

  function decreaseQuantity() {
    setQuantity((state) => {
      if (state > 0) {
        return state - 1
      } else {
        return state
      }
    })
  }

  useEffect(() => {
    coffeeInsertShoppingCart(coffeeId, quantity)
  }, [quantity, coffeeId, coffeeInsertShoppingCart])

  return (
    <IncreaseDecreaseInputComponent>
      <button type="button" onClick={decreaseQuantity}>
        <Minus size={14} />
      </button>
      <p>{coffeeShoppingCart ? coffeeShoppingCart.quantity : quantity}</p>
      <button type="button" onClick={increaseQuantity}>
        <Plus size={14} />
      </button>
    </IncreaseDecreaseInputComponent>
  )
}
