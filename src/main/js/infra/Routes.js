var BASE_URL = process.env.REACT_APP_BACKEND_URL || 'https://olatcg-backend.herokuapp.com';

var API_BASE_PATH = BASE_URL + '/api';

//BACKEND ROUTES
const Routes = {

    //ALIGNMENT
    ALIGN: API_BASE_PATH + '/sequenceAlignment/align',
    SEARCH_ALIGNMENTS: API_BASE_PATH + '/sequenceAlignment/search',

    //TAXONOMY SEARCH
    GET_TAXONOMY_FROM_SEQUENCES: API_BASE_PATH + '/taxonomySearch/getTaxonomyFromSequences',
    GET_TAXONOMY_SEARCH_RECORDS: API_BASE_PATH + '/taxonomySearch/search',
    GET_TAXONOMY_FROM_SEQUENCE: API_BASE_PATH + '/taxonomySearch/getTaxonomyNameFromSequenceId',
    BLASTN: API_BASE_PATH + '/taxonomySearch/getTaxonomyFromSequence',

    //PHYLOGENY
    GET_NEWICK_FROM_TAXONOMY: API_BASE_PATH + '/phylogeny/getNewickFromTaxonomy',
};

export default Routes;