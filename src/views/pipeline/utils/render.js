// import { Canvas } from "butterfly-dag/pack/index.js";
import pipelineEvents from "./events";
import Canvas from "../class/DragCanvas.js";
export default function(flowData) {
  let root = document.getElementById("canvas");
  let canvas = new Canvas({
    root: root,
    disLinkable: true, // 可删除连线
    linkable: true, // 可连线
    draggable: true, // 可拖动
    zoomable: true, // 可放大
    moveable: true, // 可平移
    autoFixCanvas: {
      //节点拖动或连线拖动到画布边缘时，画布自动延展
      enable: true,
      autoMovePadding: [20, 20, 20, 20] //触发自动延展的画布内边距
    },
    layout: {
      type: "drageLayout",
      options: {
        rankdir: "LR",
        align: "DR",
        nodesep: 6,
        ranksep: 31,
        controlPoints: false
      }
    },
    theme: {
      edge: {
        type: "Manhattan",
        arrow: true,
        arrowPosition: 1
      }
    }
  });
  canvas.draw(flowData);
  canvas.on("events", data => {
    let { type } = data;
    let f = pipelineEvents[type];
    if (f) {
      f.bind(this)(data);
    }
  });
  return canvas;
}
