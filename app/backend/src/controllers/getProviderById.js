const { getProvider } = require('../services/getProviderById');

const getProviderByIdController = async (req, res, next) => {
    const { id } = req.params;
    const provider = await getProvider(id);

    if (provider.error) return next(provider.error);

    return res.status(200).json(provider);
};

module.exports = { getProviderByIdController };
