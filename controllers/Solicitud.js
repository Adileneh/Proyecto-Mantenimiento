const { request, response } = require("express");
const pool = require("../db/connection");
const modelSolicitud = require("../models/Solicitud");

const addSolicitud = async (req = request, res = response) =>{
    const {
        ID,
        Solicitud,
        Descripcion,
        Departamento,
        Activo = 'S'
        
        
    } = req.body
    
    if( !ID||
        !Solicitud||
        !Descripcion||
        !Departamento    
       )
    {
        res.status(400).json({msg:"Hacen falta datos!"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [SolicitudExist] = await conn.query(modelSolicitud.querySolicitudExist,[ID])

        if(SolicitudExist){
            res.status(400).json({msg: `La solicitud ${Solicitud} ya se encuntra registrado en la base de datos.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(modelSolicitud.queryAddSolicitud,[
            ID,
            Solicitud,
            Descripcion,
            Departamento,
            Activo], (error) => {if (error) throw error})

        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
            res.status(400).json({msg: `No se pudo agregar la solicitud a la base de datos`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente la solicitud a la base de datos`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const getSolicitud = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Solicitud = await conn.query(modelSolicitud.queryGetSolicitud, (error) => {if (error) throw error})

        if (Solicitud.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen Solicitudes registradas"})
            return
        }

        res.json({Solicitud}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }   

const deleteSolicitudById = async (req = request, res = response) =>{
    const {id} = req.params
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
           const result = await conn.query(modelSolicitud.queryDeleteSolicitudByID, [id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe Cliente registrado con el ID ${id}`})
                return
            }
    
             res.json({msg:`Se elimino satisfactoriamente el CLiente`}) //Se manda la lista de usuarios
        }
        catch(error){
            console.log(error)
             res.status(500).json({msg: error}) //Informamos el error
         }
         
        finally{
             if(conn) conn.end() //Termina la conexion
         }
     
     }    
 
 const getSolicitudByID = async (req = request, res = response) =>{
     const {id} = req.params
    let conn;
     
     try{
         conn = await pool.getConnection() //Realizamons la conexion
 
         //Generamos la consulta
         const [Solicitud] = await conn.query(modelSolicitud.queryGetSolicitudByID, [id], (error) => {if (error) throw error})
 
         if (!Solicitud){ //En caso de no haber registros lo informamos
             res.status(404).json({msg: `No existe cliente registrado con el ID ${id}`})
             return
         }
 
         res.json({Solicitud}) //Se manda la lista de usuarios
    }
    catch(error){
         console.log(error)
         res.status(500).json({msg: error}) //Informamos el error
     }

     finally{
        if(conn) conn.end() //Termina la conexion
    }
    } 

const updateSolicitudByID = async (req = request, res = response) =>{
    const {id} = req.params
            const {
                ID,
                Solicitud,
                Descripcion,
                Departamento,
                Activo} = req.body
            
            if(
                !ID||
                !Solicitud||
                !Descripcion||
                !Departamento||
                !Activo
               )
            {
                res.status(400).json({msg:"Faltan Datos"})
                return
            }

            let conn;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                //Generamos la consulta
                const result = await conn.query(`UPDATE Mantenimiento SET 
                ID = '${ID}',
                Solicitud = '${Solicitud}',
                Descripcion = '${Descripcion}',
                Departamento = '${Departamento}',
                Activo = '${Activo}'
                WHERE ID = ${id}`, (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo modificar la Solicitud
                    `})
                    return
                }
        
                res.json({msg:`Se modifico satisfactoriamente la Solicitud`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }

            finally{
                if(conn) conn.end() //Termina la conexion
           }
    }     
module.exports = {addSolicitud, getSolicitud, deleteSolicitudById, getSolicitudByID, updateSolicitudByID}