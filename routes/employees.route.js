import { Router } from 'express'
import { 
    getEmployees,
    getEmployee, 
    createEmployee, 
    updateEmployee,
    deleteEmployee 
} from '../controllers/employees.controller.js'

const router = Router()

router.get('/api/employees', getEmployees)

router.get('/api/employees/:id', getEmployee)

router.post('/api/employees', createEmployee)

router.put('/api/employees/:id', updateEmployee)

router.delete('/api/employees/:id', deleteEmployee)

export default router