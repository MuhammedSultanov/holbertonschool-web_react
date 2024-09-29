//Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  //Student variables
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
  };
  
  //Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  //Function to render a table
  function renderTable(students: Student[]): void {
    // Create table elements
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    //Loop through students and create a row for each
    students.forEach(student => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');
  
      //Set cell contents
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      //Append cells to the row
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      //Append row to the tbody
      tbody.appendChild(row);
    });
  
    //Append tbody to table and table to document body
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  //Render the table with studentsList
  renderTable(studentsList);
  