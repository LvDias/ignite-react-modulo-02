import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  OptionComponent,
  PaymentComponent,
  SelectComponent,
  TextComponent,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function Payment() {
  const { register } = useFormContext()

  return (
    <PaymentComponent>
      <TextComponent>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TextComponent>
      <SelectComponent>
        <OptionComponent
          type="radio"
          id="credit_card"
          value="Cartão de Crédito"
          {...register('paymentMethod')}
        />
        <label htmlFor="credit_card">
          <CreditCard size={16} />
          <h3>Cartão de Crédito</h3>
        </label>
        <OptionComponent
          type="radio"
          id="debit_card"
          value="Cartão de Débito"
          {...register('paymentMethod')}
        />
        <label htmlFor="debit_card">
          <Bank size={16} />
          <h3>Cartão de Débito</h3>
        </label>
        <OptionComponent
          type="radio"
          id="money"
          value="Dinheiro"
          {...register('paymentMethod')}
        />
        <label htmlFor="money">
          <Money size={16} />
          <h3>Dinheiro</h3>
        </label>
      </SelectComponent>
    </PaymentComponent>
  )
}
