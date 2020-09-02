import Node from "./pipeline/class/Node";
// import Edge from "./pipeline/class/Edge";
// import Group from "./pipeline/class/Group";
import endpoints from "./pipeline/utils/endpoints";
export default {
  nodes: [
    {
      id: "begin",
      label: "开始",
      iconClass: "deep-blue",
      bgColor: "simple-blue",
      iconType: "icon-kaifa",

      group: "group",
      Class: Node,
      endpoints: endpoints("begin")
    },

    {
      id: "build",
      label: "构建镜像",
      bgColor: "simple-yellow",
      iconClass: "orange",
      iconType: "icon-guanlian",

      group: "group",
      Class: Node,
      endpoints: endpoints("build")
    }
  ],
  edges: [
    {
      source: "right",
      target: "left",
      sourceNode: "begin",
      targetNode: "build",
      arrow: true,
      type: "endpoint",
      arrowPosition: 0.5
      // Class: Edge
    }
  ],
  groups: [
    {
      id: "group",
      options: {
        title: "测试"
      },
      top: 10,
      left: 1,
      width: "100%",
      height: 300,
      resize: false
      // Class: Group
      // resize: true
    }
  ]
};
