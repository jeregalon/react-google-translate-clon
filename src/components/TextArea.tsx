/* eslint-disable react/react-in-jsx-scope */
import type { FC } from "react"
import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

type Props =
  | { type: SectionType, loading?: undefined, onChange: (value: string) => void, value: string }
  | { type: SectionType, loading?: boolean, onChange: (value: string) => void, value: string }

const commonStyles = { border: 0, height: '150px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }
    
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}