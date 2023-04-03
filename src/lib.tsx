export function List({title, items}: {title: string; items: string[]}) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
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

export function LoadingSpinner() {
  return (
    <div role="status">
      <p>Loading...</p>
    </div>
  )
}

export async function fetchPlayers() {
  await sleep(5000)

  return Array.from({length: 10}).map((_, i) => `Player ${i + 1}`)
}

export async function fetchTeams() {
  await sleep(5000)

  return Array.from({length: 10}).map((_, i) => `Team ${i + 1}`)
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
