export async function api(path, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...options.headers,
  };

  // 🔥 só adiciona content-type se NÃO for FormData
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  const res = await fetch(API_URL + path, {
    ...options,
    headers,
  });

  return res.json();
}