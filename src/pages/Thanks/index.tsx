import { CurrencyDollarSimple, MapPin, Timer } from '@phosphor-icons/react'
import {
  ContentComponent,
  InfoComponent,
  TextComponent,
  ThanksComponent,
} from './styles'
import { ItemList } from '@/components/ItemList'
import { useContext } from 'react'
import { OrderContext } from '@/contexts/OrderContext'

export function Thanks() {
  const { order } = useContext(OrderContext)

  return (
    <ThanksComponent>
      <ContentComponent>
        <TextComponent>
          <h1>Uhu! Pedido confirmado</h1>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </TextComponent>
        <InfoComponent>
          <ItemList
            icon={{
              content: <MapPin size={16} weight="fill" />,
              background: 'purple',
            }}
            text={`Entrega em <b>${order?.street}, ${order?.number}</b> <br /> ${order?.district} - ${order?.city}, ${order?.state}`}
          />
          <ItemList
            icon={{
              content: <Timer size={16} weight="fill" />,
              background: 'yellow',
            }}
            text="Previsão de entrega <br /> <b>20 min - 30 min</b>"
          />
          <ItemList
            icon={{
              content: <CurrencyDollarSimple size={16} weight="fill" />,
              background: 'yellowDark',
            }}
            text={`Pagamento na entrega <br /> <b>${order?.paymentMethod}</b>`}
          />
        </InfoComponent>
      </ContentComponent>
      <img src="/thanks-coffee-delivery.svg" alt="" />
    </ThanksComponent>
  )
}
