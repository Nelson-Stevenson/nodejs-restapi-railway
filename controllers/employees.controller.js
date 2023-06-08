import {connection} from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await connection.execute(
            'SELECT * FROM employees'
        )
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}

export const getEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await connection.execute(
            'SELECT * FROM employees WHERE id = ?', [id]
        )
        if (rows.length == 0) {
            return res.sendStatus(404)
        }
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}

export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await connection.execute(
            'INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary]
        );
        res.send({
            id: rows.insertId,
            name: name,
            salary: salary
        })
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}

export const updateEmployee =  async (req, res) => {
    try {
        const {name, salary} = req.body
        let {id} = req.params
        const [result] = await connection.execute(
            'UPDATE employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Empleado no encontrado'})
        }
        const [rows] = await connection.execute(
            'SELECT * FROM employees WHERE id = ?', [id]
        )
        res.json(rows[0]) 
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const [result] = await connection.execute(
            'DELETE FROM employees WHERE id = ?', [id]
        )
        if (result.affectedRows > 0) {
            return res.sendStatus(204)
        } else {
            return res.status(404).json({message: 'Empleado no encontrado'})
        }
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}