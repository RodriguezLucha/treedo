import styles from '../TreeDooRow.module.scss'
import classNames from 'classnames'

export function RightSection (props) {
  // const node = props.node
  return (
    <div className={styles.RightSection}>
      <div className={classNames(styles.svgButton, styles.lightGrey)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          class='bi bi-arrow-up'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
          />
        </svg>
      </div>
      <div className={classNames(styles.svgButton, styles.lightGrey)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          class='bi bi-arrow-down'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
          />
        </svg>
      </div>
    </div>
  )
}