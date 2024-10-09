import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditEmployee() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({ name: '', email: '', mobile: '', designation: '', gender: '', course: [] });

    useEffect(() => {
        const fetchEmployee = async () => {
            const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
            setEmployee(res.data);
        };
        fetchEmployee();
    }, [id]);

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
        await axios.put(`http://localhost:5000/api/employees/${id}`, employee);
        // Redirect or show success message
        window.location.href = '/employees';
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Employee</h2>
            <input type="text" name="name" value={employee.name} onChange={handleChange} required />
            <input type="email" name="email" value={employee.email} onChange={handleChange} required />
            <input type="text" name="mobile" value={employee.mobile} onChange={handleChange} required />
            <select name="designation" value={employee.designation} onChange={handleChange} required>
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>
            <div>
                <label>Gender:</label>
                <label><input type="radio" name="gender" value="M" checked={employee.gender === 'M'} onChange={handleChange} required /> Male</label>
                <label><input type="radio" name="gender" value="F" checked={employee.gender === 'F'} onChange={handleChange} required /> Female</label>
            </div>
            <div>
                <label>Course:</label>
                <label><input type="checkbox" value="MCA" checked={employee.course.includes('MCA')} onChange={handleCheckboxChange} /> MCA</label>
                <label><input type="checkbox" value="BCA" checked={employee.course.includes('BCA')} onChange={handleCheckboxChange} /> BCA</label>
                <label><input type="checkbox" value="BSC" checked={employee.course.includes('BSC')} onChange={handleCheckboxChange} /> BSC</label>
            </div>
            <button type="submit">Update Employee</button>
        </form>
    );
}

export default EditEmployee;
