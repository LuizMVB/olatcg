var BASE_URL = process.env.REACT_APP_BACKEND_URL || 'https://olatcg-backend.herokuapp.com';

// a mudar
var API_BASE_PATH = BASE_URL + '';

//BACKEND ROUTES
const Routes = {

    //GLOBAL ALIGNMENT
    DNA_GLOBAL_ALN: API_BASE_PATH + '/dnaGlobalAlignment',
    RNA_GLOBAL_ALN: API_BASE_PATH + '/rnaGlobalAlignment',
    PTN_GLOBAL_ALN: API_BASE_PATH + '/proteinGlobalAlignment',

    //LOCAL ALIGNMENT
    DNA_LOCAL_ALN:  API_BASE_PATH + '/dnaLocalAlignment',
    RNA_LOCAL_ALN:  API_BASE_PATH + '/rnaLocalAlignment',
    PTN_LOCAL_ALN: API_BASE_PATH + '/proteinLocalAlignment',

    //HOMOLOGY SEARCH
    DEFINE_SEQ_FILE: API_BASE_PATH + '/defineTaxSeqsFile',

    //PHYLOGENETIC TREE
    GET_TREES: API_BASE_PATH + '/get_trees',
    CREATE_TREE: API_BASE_PATH + '/create_tree',

    //TASK TABLE
    GET_ALIGN_TABLE: API_BASE_PATH + '/getAlignTable',

    //TASK TABLE HOMOLOGY SEARCH
    GET_HOMOLOGY_SEARCH_TABLE: API_BASE_PATH + '/getHomologySearchTable',
    GET_HOMOLOGY_SEARCH_OUTPUT_TABLE: API_BASE_PATH + '/getHomologySearchOutputTable',
};

export default Routes;