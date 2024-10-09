import React, { useState } from 'react';
import axios from 'axios';

function CreateEmployee() {
    const [employee, setEmployee] = useState({ name: '', email: '', mobile: '', designation: '', gender: '', course: [] });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setEmployee(prev => ({
            ...prev,
            course: checked ? [...prev.course, value] : prev.course.filter(c => c !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/employees', employee);
        // Redirect or show success message
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Employee</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
            <select name="designation" onChange={handleChange} required>
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>
            <div>
                <label>Gender:</label>
                <label><input type="radio" name="gender" value="M" onChange={handleChange} required /> Male</label>
                <label><input type="radio" name="gender" value="F" onChange={handleChange} required /> Female</label>
            </div>
            <div>
                <label>Course:</label>
                <label><input type="checkbox" value="MCA" onChange={handleCheckboxChange} /> MCA</label>
                <label><input type="checkbox" value="BCA" onChange={handleCheckboxChange} /> BCA</label>
                <label><input type="checkbox" value="BSC" onChange={handleCheckboxChange} /> BSC</label>
            </div>
            <button type="submit">Create Employee</button>
           
        </form>
    );
}

export default CreateEmployee;
