export class ReadingService {
  getReadNow = async (token) => {
    let url = "http://localhost:3001/api/v1/news";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return await response.json();
  };

  addToReadLater = async (token, article) => {
    let url = "http://localhost:3001/api/v1/news";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(article),
    });
    return await response.json();
  };
}
