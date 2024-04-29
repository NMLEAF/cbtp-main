const students = [
  {
    fname: "John",
    lname: "Doe",
    class: "10A",
    Id: "E-2345",
    motherName: "Jane Doe",
    fatherName: "Michael Doe",
    address: "123 Main St",
    gender: "Male",
    attendance: "absent",
    age: 16,
    test: 20,
    mid: 15,
    final: 40,
    assignment: 10,
    attendanceMark: 9
  },
  {
    fname: "Alice",
    lname: "Smith",
    class: "10A",
    Id: "E-2346",
    motherName: "Emily Smith",
    fatherName: "David Smith",
    address: "456 Elm St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 18,
    mid: 17,
    final: 35,
    assignment: 12,
    attendanceMark: 10
  },
  {
    fname: "Robert",
    lname: "Johnson",
    class: "10A",
    Id: "E-2347",
    motherName: "Sarah Johnson",
    fatherName: "James Johnson",
    address: "789 Oak St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 22,
    mid: 18,
    final: 37,
    assignment: 14,
    attendanceMark: 10
  },
  {
    fname: "Emily",
    lname: "Brown",
    class: "10A",
    Id: "E-2348",
    motherName: "Olivia Brown",
    fatherName: "Daniel Brown",
    address: "321 Pine St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 19,
    mid: 16,
    final: 38,
    assignment: 11,
    attendanceMark: 9
  },
  {
    fname: "Michael",
    lname: "Wilson",
    class: "10A",
    Id: "E-2349",
    motherName: "Sophia Wilson",
    fatherName: "Joseph Wilson",
    address: "654 Maple St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 21,
    mid: 15,
    final: 39,
    assignment: 13,
    attendanceMark: 10
  },
  {
    fname: "Olivia",
    lname: "Taylor",
    class: "10A",
    Id: "E-2350",
    motherName: "Ava Taylor",
    fatherName: "Matthew Taylor",
    address: "987 Cedar St",
    gender: "Female",
    attendance: "absent",
    age: 15,
    test: 20,
    mid: 17,
    final: 40,
    assignment: 12,
    attendanceMark: 8
  },
  {
    fname: "Daniel",
    lname: "Anderson",
    class: "10A",
    Id: "E-2351",
    motherName: "Mia Anderson",
    fatherName: "William Anderson",
    address: "789 Elm St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 23,
    mid: 19,
    final: 37,
    assignment: 15,
    attendanceMark: 10
  },
  {
    fname: "Sophia",
    lname: "Miller",
    class: "10A",
    Id: "E-2352",
    motherName: "Isabella Miller",
    fatherName: "Benjamin Miller",
    address: "123 Oak St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 18,
    mid: 16,
    final: 38,
    assignment: 10,
    attendanceMark: 9
  },
  {
    fname: "Matthew",
    lname: "Thomas",
    class: "10A",
    Id: "E-2353",
    motherName: "Charlotte Thomas",
    fatherName: "Andrew Thomas",
    address: "456 Pine St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 22,
    mid: 18,
    final: 39,
    assignment: 13,
    attendanceMark: 10
  },
  {
    fname: "Ava",
    lname: "Harris",
    class: "10A",
    Id: "E-2354",
    motherName: "Amelia Harris",
    fatherName: "Alexander Harris",
   address: "789 Maple St",
    gender: "Female",
    attendance: "absent",
    age: 15,
    test: 19,
    mid: 17,
    final: 40,
    assignment: 11,
    attendanceMark: 8
  },
  {
    fname: "William",
    lname: "Clark",
    class: "10A",
    Id: "E-2355",
    motherName: "Harper Clark",
    fatherName: "David Clark",
    address: "321 Cedar St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 21,
    mid: 15,
    final: 37,
    assignment: 14,
    attendanceMark: 10
  },
  {
    fname: "Isabella",
    lname: "Lewis",
    class: "10A",
    Id: "E-2356",
    motherName: "Evelyn Lewis",
    fatherName: "James Lewis",
    address: "654 Elm St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 20,
    mid: 16,
    final: 38,
    assignment: 12,
    attendanceMark: 9
  },
  {
    fname: "Benjamin",
    lname: "Lee",
    class: "10A",
    Id: "E-2357",
    motherName: "Abigail Lee",
    fatherName: "Michael Lee",
    address: "987 Oak St",
    gender: "Male",
    attendance: "present",
    age: 16,
    test: 22,
    mid: 18,
    final: 39,
    assignment: 15,
    attendanceMark: 10
  },
  {
    fname: "Charlotte",
    lname: "Walker",
    class: "10A",
    Id: "E-2358",
    motherName: "Emily Walker",
    fatherName: "Daniel Walker",
    address: "123 Pine St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 18,
    mid: 17,
    final: 40,
    assignment: 10,
    attendanceMark: 9
  },
  {
    fname: "Alexander",
    lname: "Hall",
    class: "10A",
    Id: "E-2359",
    motherName: "Grace Hall",
    fatherName: "Joseph Hall",
    address: "456 Cedar St",
    gender: "Male",
    attendance: "absent",
    age: 16,
    test: 20,
    mid: 15,
    final: 37,
    assignment: 13,
    attendanceMark: 8
  },
  {
    fname: "ዳዊት",
    lname: "Young",
    class: "10A",
    Id: "E-2360",
    motherName: "Chloe Young",
    fatherName: "William Young",
    address: "789 Elm St",
    gender: "Female",
    attendance: "present",
    age: 15,
    test: 19,
    mid: 16,
    final: 38,
    assignment: 11,
    attendanceMark: 10
  }
];

export default students;