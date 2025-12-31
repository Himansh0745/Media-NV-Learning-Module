export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'change-me',
    expiresIn: process.env.JWT_EXPIRES_IN || '10h',
  },
  auth: {
    refreshTokenTtl: process.env.REFRESH_TOKEN_TTL_SECONDS || '604800', // 7 days
    resetTokenTtl: process.env.RESET_TOKEN_TTL_SECONDS || '3600', // 1 hour
  },
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'jwt_auth',
  },
});
