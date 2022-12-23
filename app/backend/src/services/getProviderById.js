const { Provider } = require('../database/models');

const getProvider = async (id) => {
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

module.exports = {
    getProvider,
};