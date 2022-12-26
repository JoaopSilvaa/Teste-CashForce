const {
    readAllProviders,
    createProvider,
    updateProvider,
    readProviderById,
    deleteProvider,
} = require('../services/providersServices');

const readAll = async (_req, res, next) => {
    const providers = await readAllProviders();

    if (providers.error) return next(providers.error);

    return res.status(200).json(providers);
};

const readById = async (req, res, next) => {
    const { id } = req.params;

    const provider = await readProviderById(id);

    if (provider.error) return next(provider.error);

    return res.status(200).json(provider);
};

const create = async (req, res, next) => {
    const provider = await createProvider(req.body);

    if (provider.error) return next(provider.error);

    return res.status(201).json(provider);
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const provider = await updateProvider(req.body, id);

    if (provider.error) return next(provider.error);

    return res.status(200).json(provider);
};

const remove = async (req, res, next) => {
    const { id } = req.params;
    const provider = await deleteProvider(id);

    if (provider.error) return next(provider.error);

    return res.status(204).send();
};

module.exports = { 
    readAll,
    readById,
    create,
    update,
    remove,
};
