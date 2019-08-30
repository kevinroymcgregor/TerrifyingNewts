CREATE DATABASE DSAdventures;
USE DSAdventures;
CREATE TABLE ships
	(
		id INT AUTO_INCREMENT NOT NULL,
        sName VARCHAR(100) NOT NULL,
        sClass CHAR NOT NULL,
        length INT NOT NULL,
		width INT NOT NULL,
        dateCommisioned DATE,
        propulsionType VARCHAR(3),
        fuel VARCHAR(15),
        maxPassenger INT NOT NULL,
        crew INT NOT NULL,
        PRIMARY KEY (id)
    );
CREATE TABLE passengers 
	(
		id INT AUTO_INCREMENT NOT NULL,
        last_name VARCHAR(120) NOT NULL,
        first_name VARCHAR(120) NOT NULL,
        email_address VARCHAR(150) NOT NULL,
        phone_number VARCHAR(15) NOT NULL,
        age INT,
        street_address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state_province VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        planet VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
    );
CREATE TABLE destinations
	(
		id INT AUTO_INCREMENT NOT NULL,
        dName VARCHAR(100) NOT NULL,
        location VARCHAR(25) NOT NULL,
        berths INT NOT NULL,
        dock_stations INT NOT NULL,
        PRIMARY KEY (id)
    );
CREATE TABLE cruises
	(
		id INT AUTO_INCREMENT NOT NULL,
        ship_id INT NOT NULL,
        depart_id INT NOT NULL,
        dest_id INT NOT NULL,
        depart_date DATETIME NOT NULL,
        arrival_date DATETIME NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (ship_id) REFERENCES ships(id)
    );
CREATE TABLE reservations
	(
		cruise_id INT NOT NULL,
        passenger_id INT NOT NULL,
        PRIMARY KEY (cruise_id, passenger_id),
        FOREIGN KEY (cruise_id) REFERENCES cruises(id),
        FOREIGN KEY (passenger_id) REFERENCES passengers(id)
    )