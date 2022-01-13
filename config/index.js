const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3004' : 'https://listou-api.herokuapp.com/api/';