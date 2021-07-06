export function getNodes (parent_id, nodes) {
  let result = []
  for (const node of nodes) {
    if (node.parent_id === parent_id) {
      result.push(node)
    }
  }

  return result
}
