const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  
  // Extract names from the data array
  const names = data.flatMap(group => group.map(person => person.name));
  
  // Output the result
  console.log(names);
  // Desired outcome: ['John', 'Jane', 'Bob']