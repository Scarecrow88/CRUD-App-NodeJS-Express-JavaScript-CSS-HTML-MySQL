const controller = {};
// Leer datos
controller.list = (req, res) => {
    req.getConnection ((err, conn) => {
        conn.query ('SELECT * FROM PEOPLE', (err, people) => {
            if (err) {
                res.json (err)
            }
            console.log (people);
            res.render ('index.ejs', {
                data: people
            });
        });
    });
}
// Insertar dato
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection ((err, conn) => {
        conn.query ('INSERT INTO PEOPLE SET ?', [data], (err, rows) => {
            console.log (rows);
            res.redirect ('/')
        });
    });
}
// Editar dato
controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection ((err, conn) => {
        conn.query ('SELECT * FROM PEOPLE WHERE PEOID = ?', [id], (err, people) => {
            res.render ('edit.ejs', {
                data: people [0]
            })
        });
    });
}
// Actualizar dato
controller.update = (req, res) => {
    const {id} = req.params;
    const newPeople = req.body;
    req.getConnection ((err, conn) => {
        conn.query ('UPDATE PEOPLE SET ? WHERE PEOID = ?', [newPeople, id], (err, row) => {
            res.redirect ('/');
        })
    })
}
// Eliminar dato
controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection ((err, conn) => {
        conn.query ('DELETE FROM PEOPLE WHERE PEOID = ?', [id], (err, rows) => {
            res.redirect ('/');
        });
    });
}
module.exports = controller;