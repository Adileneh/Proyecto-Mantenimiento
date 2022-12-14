const modelSolicitud = {
    queryGetSolicitud: `SELECT * FROM Mantenimiento`,
    queryGetSolicitudByID: `SELECT * FROM Mantenimiento WHERE ID = ?`,
    queryDeleteSolicitudByID: `UPDATE Mantenimiento SET Activo = 'N' WHERE ID = ?`,
    querySolicitudExist: `SELECT Solicitud FROM Mantenimiento WHERE ID = ? `,
    queryAddSolicitud: `INSERT INTO Mantenimiento(
        ID,
        Solicitud,
        Descripcion,
        Departamento,
        Activo) 
    VALUES(
        ?,?,?,?,?)`,
}

module.exports = modelSolicitud