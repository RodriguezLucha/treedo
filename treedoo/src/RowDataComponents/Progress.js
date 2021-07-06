import styles from '../TreeDooRow.module.scss'
import { getNodes } from '../Utils'
import { data } from '../data'
import { ProgressBar } from './ProgressBar'

export function Progress (props) {
  const node = props.node
  const children = getNodes(node.id, data)
  const doneChildren = children.filter(child => child.completed)
  const numChildren = children.length
  const numDone = doneChildren.length

  if (numChildren) {
    return (
      <div className={styles.Progress}>
        <ProgressBar done={numDone} total={numChildren} />
        <div className={styles.ProgressStats}>
          <div className={styles.Stat}>Done: {numDone}</div>
          <div className={styles.Stat}>Total: {numChildren}</div>
          <div className={styles.Stat}>
            Percent: {Math.round((numDone / numChildren) * 100)}%
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
