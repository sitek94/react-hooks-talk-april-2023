import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:3000',
})

export type Player = {id: string; name: string}
export type Team = {id: string; name: string}

export async function getPlayers() {
  return (await client.get<Player[]>('/players')).data
}

export async function getTeams() {
  return (await client.get<Team[]>('/teams')).data
}

export function addPlayer(player: Omit<Player, 'id'>) {
  return client.post('/players', {
    id: Math.random().toString(36).substring(2, 9),
    ...player,
  })
}
