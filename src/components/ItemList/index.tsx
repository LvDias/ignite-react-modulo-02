import { ReactNode } from 'react'
import { ItemListComponent } from './styles'
interface ItemListProps {
  icon: {
    content: ReactNode
    background: string
  }
  text: string
}

export function ItemList({
  icon: { content, background },
  text,
}: ItemListProps) {
  return (
    <ItemListComponent background={background}>
      <div>{content}</div>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </ItemListComponent>
  )
}
