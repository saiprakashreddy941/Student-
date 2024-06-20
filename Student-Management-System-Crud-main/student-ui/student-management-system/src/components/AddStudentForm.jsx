// File: AddStudentForm.tsx

import React, { useState } from 'react';

interface StudentFormProps {
  onSubmit: (formData: FormData) => void;
}

const AddStudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    grade: '',
    // Add other fields as needed
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <input type="text" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required />
      {/* Add other inputs as needed */}
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
