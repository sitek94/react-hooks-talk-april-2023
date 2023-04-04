import {ReactNode, useState} from 'react'
import clsx from 'clsx'

export function Layout({children}: {children: ReactNode}) {
  return <div className="p-4 prose grid grid-cols-2 gap-4">{children}</div>
}

export function List({
  title,
  items,
}: {
  title: string
  items: {id: string; name: string}[]
}) {
  return (
    <section className={clsx('rounded p-4 border border-gray-300')}>
      <h2 className="mt-0 text-current">{title}</h2>
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
    <div role="alert" className="bg-red-500 text-white">
      <p>Something went wrong.</p>
    </div>
  )
}

export function LoadingSpinner({title}: {title?: string}) {
  return (
    <div
      role="status"
      className={clsx(
        'rounded flex flex-col border border-gray-300 items-center justify-center fill-gray-900 text-gray-900 h-[460px]',
      )}
    >
      <SpinIcon />
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
        className="rounded-md border-0 mr-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder={placeholder}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {isLoading ? 'Loading...' : buttonText}
      </button>
    </form>
  )
}

function SpinIcon() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-12 w-12 text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}
