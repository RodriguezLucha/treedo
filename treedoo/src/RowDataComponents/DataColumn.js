import styles from '../TreeDooRow.module.scss'
import { LeftSection } from './LeftSection'
import { RightSection } from './RightSection'

export function DataColumn (props) {
  const node = props.node
  return (
    <div className={styles.DataColumn}>
      <LeftSection className={styles.LeftSection} node={node}>
        Left Section
      </LeftSection>
      <RightSection className={styles.RightSection} node={node}>
        Right Section
      </RightSection>
    </div>
  )
}
