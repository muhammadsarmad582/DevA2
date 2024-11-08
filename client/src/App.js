import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [users, setUsers] = useState([]);

  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        name,
        registrationNumber,
      });
      alert(`User ${response.data.name} added successfully!`);
      setName(''); // Reset name field
      setRegistrationNumber(''); // Reset registration number field
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error(error);
      alert('Error adding user');
    }
  };

  // Inline styling for aesthetics
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#BEE2E2',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    form: {
      background: '#D6FFFF',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      marginBottom: '20px',
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '10px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: 'bold',
      color: '#666',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: 'none',
      color: '#fff',
      backgroundColor: '#007bff',
      cursor: 'pointer',
    },
    userList: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#D6FFFF',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
    userItem: {
      padding: '10px 0',
      borderBottom: '1px solid #eee',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>User Registration</h1>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Registration Number:</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      <div style={styles.userList}>
        <h2 style={styles.title}>Registered Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id} style={styles.userItem}>
              {user.name} - {user.registrationNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;