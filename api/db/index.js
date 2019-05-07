const { Pool } = require( 'pg' );
const config = require( '../config/db_conf' );

const pool = new Pool( config );

module.exports = {
  query: (
    text, params, callback,
  ) => pool.query(
    text, params, callback,
  ),
};
