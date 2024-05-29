const con = require('../database/dbConnection');

// Funções CRUD para produtos

exports.createProduct = async (productData) => {
    try {
        const query = 'INSERT INTO produto SET ?';
        const [result] = await con.promise().query(query, productData);
        return { id: result.insertId, ...productData };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAllProducts = async () => {
    try {
        const query = 'SELECT * FROM produto';
        const [rows] = await con.promise().query(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getProductById = async (productId) => {
    try {
        const query = 'SELECT * FROM produto WHERE id = ?';
        const [rows] = await con.promise().query(query, [productId]);
        if (rows.length === 0) {
            throw new Error('Produto não encontrado');
        }
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateProductById = async (productId, productData) => {
    try {
        const query = 'UPDATE produto SET ? WHERE id = ?';
        const [result] = await con.promise().query(query, [productData, productId]);
        if (result.affectedRows === 0) {
            throw new Error('Produto não encontrado');
        }
        return { message: 'Produto atualizado com sucesso' };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteProductById = async (productId) => {
    try {
        const query = 'DELETE FROM produto WHERE id = ?';
        const [result] = await con.promise().query(query, [productId]);
        if (result.affectedRows === 0) {
            throw new Error('Produto não encontrado');
        }
        return { message: 'Produto excluído com sucesso' };
    } catch (error) {
        throw new Error(error.message);
    }
};
