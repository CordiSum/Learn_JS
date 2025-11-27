function getTotalSalary(data) {
  if (Array.isArray(data)) {
    return data.reduce((sum, departament) =>  sum + departament.salary, 0)
  }

  return Object.values(data).reduce((total, subDepartament) => total + getTotalSalary(subDepartament), 0)
}


let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  }
}

let totalSalary = getTotalSalary(company)
console.log(totalSalary)