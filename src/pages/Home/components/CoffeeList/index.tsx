import { useContext } from 'react'
import { ItemCoffeeList } from './components/ItemCoffeeList'
import { CoffeeListComponent } from './styles'
import { CoffeeContext } from '@/contexts/CoffeeContext'

export function CoffeeList() {
  const { coffee } = useContext(CoffeeContext)

  return (
    <CoffeeListComponent>
      <h2>Nossos cafés</h2>
      <div>
        {coffee.map((coffee) => {
          return (
            <ItemCoffeeList
              key={coffee.id}
              id={coffee.id}
              img={coffee.img}
              category={coffee.category}
              title={coffee.title}
              desc={coffee.desc}
              price={coffee.price}
            />
          )
        })}
      </div>
    </CoffeeListComponent>
  )
}
