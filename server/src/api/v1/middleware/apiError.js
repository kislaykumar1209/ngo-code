class ApiError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
    }

    static badRequest(msg) {
        return new ApiError(400, msg);
    }

    static notFound(msg) {
        return new ApiError(404, msg || 'Not found');
    }

    static notActive(msg) {
        return new ApiError(403, msg || 'Found but not active');
    }

    static notAuthorized() {
        return new ApiError(401, 'User Not Authorized');
    }

    static internal(err) {
        if(err.message.includes('Data too long for column')){
        return new ApiError(500, 'Less than 1000 Strings allowed')}
        else{
            return new ApiError(500, 'Server error : ' + err.message)   
        }
    }
}

module.exports = ApiError;