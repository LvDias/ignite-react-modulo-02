import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultTemplate } from './templates/default'
import { Checkout } from './pages/Checkout'
import { Thanks } from './pages/Thanks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />
      </Route>
    </Routes>
  )
}
