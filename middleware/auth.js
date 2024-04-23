const fs = require('fs');

const Auth = {
    getUserId: () => {
        const tokens = '';
        fs.readFile('token.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo');
            } else {
                const token = data;
                tokens = token;
                console.log('Token leído del archivo:', token);
                // Aquí puedes utilizar el token como lo necesites en tu aplicación
            }
        });
        return tokens;
    }
}


module.exports = Auth;


