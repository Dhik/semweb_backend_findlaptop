const axios = require('axios');
const qs = require('qs');

const BASE_URL = "http://localhost:3030"; // URL Fuseki
// const BASE_URL = 'http://localhost:3030'; // URL Fuseki

// http headers request
const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getByProduct = async (param) => {

    const inches = param.inches ? `FILTER(?inches = ${param.inches})` : '';

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT ?s ?company ?product ?typeName ?inches ?screenResolution ?cpu ?ram ?memory ?gpu ?opSys ?weight ?price 
        WHERE {
  			?s rdf:type data:laptop.
            OPTIONAL {?s data:Company ?company.}
            OPTIONAL {?s data:Product ?product.}
            OPTIONAL {?s data:TypeName ?typeName.}
            OPTIONAL {?s data:Inches ?inches.}
            OPTIONAL {?s data:ScreenResolution ?screenResolution.}
            OPTIONAL {?s data:Cpu ?cpu.}
            OPTIONAL {?s data:Ram ?ram.}
            OPTIONAL {?s data:Memory ?memory.}
            OPTIONAL {?s data:Gpu ?gpu.}
            OPTIONAL {?s data:OpSys ?opSys.}
            OPTIONAL {?s data:Weight ?weight.}
            OPTIONAL {?s data:Price ?price.}
            ?s  data:ProductedBy ?companyid.
  			?companyid data:nameCompany ?company.
  			?s  data:isType ?typeid.
  			?typeid data:nameType ?typeName.
  			?s  data:haveRam ?ramid.
  			?ramid data:sizeRam ?ram.
  			?s  data:haveSize ?inchesid.
  			?inchesid data:size ?inches.
  			?s  data:haveStorage ?memoryid.
  			?memoryid data:storage ?memory.
  			?s  data:useOpSys ?opsysid.
  			?opsysid data:corp ?opSys.
            FILTER regex(?product, "${param.product ? param.product : ''}", "i")
            FILTER regex(?company, "${param.company ? param.company : ''}", "i")
            FILTER regex(?ram, "${param.ram ? param.ram : ''}", "i")
            FILTER regex(?opSys, "${param.operating_system ? param.operating_system : ''}", "i")
            ${inches}
            FILTER regex(?typeName, "${param.type ? param.type : ''}", "i")
            FILTER regex(?cpu, "${param.cpu ? param.cpu : ''}", "i")
            FILTER(?price > ${param.low ? param.low : 0} && ?price < ${param.high ? param.high : 1000000000})
        }
        LIMIT ${param.limit ? param.limit : 1000}`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

// Fungsi Get data dari fuseki server
exports.getAllCompany = async () => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT DISTINCT ?company  
        WHERE {
            ?s  data:ProductedBy ?companyid.
  			?companyid data:nameCompany ?company.
        }`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.getAllInches = async () => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT DISTINCT ?inches  
        WHERE {
            ?s  data:haveSize ?inchesid.
  			?inchesid data:size ?inches.
        }`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.getAllType = async () => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT DISTINCT ?typeName
        WHERE {
            ?s  data:isType ?typeid.
  			?typeid data:nameType ?typeName.
        }`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.getAllRam = async () => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT DISTINCT ?ram  
        WHERE {
            ?s  data:haveRam ?ramid.
  			?ramid data:sizeRam ?ram.
        }`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.getAll = async () => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT ?s ?company ?product ?typeName ?inches ?screenResolution ?cpu ?ram ?memory ?gpu ?opSys ?weight ?price 
        WHERE {
  			?s rdf:type data:laptop.
            OPTIONAL {?s data:Company ?company.}
            OPTIONAL {?s data:Product ?product.}
            OPTIONAL {?s data:TypeName ?typeName.}
            OPTIONAL {?s data:Inches ?inches.}
            OPTIONAL {?s data:ScreenResolution ?screenResolution.}
            OPTIONAL {?s data:Cpu ?cpu.}
            OPTIONAL {?s data:Ram ?ram.}
            OPTIONAL {?s data:Memory ?memory.}
            OPTIONAL {?s data:Gpu ?gpu.}
            OPTIONAL {?s data:OpSys ?opSys.}
            OPTIONAL {?s data:Weight ?weight.}
            OPTIONAL {?s data:Price ?price.}
            ?s  data:ProductedBy ?companyid.
  			?companyid data:nameCompany ?company.
  			?s  data:isType ?typeid.
  			?typeid data:nameType ?typeName.
  			?s  data:haveRam ?ramid.
  			?ramid data:sizeRam ?ram.
  			?s  data:haveSize ?inchesid.
  			?inchesid data:size ?inches.
  			?s  data:haveStorage ?memoryid.
  			?memoryid data:storage ?memory.
  			?s  data:useOpSys ?opsysid.
  			?opsysid data:corp ?opSys.
        }
        LIMIT 100`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/new_laptops/sparql`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}
module.exports = exports;