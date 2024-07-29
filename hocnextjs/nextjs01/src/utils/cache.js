export const clearCachePath = async (path) => {
  const response = await fetch(process.env.APP_URL + "/api/cache", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "path", value: path }),
  });
  return response.ok;
};

export const clearCacheTag = async (tag) => {
  const response = await fetch(process.env.APP_URL + "/api/cache", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "tag", value: tag }),
  });
  return response.ok;
};
