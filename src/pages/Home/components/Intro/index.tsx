import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  ContentComponent,
  IntroComponent,
  ListComponent,
  TextComponent,
} from './styles'
import { ItemList } from '../../../../components/ItemList'

export function Intro() {
  return (
    <IntroComponent>
      <ContentComponent>
        <TextComponent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextComponent>
        <ListComponent>
          <ItemList
            icon={{
              content: <ShoppingCart size={16} weight="fill" />,
              background: 'yellowDark',
            }}
            text="Compra simples e segura"
          />

          <ItemList
            icon={{
              content: <Package size={16} weight="fill" />,
              background: 'text',
            }}
            text="Embalagem mantém o café intacto"
          />

          <ItemList
            icon={{
              content: <Timer size={16} weight="fill" />,
              background: 'yellow',
            }}
            text="Entrega rápida e rastreada"
          />

          <ItemList
            icon={{
              content: <Coffee size={16} weight="fill" />,
              background: 'purple',
            }}
            text="O café chega fresquinho até você"
          />
        </ListComponent>
      </ContentComponent>
      <img src="intro-coffee-delivery.svg" alt="" />
    </IntroComponent>
  )
}
