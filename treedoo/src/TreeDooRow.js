import { RowSpacer } from './RowSpacer'
import { RowData } from './RowData'

import styles from './TreeDooRow.module.scss'

export function TreeDooRow (props) {
  // const carrot = getCarrot(props.children, props.node.folded)
  const node = props.node
  const level = props.level
  return (
    <div className={styles.treedoorow} key={props.node.id}>
      <RowSpacer node={node} level={level} />
      <RowData node={node} />
    </div>
  )
}

// function getCarrot (children, folded) {
//   if (children.length) {
//     if (folded) {
//       return <button>➤</button>
//     } else {
//       return <button>⌄</button>
//     }
//   } else {
//     return <div></div>
//   }
// }
