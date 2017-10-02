import { Connection, query, db } from 'stardog';

const conn = new Connection({
    username: 'admin',
    password: 'admin',
    endpoint: 'http://localhost:5820'
});
const dbName = 'exercise';  // Can be changed
const uriPrefix = 'http://stardog.com/ontologies/lunarFeline#';

const doQuery = q => {
    return query.execute(conn, dbName, q, {}, { reasoning: true })
        .then(res => {
            if (res.body && res.body.results) {
                return res.body.results.bindings;
            }
            return [];
        });
};

// Returns all entity types / classes
export const getEntityTypes = () =>
    doQuery('SELECT DISTINCT ?class WHERE {?class a owl:Class} ORDER BY ?class')
        .then(bindings => bindings.map(b => b.class.value)
            .filter(b => b.startsWith(uriPrefix))
            .map(b => b.substring(uriPrefix.length)));

// Returns all individuals of a given entity type
export const getIndividuals = (entityType) => {
    let type = entityType ? `:${entityType}` : 'owl:NamedIndividual';
    return doQuery(`SELECT DISTINCT ?s WHERE {?s a ${type}} ORDER BY ?s`)
        .then(bindings => bindings.map(b => b.s.value)
            .filter(b => b.startsWith(uriPrefix))
            .map(b => b.substring(uriPrefix.length)));
};

// Returns all predicates, or optionally all predicates than can originate from a given entity type
export const getPredicates = (entityTypeFrom, entityTypeTo) => {
    let typeFrom = entityTypeFrom ? `:${entityTypeFrom}` : 'owl:NamedIndividual';
    let typeTo = entityTypeTo ? `:${entityTypeTo}` : 'owl:NamedIndividual';
    return doQuery(`SELECT DISTINCT ?p WHERE {?s a ${typeFrom} ; ?p ?o . ?o a ${typeTo}} ORDER BY ?p`)
        .then(bindings => bindings.map(b => b.p.value)
            .filter(b => b.startsWith(uriPrefix))
            .map(b => b.substring(uriPrefix.length)));
};