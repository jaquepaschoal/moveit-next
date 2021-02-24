import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number, 
  challengesCompleted: number,
  activeChallenge: Challenge ,
  experienceToNextLevel: number,
  startNewChallenge: () => void,
  resetChallenges: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenges() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider 
    value={{
      level, 
      currentExperience, 
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      startNewChallenge,
      resetChallenges,
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}