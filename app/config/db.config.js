module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "admin_12345",
  DB: "tutorials",
  dialect: "mysql",
  define: {
    underscored: true,
    freezeTableName: true, //use singular table name
    timestamps: false, // I do not want timestamp fields by default
  },
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+03:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
