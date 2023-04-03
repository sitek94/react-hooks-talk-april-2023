import {useState} from 'react'

export function List({
  title,
  items,
}: {
  title: string
  items: {id: string; name: string}[]
}) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  )
}

export function ErrorMessage() {
  return (
    <div role="alert">
      <p>Something went wrong.</p>
    </div>
  )
}

export function LoadingSpinner({title}: {title?: string}) {
  return (
    <div role="status">
      <p>{title || 'Loading...'}</p>
    </div>
  )
}

export function NewItemForm({
  buttonText,
  onSubmit,
  placeholder,
  isLoading,
}: {
  buttonText: string
  onSubmit: (value: string) => void
  placeholder: string
  isLoading?: boolean
}) {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <input
        disabled={isLoading}
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder={placeholder}
      />
      <button disabled={isLoading} type="submit">
        {isLoading ? 'Loading...' : buttonText}
      </button>
    </form>
  )
}
