import {connection} from "../Database/db.js";
import {response} from "express";

export const getDefault = async (req, res = response) =>{
    try {
        const conn = await connection.getConnection()

        const [result] = await conn.execute(`SELECT * FROM table`)
        conn.release()
        res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false, error: true, msg: 'se ha producido un error'})
    }

}




