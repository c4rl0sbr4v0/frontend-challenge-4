/**
 * GRAPH FUNCTIONS.
 */


/**
 * objectHasAllKeys: Check if an object has the keys provided
 * 
 * @param {Array} keys 
 * @param {Object} object 
 * @returns {bool}
 */
function objectHasAllKeys(keys, object) {
  return keys.every(item => object.hasOwnProperty(item));
}

/**
 * validateNodeInput: Check node data structure
 * 
 * @param {Object} node 
 * @returns {bool}
*/
function validateNodeInput(node) {
  return objectHasAllKeys(['id', 'top', 'left'], node);
}

/**
 * validateNodeInput: Check node data structure
 * 
 * @param {Object} graphConnection 
 * @returns {bool}
*/
function validateGraph(graph) {
  return objectHasAllKeys(['connections', 'nodes'], graph);
}

/**
 * validateNodeInput: Check node data structure
 * 
 * @param {Object} graphConnection 
 * @returns {bool}
*/
function validateGraphConnection(graphConnection) {
  return objectHasAllKeys(['id', 'type', 'sourcePath', 'targetPath'], graphConnection);
}

/**
 * getNodeInputConnections: Get a node input connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  if (validateGraph(graph) && validateNodeInput(node)) {
    return Object.values(graph.connections).filter(connection => validateGraphConnection(connection) && connection.targetPath === node.id );
  }
  throw Error('Graph or node does not have expected structure');
}

/**
 * getNodeOutputConnections: Get a node output connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  if (validateGraph(graph) && validateNodeInput(node)) {
    return Object.values(graph.connections).filter(connection => validateGraphConnection(connection) && connection.sourcePath === node.id );
  }
  throw Error('Graph or node does not have expected structure');
}

/**
 * getNodeConnections: Get a node connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  if (validateGraph(graph) && validateNodeInput(node)) {
    return Object.values(graph.connections).filter(connection =>
      validateGraphConnection(connection)
      && (connection.sourcePath === node.id || connection.targetPath === node.id ));
  }
  throw Error('Graph or node does not have expected structure');
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  if (validateGraph(graph)) {
    return Object.values(graph.nodes).filter(node => getNodeOutputConnections(node, graph).length === 0 );
  }
  throw Error('Graph or node does not have expected structure');
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  if (validateGraph(graph)) {
    return Object.values(graph.nodes).filter(node => getNodeInputConnections(node, graph).length === 0 );
  }
  throw Error('Graph or node does not have expected structure');
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  return getNodeInputConnections(node, graph).length > 1;
}
