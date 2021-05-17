module.exports = fn = data => {
    return {
        "company": data.company ? data.company.value : '',
        "product": data.product ? data.product.value : '',
        "typeName": data.typeName ? data.typeName.value : '',
        "inches": data.inches ? data.inches.value : '',
        "screenResolution": data.screenResolution ? data.screenResolution.value : '',
        "cpu": data.cpu ? data.cpu.value : '',
        "ram": data.ram ? data.ram.value : '',
        "memory": data.memory ? data.memory.value : '',
        "gpu": data.gpu ? data.gpu.value : '',
        "opSys": data.opSys ? data.opSys.value : '',
        "weight": data.weight ? data.weight.value : '',
        "price": data.price ? data.price.value : '',
    }
}