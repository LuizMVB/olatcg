const validateSeqFileContent = strContent => {
    let re1 = new RegExp('\n', 'g');
    let re2 = new RegExp('[atcgATCG]', 'g');
    if(strContent.replaceAll(re1, '').replaceAll(re2, '').trim().length === 0) {
        return true;
    }
    return false;
};

const validateDnaSeq = seq => {
    let re = new RegExp('[atcgATCG]', 'g');
    return !seq.replaceAll(re, '');
}

const ValidationService = {
    validateSeqFileContent: validateSeqFileContent,
    validateDnaSeq: validateDnaSeq,
};

export default ValidationService;