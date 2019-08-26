USE DSAdventures;
INSERT INTO ships 
	(
		sName, sClass, length, width, dateCommisioned,
        propulsionType, fuel, maxPassenger, crew
	)
VALUES ('Valliant', 'P', 1500, 250, '2035-08-05', 'SS', NULL, 1000, 100),
('Albatross', 'F', 500, 50, '2040-02-25', 'I', 'Xenon', 50, 5),
('Wanderer', 'P', 2000, 400, '2041-03-08', 'I', 'Argon', 2500, 400),
('Adventure', 'P', 2000, 400, '2042-03-08', 'I', 'Argon', 2500, 400),
('Intrepid', 'P', 2500, 500, '2045-03-08', 'I', 'Argon', 3000, 500),
('Reliant', 'C', 2500, 500, '2045-06-05', 'I', 'Helium', 0, 8),
('Jewel of Jupiter', 'P', 5000, 600, '2050-01-01', 'F', 'Hydrogen', 6000, 500);
INSERT INTO 
