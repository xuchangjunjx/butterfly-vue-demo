import Node from "../class/Node";
import endpoints from "./endpoints";
import randomstring from "randomstring";
export function randomString(length) {
  return randomstring.generate({
    length: length,
    charset: "alphabetic",
    capitalization: "lowercase"
  });
}
export class MyNode {
  constructor(label, group, className) {
    this.id = randomString(5);
    this.label = label + this.id;
    this.Class = Node;
    this.group = group;
    this.className = className;
    this.endpoints = endpoints();
  }
  setPosition(top, left) {
    this.top = top;
    this.left = left;
  }
  setIcon(iconClass, iconType) {
    this.iconClass = iconClass;
    this.iconType = iconType;
  }
}
