import { Form } from './components/Form'
import { Payment } from './components/Payment'
import { ShoppingCart } from './components/ShoppingCart'
import { CheckoutComponent, ContentComponent } from './styles'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext } from 'react'
import { OrderContext } from '@/contexts/OrderContext'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '@/contexts/CoffeeContext'

export const formCheckoutSchema = z.object({
  cep: z.string().min(8).max(8),
  street: z.string().min(1),
  number: z.coerce.number().min(1),
  complement: z.string().optional(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2).max(2).toUpperCase(),
  paymentMethod: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']),
})

export type FormCheckoutSchema = z.infer<typeof formCheckoutSchema>

export function Checkout() {
  const methods = useForm<FormCheckoutSchema>({
    resolver: zodResolver(formCheckoutSchema),
  })

  const { CreateNewOrder } = useContext(OrderContext)
  const { coffeeCleanShoppingCart } = useContext(CoffeeContext)

  const navigate = useNavigate()

  function handleFormSubmit({
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
    paymentMethod,
  }: FormCheckoutSchema) {
    CreateNewOrder({
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
      paymentMethod,
    })
    coffeeCleanShoppingCart()

    navigate('/thanks')
  }

  return (
    <FormProvider {...methods}>
      <CheckoutComponent>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <ContentComponent>
            <h2>Complete seu pedido</h2>
            <Form />
            <Payment />
          </ContentComponent>

          <ContentComponent>
            <h2>Cafés selecionados</h2>
            <ShoppingCart />
          </ContentComponent>
        </form>
      </CheckoutComponent>
    </FormProvider>
  )
}
