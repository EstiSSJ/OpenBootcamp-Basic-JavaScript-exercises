function lanzarError(mensaje) {
    throw new Error(mensaje);
  }

  const winston = require("winston");

  try {
    lanzarError("Este es un error asesino jeje");
  } catch (error) {
    winston.error(error.message);
  }
  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: "error.log" })
    ]
  });
  
  try {
    lanzarError("Este es un error asesino jeje");
  } catch (error) {
    logger.error(error.message);
  }
