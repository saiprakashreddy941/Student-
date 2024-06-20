import React, { useState, useEffect } from 'react';
import api from '../api';

const EditStudentForm = ({ studentId, initialStudent, onUpdate }) => {
  const [student, setStudent] = useState(initialStudent);

  useEffect(() => {
    setStudent(initialStudent);
  }, [initialStudent]);

  const handleChange = e => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.put(`/students/${studentId}`, student);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudentForm;
