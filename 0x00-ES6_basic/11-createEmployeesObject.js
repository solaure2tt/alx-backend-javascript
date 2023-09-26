export default function createEmployeesObject(departmentName, employees) {
  var myObj = new Object()
  myObj[departmentName] = employees
  return myObj;
}
