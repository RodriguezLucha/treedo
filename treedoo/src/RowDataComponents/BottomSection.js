import styles from '../TreeDooRow.module.scss'

import { ViewEditTextControl } from './ViewEditTextControl'
import { getNodes } from '../Utils'
import { data } from '../data'
import classNames from 'classnames'

export function BottomSection (props) {
  const node = props.node
  const children = getNodes(node.id, data)

  const carrot = getCarrot(children, node.folded)
  return (
    <div className={styles.BottomSection}>
      <div></div>
      <div className={styles.BottomSectionInner}>
        {carrot}
        <ViewEditTextControl node={node} />
        <div>
          <label className='container'>
            <input type='checkbox' checked={node.completed} />
            <span className='checkmark'></span>
          </label>
        </div>
      </div>
      <div></div>
    </div>
  )
}

function getCarrot (children, folded) {
  if (children.length) {
    if (folded) {
      return (
        <div className={classNames(styles.svgButton, styles.lightGrey)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='bi bi-arrows-angle-expand'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z'
            />
          </svg>
        </div>
      )
    } else {
      return (
        <div className={classNames(styles.svgButton, styles.lightGrey)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='bi bi-arrows-angle-contract'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z'
            />
          </svg>
        </div>
      )
    }
  } else {
    return <div className={styles.svgButton}></div>
  }
}
