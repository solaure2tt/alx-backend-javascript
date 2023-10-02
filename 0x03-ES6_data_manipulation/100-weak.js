export const wMap = new WeakMap();

export const qAPI = (endpoint) => {
  if (wMap.has(endpoint)) {
    const endpointData = wMap.get(endpoint);
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    wMap.set(endpoint, (endpointData + 1));
  } else {
    wMap.set(endpoint, 1);
  }
};
