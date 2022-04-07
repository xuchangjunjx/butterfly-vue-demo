import { Group } from "butterfly-dag";
const $ = require("jquery");
const _ = require("lodash");

class BaseGroup extends Group {
  draw(obj) {
    let classNames = ["pipeline-group"];
    if (obj.options.className) {
      classNames.push(obj.options.className);
    }
    let _dom = obj.dom;
    if (!_dom) {
      _dom = $("<div></div>")
        .attr("class", classNames.join(" "))
        .css("top", obj.top)
        .css("left", obj.left)
        .attr("id", obj.id);
    }
    let group = $(_dom);
    this._container = $("<div></div>").attr(
      "class",
      "pipeline-group-container"
    );

    group.append(this._container);

    // 添加文字
    if (_.get(obj, "options.title")) {
      group.append(`<span class="text">${obj.options.title}</span>`);
    }

    return _dom;
  }
  getWidth() {
    return $(this.dom).width();
  }
  getHeight() {
    return $(this.dom).height();
  }
  toggleClass(clasName) {
    $(this.dom).toggleClass(clasName);
  }
}
export default BaseGroup;
