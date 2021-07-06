import styles from './TreeDooRow.module.scss'

export function RowSpacer (props) {
  const level = props.level

  const paddingLeft = level * 50

  return (
    <div
      style={{ paddingLeft: paddingLeft }}
      className={styles.RowSpacer}
    ></div>
  )
}
