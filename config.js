import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3001
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.PASSWORD || 'q04I-V3ao-k17O-LtK2'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'nodemysqlapi'
export const DB_PORT = process.env.DB_PORT || 3306

