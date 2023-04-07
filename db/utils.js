const { DB_USER, DB_PASS, DB_PROTOCOL, DB_HOST, DB_NAME } = process.env;

const getConnectionURI = () => {
  return `${DB_PROTOCOL}://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
};

module.exports = {
  getConnectionURI,
};
