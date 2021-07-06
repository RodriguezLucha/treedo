import { getNodes } from './Utils'
import { TreeDooRow } from './TreeDooRow'
import { data } from './data'

export function Node (props) {
  const node = props.node
  const level = props.level
  const children = getNodes(node.id, data)

  const currentNodeRendered = (
    <TreeDooRow
      key={node.id}
      level={level}
      node={node}
      children={children}
    ></TreeDooRow>
  )

  const childNodesRendered = []
  if (children.length && node.folded) {
    //don't render children
  } else {
    for (const child of children) {
      childNodesRendered.push(
        <Node key={child.id} node={child} level={level + 1}></Node>
      )
    }
  }

  const result = [currentNodeRendered].concat(childNodesRendered)
  return result
}
