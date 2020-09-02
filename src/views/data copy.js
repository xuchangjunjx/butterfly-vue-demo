import Node from "./pipeline/class/Node";
import Edge from "./pipeline/class/Edge";
import Endpoint from "./pipeline/class/Endpoint";
import Group from "./pipeline/class/Group";
export default {
  nodes: [
    {
      id: "1",
      label: "开始",
      iconClass: "green",
      iconType: "icon-bofang",
      top: 50,
      bgColor: "purple",
      left: 63,
      text: "开始",
      Class: Node
    },
    {
      id: "2",
      label: "默认通过",
      iconClass: "simple-blue",
      iconType: "icon-rds",

      top: 150,
      left: 50,
      Class: Node
    },
    {
      id: "3",
      label: "政策监管准入",
      iconClass: "deep-blue",
      iconType: "icon-guize-kai",
      top: 250,
      left: 36,
      Class: Node,

      endpoints: [
        {
          id: "right",
          color: "green",
          orientation: [1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "4",
      label: "条件分支",
      iconClass: "orange",
      iconType: "icon-slbfuzaijunhengSLB",
      top: 90,
      left: 28,
      Class: Node,
      group: "testGroup",
      endpoints: [
        {
          id: "right",
          color: "orange",
          orientation: [1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        },
        {
          id: "left",
          color: "pink",
          orientation: [-1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "5",
      label: "行内准入",
      iconClass: "deep-blue",
      iconType: "icon-guize-kai",
      top: 28,
      left: 214,
      group: "testGroup",
      Class: Node,
      endpoints: [
        {
          id: "right",
          orientation: [1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        },
        {
          id: "left",
          orientation: [-1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "6",
      label: "拒绝",
      iconClass: "simple-blue",
      iconType: "icon-rds",
      top: 160,
      left: 215,
      Class: Node,
      group: "testGroup",
      endpoints: [
        {
          id: "right",
          orientation: [1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        },
        {
          id: "left",
          orientation: [-1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "7",
      label: "结束",
      iconClass: "gray",
      iconType: "icon-tingzhi",
      top: 462,
      left: 566,
      Class: Node,
      endpoints: [
        {
          id: "left",
          orientation: [-1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "8",
      label: "企业资质评分卡",
      iconClass: "simple-yellow",
      iconType: "icon-rds",
      top: 180,
      left: 750,
      Class: Node,
      endpoints: [
        {
          id: "left",
          orientation: [-1, 0],
          pos: [0, 0.5],
          Class: Endpoint
        }
      ]
    },
    {
      id: "9",
      label: "企业评分卡等级",
      iconClass: "deep-green",
      iconType: "icon-ossduixiangcunchuOSS",
      top: 270,
      left: 750,
      Class: Node
    },
    {
      id: "10",
      label: "条件分支",
      iconClass: "orange",
      iconType: "icon-slbfuzaijunhengSLB",
      top: 360,
      left: 771,
      Class: Node
    },
    {
      id: "11",
      label: "E档拒绝",
      iconClass: "simple-blue",
      iconType: "icon-rds",
      top: 460,
      left: 700,
      Class: Node
    },
    {
      id: "12",
      label: "结束",
      iconClass: "gray",
      iconType: "icon-tingzhi",
      top: 540,
      left: 710,
      Class: Node
    },
    {
      id: "13",
      label: "企业信用额度",
      iconClass: "purple",
      iconType: "icon-shujuji",
      top: 460,
      left: 850,
      Class: Node
    },
    {
      id: "14",
      label: "回落脚本",
      iconClass: "pink",
      iconType: "icon-edit",
      top: 540,
      left: 864,
      Class: Node
    },
    {
      id: "15",
      label: "赋值通过",
      iconClass: "simple-blue",
      iconType: "icon-rds",
      top: 620,
      left: 864,
      Class: Node
    },
    {
      id: "16",
      label: "结束",
      iconClass: "gray",
      iconType: "icon-bofang",
      top: 700,
      left: 877,
      Class: Node
    }
  ],
  groups: [
    {
      id: "testGroup",
      options: {
        text: "Group"
      },
      top: 160,
      left: 186,
      Class: Group
    }
  ],
  edges: [
    {
      source: "1",
      target: "2",
      sourceNode: "1",
      targetNode: "2",
      arrow: true,
      arrowPosition: 1,
      Class: Edge,
      label: "xxx",
      color: "purple"
    },
    {
      source: "2",
      target: "3",
      sourceNode: "2",
      targetNode: "3",
      arrow: true,
      arrowPosition: 0.8,
      color: "purple",
      arrowColor: "purple",
      Class: Edge
    },
    {
      source: "right",
      target: "left",
      sourceNode: "3",
      targetNode: "4",
      type: "endpoint",
      color: "purple",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "right",
      target: "left",
      sourceNode: "4",
      targetNode: "5",
      type: "endpoint",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "right",
      target: "left",
      sourceNode: "4",
      targetNode: "6",
      type: "endpoint",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "right",
      target: "left",
      sourceNode: "6",
      targetNode: "7",
      type: "endpoint",
      color: "green",
      defaultAnimate: true,
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "right",
      target: "left",
      sourceNode: "5",
      targetNode: "8",
      type: "endpoint",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "8",
      target: "9",
      sourceNode: "8",
      targetNode: "9",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "9",
      target: "10",
      sourceNode: "9",
      targetNode: "10",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "10",
      target: "11",
      sourceNode: "10",
      targetNode: "11",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "11",
      target: "12",
      sourceNode: "11",
      targetNode: "12",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "10",
      target: "13",
      sourceNode: "10",
      targetNode: "13",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "13",
      target: "14",
      sourceNode: "13",
      targetNode: "14",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "14",
      target: "15",
      sourceNode: "14",
      targetNode: "15",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: "15",
      target: "16",
      sourceNode: "15",
      targetNode: "16",
      arrow: true,
      arrowPosition: 0.5,
      Class: Edge
    }
  ]
};
