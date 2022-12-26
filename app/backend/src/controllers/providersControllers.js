const { readProviderById } = require('../services/providersServices');

const readById = async (req, res, next) => {
    const { id } = req.params;
    const provider = await readProviderById(id);

    if (provider.error) return next(provider.error);

    return res.status(200).json(provider);
};

module.exports = { 
    readById,
};
