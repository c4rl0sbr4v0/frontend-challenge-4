/**
 * Hi! 🤓
 * Please, don't touch this file. Good luck!
 */
import * as graphUtils from './graph_utils';
import bot_graph_0 from './samples/bot_graph_0';

describe('graph utils', () => {

  describe('getNodeInputConnections :: should pass all proposed cases', () => {

    const cases = [
      {
        description: 'Case 0: bot_start',
        node_id: 'bot_start',
        expected: [],
      },
      {
        description: 'Case 1: Nk11zbelp',
        node_id: 'Nk11zbelp',
        expected: [
          'bot_start.$success--Nk11zbelp',
        ],
      },
      {
        description: 'Case 2: Nk11zbmgv',
        node_id: 'Nk11zbmgv',
        expected: [
          'Nk11zbelp.$yes--Nk11zbmgv',
        ],
      },
      {
        description: 'Case 3: Nk11zbt04',
        node_id: 'Nk11zbt04',
        expected: [
          'Nk11zbelp.$no--Nk11zbt04',
        ],
      },
      {
        description: 'Case 4: Nk11zc79l',
        node_id: 'Nk11zc79l',
        expected: [
          'Nk11zh7ux.$success--Nk11zc79l',
          'Nk13s6idq.A--Nk11zc79l',
          'Nk13s6idq.B--Nk11zc79l',
        ],
      },
      {
        description: 'Case 5: Nk11zc8t3',
        node_id: 'Nk11zc8t3',
        expected: [
          'Nk11zdott.default--Nk11zc8t3',
        ],
      },
      {
        description: 'Case 6: Nk11zdott',
        node_id: 'Nk11zdott',
        expected: [],
      },
      {
        description: 'Case 7: Nk11zh7ux',
        node_id: 'Nk11zh7ux',
        expected: [
          'Nk11zbmgv.$success--Nk11zh7ux'
        ],
      },
      {
        description: 'Case 8: Nk13s6idq',
        node_id: 'Nk13s6idq',
        expected: [
          'Nk11zbt04.$success--Nk13s6idq',
        ],
      },
    ];

    for (let _case of cases) {
      it(_case.description, () => {
        const _node = bot_graph_0.nodes[_case.node_id];
        const result = graphUtils
          .getNodeInputConnections(_node, bot_graph_0)
          .map(conn => conn.id)
          .sort();
        expect(result).toEqual(_case.expected.sort());
      });
    }

  });
  
  describe('getNodeOutputConnections :: should pass all proposed cases', () => {

    const cases = [
      {
        description: 'Case 0: bot_start',
        node_id: 'bot_start',
        expected: [
          'bot_start.$success--Nk11zbelp',
        ],
      },
      {
        description: 'Case 1: Nk11zbelp',
        node_id: 'Nk11zbelp',
        expected: [
          'Nk11zbelp.$yes--Nk11zbmgv',
          'Nk11zbelp.$no--Nk11zbt04',
        ],
      },
      {
        description: 'Case 2: Nk11zbmgv',
        node_id: 'Nk11zbmgv',
        expected: [
          'Nk11zbmgv.$success--Nk11zh7ux',
        ],
      },
      {
        description: 'Case 3: Nk11zbt04',
        node_id: 'Nk11zbt04',
        expected: [
          'Nk11zbt04.$success--Nk13s6idq',
        ],
      },
      {
        description: 'Case 4: Nk11zc79l',
        node_id: 'Nk11zc79l',
        expected: [],
      },
      {
        description: 'Case 5: Nk11zc8t3',
        node_id: 'Nk11zc8t3',
        expected: [],
      },
      {
        description: 'Case 6: Nk11zdott',
        node_id: 'Nk11zdott',
        expected: [
          'Nk11zdott.default--Nk11zc8t3',
        ],
      },
      {
        description: 'Case 7: Nk11zh7ux',
        node_id: 'Nk11zh7ux',
        expected: [
          'Nk11zh7ux.$success--Nk11zc79l',
        ],
      },
      {
        description: 'Case 8: Nk13s6idq',
        node_id: 'Nk13s6idq',
        expected: [
          'Nk13s6idq.A--Nk11zc79l',
          'Nk13s6idq.B--Nk11zc79l',
        ],
      },
    ];

    for (let _case of cases) {
      it(_case.description, () => {
        const _node = bot_graph_0.nodes[_case.node_id];
        const result = graphUtils
          .getNodeOutputConnections(_node, bot_graph_0)
          .map(conn => conn.id)
          .sort();
        expect(result).toEqual(_case.expected.sort());
      });
    }

  });
  
  describe('getNodeConnections :: should pass all proposed cases', () => {

    const cases = [
      {
        description: 'Case 0: bot_start',
        node_id: 'bot_start',
        expected: [
          'bot_start.$success--Nk11zbelp',
        ],
      },
      {
        description: 'Case 1: Nk11zbelp',
        node_id: 'Nk11zbelp',
        expected: [
          'Nk11zbelp.$yes--Nk11zbmgv',
          'Nk11zbelp.$no--Nk11zbt04',
          'bot_start.$success--Nk11zbelp',
        ],
      },
      {
        description: 'Case 2: Nk11zbmgv',
        node_id: 'Nk11zbmgv',
        expected: [
          'Nk11zbmgv.$success--Nk11zh7ux',
          'Nk11zbelp.$yes--Nk11zbmgv',
        ],
      },
      {
        description: 'Case 3: Nk11zbt04',
        node_id: 'Nk11zbt04',
        expected: [
          'Nk11zbt04.$success--Nk13s6idq',
          'Nk11zbelp.$no--Nk11zbt04',
        ],
      },
      {
        description: 'Case 4: Nk11zc79l',
        node_id: 'Nk11zc79l',
        expected: [
          'Nk11zh7ux.$success--Nk11zc79l',
          'Nk13s6idq.A--Nk11zc79l',
          'Nk13s6idq.B--Nk11zc79l',
        ],
      },
      {
        description: 'Case 5: Nk11zc8t3',
        node_id: 'Nk11zc8t3',
        expected: [
          'Nk11zdott.default--Nk11zc8t3',
        ],
      },
      {
        description: 'Case 6: Nk11zdott',
        node_id: 'Nk11zdott',
        expected: [
          'Nk11zdott.default--Nk11zc8t3',
        ],
      },
      {
        description: 'Case 7: Nk11zh7ux',
        node_id: 'Nk11zh7ux',
        expected: [
          'Nk11zh7ux.$success--Nk11zc79l',
          'Nk11zbmgv.$success--Nk11zh7ux',
        ],
      },
      {
        description: 'Case 8: Nk13s6idq',
        node_id: 'Nk13s6idq',
        expected: [
          'Nk11zbt04.$success--Nk13s6idq',
          'Nk13s6idq.A--Nk11zc79l',
          'Nk13s6idq.B--Nk11zc79l',
        ],
      },
    ];

    for (let _case of cases) {
      it(_case.description, () => {
        const _node = bot_graph_0.nodes[_case.node_id];
        const result = graphUtils
          .getNodeConnections(_node, bot_graph_0)
          .map(conn => conn.id)
          .sort();
        expect(result).toEqual(_case.expected.sort());
      });
    }

  });

  it('getLeafNodes :: should return all leaf nodes (no output connections)', () => {
    const expected = [
      'Nk11zc79l',
      'Nk11zc8t3',
    ];
    const result = graphUtils
      .getLeafNodes(bot_graph_0)
      .map(node => node.id)
      .sort();
    expect(result).toEqual(expected.sort());
  });

  it('getRootNodes :: should return all root nodes (no input connections)', () => {
    const expected = [
      'Nk11zdott',
      'bot_start',
    ];
    const result = graphUtils
      .getRootNodes(bot_graph_0)
      .map(node => node.id)
      .sort();
    expect(result).toEqual(expected.sort());
  });

  it('hasMultipleSources :: should return true if a node has different source paths', () => {
    const truthyResult = graphUtils.hasMultipleSources(bot_graph_0.nodes['Nk11zc79l'], bot_graph_0);
    expect(truthyResult).toBeTruthy();

    const falsyResult = graphUtils.hasMultipleSources(bot_graph_0.nodes['Nk13s6idq'], bot_graph_0);
    expect(falsyResult).toBeFalsy();
  });

});