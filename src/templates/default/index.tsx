import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultThemeComponent } from './styles'

export function DefaultTemplate() {
  return (
    <DefaultThemeComponent>
      <Header />
      <Outlet />
    </DefaultThemeComponent>
  )
}
