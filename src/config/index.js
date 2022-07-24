const config = {
  api: {
    baseUrl: "https://reqres.in/api/",
    timeout: 60000,
  },
};

export default (key) => {
  let path = key.split(".");
  let current = config;
  for (let i = 0; i < path.length; i++) {
    if (current[path[i]] == undefined) return key;
    current = current[path[i]];
  }
  return current;
};
