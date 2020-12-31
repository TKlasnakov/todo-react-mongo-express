function handleErrors (errors) {
    return Object.keys(errors)
        .map(error => ({errorMessage: errors[error].properties.message}))
}

module.exports = handleErrors;
