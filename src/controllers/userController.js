const controller = {};


// Método para llamar a HOME.

controller.home = (req, res) => {
    res.render('home');
};

// Método para CONSULTAR datos en la Base de Datos.

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tbl_user', (err, users) => {
            if(err){
                res.json(err);
            }
            res.render('users', {
                data: users
            });
        });
    });
};

// Método para INSERTAR datos en la Base de Datos.

controller.save = (req, res) => {

    const data_form = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tbl_user set ?', [data_form], (err, user) => {
            res.redirect('/users');
        });
    });
};

// Método para MODIFICAR datos de la Base de Datos.

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tbl_user WHERE id = ?', [id], (err, user) => {
            res.render('users_edit', {
                data: user[0]
            });
        });
    });
};


controller.update = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tbl_user set ? WHERE id = ?', [newUser, id], (err, rows) => {
        res.redirect('/');
        });
    });
};

// Método para ELIMINAR datos de la Base de Datos.

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tbl_user WHERE id = ?', [id], (err, rows) => {
            res.redirect('/users');
        });
    });
};

module.exports = controller;