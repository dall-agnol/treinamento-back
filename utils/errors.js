const sendError = (str, err) => {
    return {
        message: `Houve um erro ao ${str}`,
        error: err
    }
}

module.exports = sendError;