SET SESSION sql_mode = 'NO_ENGINE_SUBSTITUTION';
SELECT @@SESSION.sql_mode;

INSERT INTO Recipes VALUES ('Martini', 'A classic.', 'Stir for 30 seconds, strain into martini glass.', false, false, 'Mid 1800s to early 1900s');
INSERT INTO Recipes VALUES ('Gimlet', 'A delicious simple cocktail.', 'Shake for 15 seconds, double strain into coupe glass.', false, false, '1928');
INSERT INTO Recipes VALUES ('Manhattan', 'This classic cocktail should be served up.', 'Stir for 30 seconds, strain into coupe, add a cherry.', false, false, '1870s');
INSERT INTO Recipes VALUES ('Dickinson Square', 'Juicy, savory.', 'Shake hard, double strain.', true, false, '2022');
INSERT INTO Recipes VALUES ('Between Trains', 'The perfect drink.', 'Shake, pour in glass, top with red wine float.', true, false, '2021');
INSERT INTO Recipes VALUES ('Lost Evening', 'Fall crusher.', 'Build in glass, add ice and lemon wheel.', true, false, '2022');
INSERT INTO Recipes VALUES ('Margarita', 'Perfect for summer days.', 'Shake with ice, pour into salt rimmed glass.' , false, false, '1961');