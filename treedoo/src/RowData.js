import styles from './TreeDooRow.module.scss'

import { ParentColumn } from './RowDataComponents/ParentColumn'
import { DataColumn } from './RowDataComponents/DataColumn'
import { ChildColumn } from './RowDataComponents/ChildColumn'

export function RowData (props) {
  const node = props.node
  return (
    <div className={styles.RowData}>
      <ParentColumn node={node} />
      <DataColumn node={node} />
      <ChildColumn node={node} />
    </div>
  )
}
