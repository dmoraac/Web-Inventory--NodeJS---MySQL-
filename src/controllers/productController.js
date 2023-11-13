const controller = {};


// Método para llamar a HOME.

controller.home = (req, res) => {
    res.render('home');
};


// Método para CONSULTAR datos en la Base de Datos.

controller.listProducts = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tbl_product', (err, products) => {
            if(err){
                res.json(err);
            }
            res.render('products', {
                data: products
            });
        });
    });
};

// Método para INSERTAR datos en la Base de Datos.

controller.saveProduct = (req, res) => {

    const data_form = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tbl_product set ?', [data_form], (err, product) => {
            res.redirect('/products');
        });
    });
};

// Método para MODIFICAR datos de la Base de Datos.

controller.editProduct = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tbl_product WHERE id = ?', [id], (err, product) => {
            res.render('products_edit', {
                data: product[0]
            });
        });
    });
};


controller.updateProduct = (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tbl_product set ? WHERE id = ?', [newProduct, id], (err, rows) => {
        res.redirect('/products');
        });
    });
};

// Método para ELIMINAR datos de la Base de Datos.

controller.deleteProduct = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tbl_product WHERE id = ?', [id], (err, rows) => {
            res.redirect('/products');
        });
    });
};



module.exports = controller;