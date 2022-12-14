const modelPersonal = {
    queryGetPersonalByID: `SELECT * FROM Personal WHERE ID = ?`,
    queryDeletePersonalByID: `UPDATE Personal SET Activo = 'N' WHERE ID = ?`,
    queryPersonalExist: `SELECT Correo FROM Personal WHERE Correo = ? `,
    queryAgregar: `INSERT INTO Personal(
        ID,
        Nombre, 
        Apellido,
        Cargo,
        Num_tel,
        Correo,
        Direccion,
        Activo) 
    VALUES(
        ?,?,?,?,?,?,?,?)`,
}

module.exports = modelPersonal