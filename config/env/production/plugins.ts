export default ({ env }) => {
    const config: any = {
        'users-permissions': {
            config: {
                jwtSecret: env('JWT_SECRET'),
            },
        },
    };

    return config;
};

