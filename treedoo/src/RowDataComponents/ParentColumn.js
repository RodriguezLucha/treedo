import styles from '../TreeDooRow.module.scss'
import classNames from 'classnames'

export function ParentColumn (props) {
  // const node = props.node

  return (
    <div className={styles.ParentColumn}>
      <div></div>
      <div className={classNames(styles.svgButton, styles.lightGrey)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          class='bi bi-dash-circle-fill'
          viewBox='0 0 16 16'
        >
          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
        </svg>
      </div>
      <div></div>
    </div>
  )
}
