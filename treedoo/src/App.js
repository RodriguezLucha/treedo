import './App.scss'

import { data } from './data'
import { Node } from './Node'
import { getNodes } from './Utils'

function App () {
  const nodes = getNodes(null, data)
  return (
    <div>
      <h1>Treedoo</h1>
      {nodes.map(node => {
        return <Node key={node.id} node={node} level={0}></Node>
      })}
    </div>
  )
}

export default App
