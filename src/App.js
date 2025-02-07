import './App.css';
import { useState, useEffect } from 'react';
import Table from './components/Table';
import StringFilter from './components/StringFilter';

function App() {
  const tempdata = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User"
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User"
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User"
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User"
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 12,
      name: "Leo Green",
      age: 27,
      role: "Designer",
      hireDate: "2021-01-30",
      isActive: true,
      salary: 68000,
      department: "Design",
      projectsCompleted: 3,
      lastLogin: "2024-07-28T16:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 13,
      name: "Mona Blue",
      age: 36,
      role: "Engineer",
      hireDate: "2019-11-18",
      isActive: true,
      salary: 87000,
      department: "Development",
      projectsCompleted: 11,
      lastLogin: "2024-07-30T14:50:00.000Z",
      accessLevel: "User"
    },
    {
      id: 14,
      name: "Nina Brown",
      age: 25,
      role: "Intern",
      hireDate: "2023-04-14",
      isActive: true,
      salary: 42000,
      department: "Development",
      projectsCompleted: 2,
      lastLogin: "2024-07-31T11:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 15,
      name: "Oscar White",
      age: 42,
      role: "Director",
      hireDate: "2016-05-11",
      isActive: true,
      salary: 125000,
      department: "Management",
      projectsCompleted: 22,
      lastLogin: "2024-07-29T09:33:00.000Z",
      accessLevel: "Admin"
    }
  ];

  const [data, setData] = useState(tempdata);
  // let data = tempdata;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(tempdata);
  const [sortlogic, setsortlogic] = useState({ columnvalue: null, way: 'asc' });
  const [searchFilter, setSearchFilter] = useState({ filterType: "contains", filterValue: "" });

  useEffect(() => {
    const finalterm = searchTerm.toLowerCase();
    const filtered = data.filter((item) => {
      const matchesSearch = Object.keys(item).some((key) => {
        const value = item[key];
        if (typeof value === 'string')
          return value.toLowerCase().includes(finalterm);
        if (typeof value === 'number')
          return value.toString().includes(finalterm);
        if (typeof value === 'boolean')
          return (value ? "yes" : "no").includes(finalterm);
        if (value instanceof Date)
          return value.toLocaleDateString().includes(finalterm) || value.toLocaleString().includes(finalterm);
        return false;
      });

      return matchesSearch;
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const applyStringFilter = () => {
    const { filterType, filterValue } = searchFilter;
    const filtered = data.filter((item) => {
      return Object.keys(item).some((key) => {
        const value = item[key];
        if (typeof value !== 'string') return true;
        switch (filterType) {
          case 'contains':
            return value.toLowerCase().includes(filterValue.toLowerCase());
          case 'notContains':
            return !value.toLowerCase().includes(filterValue.toLowerCase());
          case 'equals':
            return value.toLowerCase() === filterValue.toLowerCase();
          case 'notEquals':
            return value.toLowerCase() !== filterValue.toLowerCase();
          case 'startsWith':
            return value.toLowerCase().startsWith(filterValue.toLowerCase());
          case 'endsWith':
            return value.toLowerCase().endsWith(filterValue.toLowerCase());
          case 'isNull':
            return value === null || value === undefined || value === '';
          case 'isNotNull':
            return value !== null && value !== undefined && value !== '';
          default:
            return true;
        }
      });
    });
    setFilteredData(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortData = (key) => {
    let direction = 'asc';
    if (sortlogic.columnvalue === key) {
      if (sortlogic.way === 'asc')
        direction = 'desc';
    }
    setsortlogic({ columnvalue: key, way: direction });
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) {
        if (direction === 'asc') return -1;
        else return 1;
      }
      if (a[key] > b[key]) {
        if (direction === 'asc') return 1;
        else return -1;
      }
      return 0;
    });
    setFilteredData(sortedData);
  };

  const handleSearchFilterChange = (filterType, filterValue) => {
    setSearchFilter({ filterType, filterValue });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", padding: "5px" }}
      />
      <h4> TIP :- to do any sort on column click on that column</h4>
      <StringFilter onFilterChange={handleSearchFilterChange} />
      <button onClick={applyStringFilter}>Apply String Filter</button>
      <Table data={filteredData} sortData={sortData} sortlogic={sortlogic} />
    </div>
  );
}

export default App;
