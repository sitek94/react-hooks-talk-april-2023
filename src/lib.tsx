export function List({items}: {items: string[]}) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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
