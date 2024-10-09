const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// Create employee
router.post('/', async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
});

// Get all employees
router.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

// Update employee
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedEmployee);
});

// Delete employee
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.send('Employee deleted');
});

module.exports = router;
