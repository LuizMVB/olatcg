var BASE_URL = process.env.REACT_APP_BACKEND_URL || 'https://olatcg-backend.herokuapp.com';
var BASE_URL_INTEGRATION_API = process.env.REACT_APP_BACKEND_INTEGRATION_API_URL || 'https://olatcg-integration.herokuapp.com';

var API_BASE_PATH = BASE_URL + '';

var INTEGRATION_API_BASE_PATH = BASE_URL_INTEGRATION_API + '/api';

//BACKEND ROUTES
const Routes = {

    //GLOBAL ALIGNMENT

    /** OLD */
    DNA_GLOBAL_ALN: API_BASE_PATH + '/dnaGlobalAlignment',
    RNA_GLOBAL_ALN: API_BASE_PATH + '/rnaGlobalAlignment',
    PTN_GLOBAL_ALN: API_BASE_PATH + '/proteinGlobalAlignment',

    ALIGN: INTEGRATION_API_BASE_PATH + '/sequenceAlignment/align',

    //LOCAL ALIGNMENT
    DNA_LOCAL_ALN:  API_BASE_PATH + '/dnaLocalAlignment',
    RNA_LOCAL_ALN:  API_BASE_PATH + '/rnaLocalAlignment',
    PTN_LOCAL_ALN: API_BASE_PATH + '/proteinLocalAlignment',

    //HOMOLOGY SEARCH // TAXONOMY SEARCH

    /** OLD */
    DEFINE_SEQ_FILE: API_BASE_PATH + '/defineTaxSeqsFile', /** ATUALIZADO - RETIRAR NO FUTURO */

    /** NEW */
    GET_TAXONOMY_FROM_SEQUENCES: INTEGRATION_API_BASE_PATH + '/taxonomySearch/getTaxonomyFromSequences',
    GET_TAXONOMY_SEARCH_RECORDS: INTEGRATION_API_BASE_PATH + '/taxonomySearch/search',
    GET_TAXONOMY_FROM_SEQUENCE: INTEGRATION_API_BASE_PATH + '/taxonomySearch/getTaxonomyNameFromSequenceId',

    //PHYLOGENETIC TREE
    GET_TREES: API_BASE_PATH + '/get_trees',
    CREATE_TREE: API_BASE_PATH + '/create_tree',

    /** NEW */
    GET_NEWICK_FROM_TAXONOMY: INTEGRATION_API_BASE_PATH + '/phylogeny/getNewickFromTaxonomy',

    //TASK TABLE
    GET_ALIGN_TABLE: API_BASE_PATH + '/getAlignTable',

    SEARCH_ALIGNMENTS: INTEGRATION_API_BASE_PATH + '/sequenceAlignment/search',

    //TASK TABLE HOMOLOGY SEARCH

    GET_HOMOLOGY_SEARCH_TABLE: API_BASE_PATH + '/getHomologySearchTable',
    GET_HOMOLOGY_SEARCH_OUTPUT_TABLE: API_BASE_PATH + '/getHomologySearchOutputTable',
};

export default Routes;