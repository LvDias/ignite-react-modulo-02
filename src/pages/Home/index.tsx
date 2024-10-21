import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomeComponent } from './styles'

export function Home() {
  return (
    <HomeComponent>
      <Intro />
      <CoffeeList />
    </HomeComponent>
  )
}
