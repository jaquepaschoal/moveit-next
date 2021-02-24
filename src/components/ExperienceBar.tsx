import styles from '../styles/components/ExperienceBar.module.css'
export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: '60%'}}/>
        <span style={{ left: '60%'}} className={styles.currentExperience}>300xp</span>
      </div>
      <span>600px</span>
    </header>
  )
}