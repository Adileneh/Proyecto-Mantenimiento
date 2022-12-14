const {request, response } = require("express");
const pool = require("../db/connection");
const modelPersonal = require("../models/Personal");


const addPersonal = async (req = request, res = response)=>{
    const{
        ID,
        Name, 
        Apellido,
        Cargo,
        Num_Tel,
        Correo,
        Direccion,
        Activo = "S"   

    } = req.body



if( !ID||
    !Name|| 
    !Apellido||
    !Num_Tel||
    !Correo||
    !Direccion)

    {
        res.status(400).json({msg:"hacen falta datos!"})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection() //realizamos la conexion

        const [PersonalExist] = await conn.query(modelPersonal.queryPersonalExist,[Correo])

        if(PersonalExist){
            res.status(400).json({msg:`Personal ${Correo} ya esta registrado en la base de defaultOptions.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(modelPersonal.queryAgregar,[
        ID,
        Name, 
        Apellido,
        Cargo,
        Num_Tel,
        Correo,
        Direccion,
        Activo], (error) =>{if (error) throw error})




            if(result.affectedRows ==0){ //en caso de no haber registros lo informamos
            res.status(400).json({msg: `no se puede agregar personal a la base de datos`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente el personal a la base de datos`}) //Se manda la lista de usuarios
     }
     catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
}

finally{
    if(conn) conn.end() //Termina la conexion
}
}

const deletePersonalById = async (req = request, res = response) =>{
    const {id} = req.params
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
           const result = await conn.query(modelPersonal.queryDeletePersonalByID, [id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe Personal registrado con el ID ${id}`})
                return
            }
    
             res.json({msg:`Se elimino satisfactoriamente el Personal`}) //Se manda la lista de usuarios
        }
        catch(error){
           console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
       finally{
            if(conn) conn.end() //Termina la conexion
        }
    
    }    

    const getPersonalID = async (req = request, res = response) =>{
        const {id} = req.params
       let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
            const [Personal] = await conn.query(modelPersonal.queryGetPersonalByID, [id], (error) => {if (error) throw error})
    
            if (!Personal){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe Personal registrado con el ID ${id}`})
                return
            }
    
            res.json({Personal}) //Se manda la lista de usuarios
       }
       catch(error){
            console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
        finally{
            if(conn) conn.end() //Termina la conexion
        }
        }
        
        const updatePersonalByID = async (req = request, res = response) =>{
            const {id} = req.params
                    const {
                        Name, 
                        Apellido,
                        Cargo,
                        Num_Tel,
                        Correo,
                        Direccion,
                        Activo

                           } = req.body
                    
                    if(
                        !Name|| 
                        !Apellido||
                        !Cargo||
                        !Num_Tel||
                        !Correo||
                        !Direccion||
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
                        const result = await conn.query(`UPDATE Personal SET 
                        Nombre = '${Name}', 
                        Apellido = '${Apellido}',
                        Cargo = '${Cargo}',
                        Num_Tel = '${Num_Tel}',
                        Correo = '${Correo}',
                        Direccion = '${Direccion}',
                        Activo = '${Activo}'
                        WHERE ID = ${id}`, (error) => {if (error) throw error})
                
                        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                            res.status(400).json({msg: `No se pudo modificar el Personal`})
                            return
                        }
                
                        res.json({msg:`Se modifico satisfactoriamente el Personal`}) //Se manda la lista de usuarios
                    }
                    catch(error){
                        console.log(error)
                        res.status(500).json({msg: error}) //Informamos el error
                    }
                    
                    finally{
                        if(conn) conn.end() //Termina la conexion
                   }
            }

            const getPersonal= async (req = request, res = response) => {
                let conn;
                
                try{
                    conn = await pool.getConnection() //Realizamons la conexion
            
                    //Generamos la consulta
                    const users = await conn.query("SELECT * FROM Personal", (error) => {if (error) throw error})
            
                    if (users.length===0){ //En caso de no haber registros lo informamos
                        res.status(404).json({msg: "No existen usuarios registrados"})
                        return
                    }
            
                    res.json({users}) //Se manda la lista de usuarios
                }
                catch(error){
                    console.log(error)
                    res.status(500).json({msg: error}) //Informamos el error
                }
                
                finally{
                    if(conn) conn.end() //Termina la conexion
                }
                }
            
                
            module.exports = {addPersonal, deletePersonalById, updatePersonalByID, getPersonalID, getPersonal}     