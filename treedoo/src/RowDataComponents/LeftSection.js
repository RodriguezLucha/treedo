import styles from '../TreeDooRow.module.scss'
import { TopSection } from './TopSection'
import { BottomSection } from './BottomSection'

export function LeftSection (props) {
  const node = props.node
  return (
    <div className={styles.LeftSection}>
      <TopSection node={node}></TopSection>
      <BottomSection node={node}></BottomSection>
    </div>
  )
}
