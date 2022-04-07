// import { stratify, cluster } from "d3-hierarchy";
// eslint-disable-next-line no-unused-vars
// import dags from "d3-dag";
// eslint-disable-next-line no-unused-vars
const table = [
  { name: "Eve", parent: "" },
  { name: "Cain", parent: "Eve" },
  { name: "Seth", parent: "Eve" },
  { name: "Enos", parent: "Seth" },
  { name: "Noam", parent: "Seth" },
  { name: "Abel", parent: "Eve" },
  { name: "Awan", parent: "Eve" },
  { name: "Enoch", parent: "Awan" },
  { name: "Azura", parent: "Eve" }
];
export default {
  stratify() {
    // var root = stratify()
    //   .id(function(d) {
    //     return d.name;
    //   })
    //   .parentId(function(d) {
    //     return d.parent;
    //   })(table);
    // console.log(root);
    // console.log(
    //   cluster()
    //     .size(1000, 1000)
    //     .nodeSize([100, 48])(root)
    // );
    // const layout = sugiyama().size([1000, 600]);
    // layout(dag);
  }
};
