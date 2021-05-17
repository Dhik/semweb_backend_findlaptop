module.exports = fn = data => {
    return {
        "company": data.company ? data.company.value : '',
    }
}