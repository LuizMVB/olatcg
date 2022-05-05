const validateSeqFileContent = (strContent) => {
    let re1 = new RegExp('\n', 'g');
    let re2 = new RegExp('[atcgATCG]', 'g');
    if(strContent.replaceAll(re1, '').replaceAll(re2, '').trim().length === 0) {
        return true;
    }
    return false;
};

const ValidationService = {
    validateSeqFileContent: validateSeqFileContent
};

export default ValidationService;