import { User } from '@/types/types'

export const generateSliderArray = (
  users: User[],
  winner: string,
): string[] => {
  let weightedArray: string[] = []

  users.forEach(user => {
    for (let i = 0; i < Math.round(user.chance); i++) {
      weightedArray.push(user.avatar)
    }
  })

  for (let i = weightedArray.length - 1; i > 0; i--) {
    const j = Math.round(Math.random() * (i + 1))
    ;[weightedArray[i], weightedArray[j]] = [weightedArray[j], weightedArray[i]]
  }

  if (winner) {
    weightedArray = [
      ...weightedArray.slice(0, 95),
      winner,
      ...weightedArray.slice(95),
    ]
  }
  return weightedArray
}
