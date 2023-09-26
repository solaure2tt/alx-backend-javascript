export default function createReportObject(employeesList) {
  var myObj = {
    allEmployees : employeesList,
    getNumberOfDepartments : function(employeesList) {
      var n = 0;
      for(let em of Object.keys(employeesList)) {
        n = n + 1;
      }
      return n;
    }
  }
  var res = Object.create(myObj);
  return res;
}
