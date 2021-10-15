const CodeConstant = require('../constants/CodeConstants');

class SSBResponse {
    constructor() {
        this.resultCode = CodeConstant.SUCCESS_CODE;
        this.resultDesc = CodeConstant.STATUS_SUCCESS;
        this.developerMessage = CodeConstant.STATUS_SUCCESS;;
    }
}

module.exports = SSBResponse;