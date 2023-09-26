export default function createIteratorObject(report) {
  var res = [];
  for (let [ke, vals] of Object.entries(report.allEmployees)){
      for (let em of vals){
         res.push(em);
      }
  }
  return res;
}
