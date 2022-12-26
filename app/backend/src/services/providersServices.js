const { Provider } = require('../database/models');

const readProviderById = async (id) => {
    const provider = await Provider.findByPk(id);
    
    if (!provider) {
        return {
            error: {
                code: 'notFound',
                message: 'Provider does not exist',
            },
        };
    }
    return provider;
};

const readAllProviders = async () => {
    const providers = await Provider.findAll();
    
    if (!providers) {
        return {
            error: {
                code: 'notFound',
                message: 'Providers not Found',
            },
        };
    }
    return providers;
};

const verifyAlreadyExist = async (name) => {
    const providerInDB = await Provider.findAll({
        where: { name },
    });

    if (providerInDB.length !== 0) {
        return {
            error: {
                code: 'conflict',
                message: 'Provider already registered',
            },
        };
    }
};

const createProvider = async (provider) => {   
    const params = ['name', 'tradingName'];
    const paramsOrder = Object.keys(provider); 

    const verifyParams = params.every((element) => paramsOrder.includes(element));
    if (!verifyParams) {
        return {
            error: { code: 'badRequest', message: 'Parameters are missing' },
        };
    }

    const { name } = provider;

    const providerExist = await verifyAlreadyExist(name);
    if (providerExist) return providerExist;

    return Provider.create(provider);
};

const updateProvider = async (provider, id) => {
    const providerExist = await Provider.findByPk(id);
    
    if (!providerExist) {
        return {
            error: {
                code: 'notFound',
                message: 'Provider not Found',
            },
        };
    }

    const { name, tradingName, cashforceTax, responsibleName } = provider;

    await Provider.update({
            name,
            tradingName,
            cashforceTax,
            responsibleName,
        },
        { where: { id } });

    return Provider.findByPk(id);
};

const deleteProvider = async (id) => {
    const providerExist = await Provider.findByPk(id);
    
    if (!providerExist) {
        return {
            error: {
                code: 'notFound',
                message: 'Provider not Found',
            },
        };
    }

    return Provider.destroy({ where: { id } });
};

module.exports = {
    readAllProviders,
    readProviderById,
    createProvider,
    updateProvider,
    deleteProvider,
};
