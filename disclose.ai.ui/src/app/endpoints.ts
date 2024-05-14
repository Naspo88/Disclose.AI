const base = 'https://8kq9kn2ojj.execute-api.eu-west-1.amazonaws.com';

export const endpoints = {
  setUser: `${base}/api/user`,
  gameState: (name: string) => `${base}/api/state?name=${name}`,
};
