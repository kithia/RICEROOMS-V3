CREATE TABLE FormSub (
    formID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dateSubmitted DATETIME NOT NULL,
    fName TINYTEXT,
    lName TINYTEXT,
    mobile TINYTEXT,
    email MEDIUMTEXT NOT NULL,
    university TINYTEXT,
    course MEDIUMTEXT,
    mCampus MEDIUMTEXT,
    wBudgetPP SMALLINT,
    noTenants TINYINT,
    noWeeks TINYINT,
    comments MEDIUMTEXT

);

//constraint added to set datettime auto

CREATE TABLE Stock(
    stockID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dateAdded DATETIME NOT NULL,
    annualPrice DOUBLE,
    address LONGTEXT,
    postcode TINYTEXT,
    longitude DOUBLE,
    latitude DOUBLE,
    stockType TINYTEXT,
    noBeds SMALLINT,
    noBathrooms SMALLINT,
    livingSpace BOOLEAN,
    status SMALLTEXT
);

CREATE TABLE StockDesc(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    stockID INT NOT NULL,
    description LONGTEXT,
    mainImage LONGTEXT,
    FOREIGN KEY (stockID) REFERENCES Stock(stockID)
)

CREATE TABLE Property_Bundle(
    BundleID INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PropertyType TINYTEXT,
    MainAddress TINYTEXT,
    Headline TINYTEXT,
    Summary LONGTEXT,
    Features LONGTEXT,
    Safety LONGTEXT
);

CREATE TABLE Static_Property(
    PID INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BundleID INT(8) NOT NULL,
    DateAdded DATETIME,
    Category TINYTEXT,
    AvQuantity TINYINT,
    Address LONGTEXT,
    Headline LONGTEXT,
    PricePA DOUBLE,
    Deposit DOUBLE,
    Beds TINYINT,
    Bathrooms TINYINT,
    LivingSpace TINYINT,
    AdditionalInfo TINYTEXT,
    FOREIGN KEY (BundleID) REFERENCES Property_Bundle(BundleID)
);

CREATE TABLE Dynamic_Property(
    PID INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BundleID INT(8) NOT NULL,
    DateAdded DATETIME,
    Category TINYTEXT,
    AvQuantity TINYINT,
    Address LONGTEXT,
    Headline LONGTEXT,
    PricePA DOUBLE,
    Deposit DOUBLE,
    Beds TINYINT,
    Bathrooms TINYINT,
    LivingSpace TINYINT,
    AdditionalInfo TINYTEXT,
    FOREIGN KEY (BundleID) REFERENCES Property_Bundle(BundleID)
);

CREATE TABLE Images(
    ID INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BundleID INT (8) NOT NULL,
    ImageURL LONGTEXT,
    MainImage TINYINT(1),
    FOREIGN KEY (BundleID) REFERENCES Property_Bundle(BundleID)
);