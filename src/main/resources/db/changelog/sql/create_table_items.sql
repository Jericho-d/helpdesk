CREATE TABLE IF NOT EXISTS items
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255),
    price       INT,
    description VARCHAR(255)
);