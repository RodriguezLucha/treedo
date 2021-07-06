import styles from '../TreeDooRow.module.scss'
import classNames from 'classnames'

export function ViewEditTextControl (props) {
  const node = props.node

  return (
    <div
      className={classNames(
        styles.ViewEditTextControl,
        node.completed ? styles.Strike : null
      )}
    >
      {node.text}
    </div>
  )
}
