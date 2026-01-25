function Student(name, surname, birthYear, grades) {
  this.name = name
  this.surname = surname
  this.birthYear = birthYear
  this.grades = grades
  this.attendance = new Array(25)
}

Student.prototype.getAge = function() {
  return new Date().getFullYear() - this.birthYear
}

Student.prototype.getAverageGrade = function() {
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0)
  return sum / this.grades.length
}



Student.prototype.present = function() {
  for (let i = 0; i < this.attendance.length; i++) {
    if (!(i in this.attendance)) {
      this.attendance[i] = true
      return
    }
  }
}

Student.prototype.absent = function() {
  for (let i = 0; i < this.attendance.length; i++) {
    if (!(i in this.attendance)) {
      this.attendance[i] = false
      return
    }
  }
}

Student.prototype.summary = function() {
  const avgGrade = this.getAverageGrade()

const attended = this.attendance.reduce((acc, v) => acc + (v === true ? 1 : 0), 0)
const total = this.attendance.reduce((acc, v) => acc + (v !== undefined ? 1 : 0), 0)
const avgAttendance = total === 0 ? 0 : attended / total

  if (avgGrade > 90 && avgAttendance > 0.9) return "Молодець!"
  if (avgGrade > 90 || avgAttendance > 0.9) return "Добре, але можна краще"
  return "Редиска!"
}

const s1 = new Student("Петя", "Короткослав", 2002, [99, 99, 99])
const s2 = new Student("Федя", "Длиннослав", 2001, [90, 90, 96])
const s3 = new Student("Иван", "Длиннослав", 2003, [70, 65, 80])

s1.present()
s1.present()
s1.present()

s2.present()
s2.absent()
s2.present()
s2.present()
s2.absent()

s3.absent()
s3.present()

console.log(s1.name, s1.surname, s1.getAge(), s1.getAverageGrade(), s1.attendance, s1.summary())
console.log(s2.name, s2.surname, s2.getAge(), s2.getAverageGrade(), s2.attendance, s2.summary())
console.log(s3.name, s3.surname, s3.getAge(), s3.getAverageGrade(), s3.attendance, s3.summary())