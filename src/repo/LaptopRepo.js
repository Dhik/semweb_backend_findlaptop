const axios = require('axios');
const qs = require('qs');

// const BASE_URL = process.env.BASE_URL_FUSEKI; // URL Fuseki
const BASE_URL = 'http://localhost:3030'; // URL Fuseki


// http headers request
const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

// Fungsi Get data dari fuseki server
exports.getByCompany = async(param) => {

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
            OPTIONAL {?s data:Price_euros ?price.}
            FILTER regex(?company, "${param.company ? param.company : ''}", "i")
            FILTER(?price > ${param.low} && ?price < ${param.high})
        } LIMIT 5`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/laptops/sparql`, {
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

exports.getByProduct = async(param) => {

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
            OPTIONAL {?s data:Price_euros ?price.}
            FILTER regex(?product, "${param.product ? param.product : ''}", "i")
            FILTER(?price > ${param.low} && ?price < ${param.high})
        } LIMIT 5`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/laptops/sparql`, {
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