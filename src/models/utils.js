function createDate(fecha, tiempo) {
  // const zonaHoraria = '03:00';
  // const combinedString = `${fecha}T${tiempo}:00.000-${zonaHoraria}`;
  const combinedString = `${fecha}T${tiempo}:00.000Z`;
  const parsedDate = new Date(combinedString);
  return parsedDate;
}

module.exports = {createDate};
