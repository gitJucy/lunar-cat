const { Connection, query } = require('stardog');

const conn = new Connection({
    username: 'admin',
    password: 'admin',
    endpoint: 'http://localhost:5820',
});
const dbName = 'exercise';  // Can be changed
// const uriPrefix = 'http://stardog.com/ontologies/lunarFeline#';

const getEntityTypes = query.execute(conn, dbName, 'SELECT DISTINCT ?class WHERE {?class a owl:Class} ORDER BY ?class', {})
    .then(({ body }) => {
        // console.log(body.results.bindings)
});
export default {
    getEntityTypes
};
