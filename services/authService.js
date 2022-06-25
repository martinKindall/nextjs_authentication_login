import * as bcrypt from "bcryptjs"

const authServiceFactory = () => {

    const validate = async (password, dbPassword) => {
        return await bcrypt.compare(password, dbPassword);
    };

    return {validate};
};

module.exports = {
    authServiceFactory
};