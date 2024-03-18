-- Elimina le tabelle se esistono già per evitare conflitti
DROP TABLE IF EXISTS movimenti;
DROP TABLE IF EXISTS users;

-- Crea la tabella users
CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL, 
    email VARCHAR(20) UNIQUE NOT NULL
);

-- Crea la tabella movimenti
CREATE TABLE movimenti (
    id_movimenti SERIAL PRIMARY KEY,
    id_user INT NOT NULL,
    tipo VARCHAR(7) NOT NULL,
    importo DECIMAL(10,2) NOT NULL,
    data_movimento DATE NOT NULL,
    descrizione VARCHAR(255),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    CHECK (tipo IN ('entrata', 'uscita'))
);







