import styles from '../TreeDooRow.module.scss'

export function ProgressBar (props) {
  const done = props.done
  const total = props.total
  let squares = []

  squares.push(getDone(done))
  squares.push(getRemaining(total - done))
  return <div className={styles.ProgressBar}>{squares}</div>
}

function getDone (num) {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(<div className={styles.squareDone}></div>)
  }
  return result
}
function getRemaining (num) {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(<div className={styles.squareRemaining}></div>)
  }
  return result
}
