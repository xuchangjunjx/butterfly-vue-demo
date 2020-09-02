import Endpoint from "../class/Endpoint";

export default () => [
  //   {
  //     id: `top`,
  //     color: "green",
  //     orientation: [0, -1],
  //     pos: [0.5, 0],
  //     Class: Endpoint
  //   },
  //   {
  //     id: `bottom`,
  //     color: "green",
  //     orientation: [0, 1],
  //     pos: [0.5, 0],
  //     Class: Endpoint
  //   },
  {
    id: `left`,
    color: "green",
    orientation: [-1, 0],
    pos: [0, 0.5],
    Class: Endpoint
  },
  {
    id: `right`,
    color: "green",
    orientation: [1, 0],
    pos: [0, 0.5],
    Class: Endpoint
  }
];
