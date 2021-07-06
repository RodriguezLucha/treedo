import styles from '../TreeDooRow.module.scss'
import { Progress } from './Progress'
import { getNodes } from '../Utils'
import { data } from '../data'
import classNames from 'classnames'

export function TopSection (props) {
  const node = props.node
  const hasChildren = getNodes(node.id, data).length > 0

  return (
    <div
      className={classNames(styles.TopSection, !hasChildren ? styles.thin : '')}
    >
      <div className={classNames(styles.svgButton, styles.lightGrey)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-arrow-left'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
          />
        </svg>
      </div>
      <Progress node={node} />
      <div className={classNames(styles.svgButton, styles.lightGrey)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-arrow-right'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
          />
        </svg>
      </div>
    </div>
  )
}
