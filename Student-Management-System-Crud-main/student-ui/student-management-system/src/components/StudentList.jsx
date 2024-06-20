import React, { useState, useEffect } from 'react';
import api from '../api';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get('/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Rest of your component code

  return (
    <div>
      {/* Render your students list here */}
    </div>
  );
};

export default StudentList;
