import { Endpoint } from "butterfly-dag/pack/index.js";

const $ = require("jquery");

class BaseEndpoint extends Endpoint {
  draw(obj) {
    let point = super.draw(obj);
    if (obj.options && obj.options.color) {
      // 系统灰色锚点
      $(point).addClass(obj.options.color);
    }
    return point;
  }
}
export default BaseEndpoint;
