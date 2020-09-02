import { MyNode } from "./index";
export default {
  "canvas:click": function(data) {
    console.log(data);
  },
  "group:click": function(data) {
    console.log("group:click", data);
    data.group.toggleClass && data.group.toggleClass("active");
  },
  "node:click": function(data) {
    console.log("node:click", data);
    let node = data.node;
    node.toggleClass && node.toggleClass("focus");
    node.toggleFocus && node.toggleFocus();
    // let nodes = this.instance.getNeighborEdges(data.node.id);
    // nodes.forEach((element) => {
    //   element.toggleClass && element.toggleClass("active");
    // });
  },
  "node:click:tools": function(data) {
    console.log(data);
    let { node, name } = data;
    let nnode = new MyNode("打包", "group", "simple-yellow");

    nnode.setIcon("orange", "icon-guanlian");

    if (name === "next") {
      // 向下查找子节点的数量
      let neighbor = this.instance.getNeighborNodesAndEdgesByLevel({
        node,
        type: "out",
        level: 1
      });
      console.log(neighbor);
      let top = neighbor.nodes.length
        ? (neighbor.nodes.length - 1) * 48 + node.top
        : node.top;
      nnode.setPosition(top, node.left + node.dom.clientWidth + 40);
      this.instance.addNode(nnode);
      this.instance.addEdge({
        source: "right",
        target: "left",
        sourceNode: node.id,
        targetNode: nnode.id,
        arrow: true,
        type: "endpoint",
        arrowPosition: 0.5
      });
    } else if (name === "hori") {
      console.log("添加并行");
      let neighbor = this.instance.getNeighborNodesAndEdgesByLevel({
        node,
        level: 2
      });
      console.log(neighbor);
    } else if (name === "close") {
      this.instance.removeNode(node.id);
    }
  }
};
