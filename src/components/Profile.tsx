import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jaquepaschoal.png" alt="Jaqueline Paschoal"/>
      <div>
        <strong>Jaqueline Paschoal</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}