import { MapPin } from '@phosphor-icons/react'
import {
  FormComponent,
  FormInputComponent,
  InputComponent,
  TextComponent,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function Form() {
  const { register } = useFormContext()

  return (
    <FormComponent>
      <TextComponent>
        <MapPin size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TextComponent>
      <FormInputComponent>
        <InputComponent
          columnstart={1}
          columnend={2}
          type="text"
          placeholder="CEP"
          {...register('cep', { required: true })}
        />
        <InputComponent
          columnstart={1}
          columnend={4}
          type="text"
          placeholder="Rua"
          {...register('street', { required: true })}
        />
        <InputComponent
          columnstart={1}
          columnend={2}
          type="text"
          placeholder="Número"
          {...register('number', { required: true })}
        />
        <InputComponent
          columnstart={2}
          columnend={4}
          type="text"
          placeholder="Complemento"
          {...register('complement', { required: false })}
        />
        <InputComponent
          columnstart={1}
          columnend={2}
          type="text"
          placeholder="Bairro"
          {...register('district', { required: true })}
        />
        <InputComponent
          columnstart={2}
          columnend={3}
          type="text"
          placeholder="Cidade"
          {...register('city', { required: true })}
        />
        <InputComponent
          columnstart={3}
          columnend={4}
          type="text"
          placeholder="UF"
          {...register('state', { required: true })}
        />
      </FormInputComponent>
    </FormComponent>
  )
}
