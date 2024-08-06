fetch(
    "https://api.igdb.com/v4/webhooks/",
    {
      method: 'GET',
      headers: {
        'Client-ID': 'Client ID',
        'Authorization': 'Bearer access_token',
      }
    }).then(response => {
      console.log(response.json());
    }).catch(err => {
      console.error(err);
    }
  );

const searchGames = (query) => {
    fetch(
        "https://api.igdb.com/v4/games",
        {
            method: 'POST',
            headers: {
                'Client-ID': 'Client ID',
                'Authorization': 'Bearer access_token',
            },
            body: `search "${query}"; fields name, summary; limit 10;`
        }
    ).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.error(err);
    });
};

searchGames("your search query");

const query = prompt("Enter your search query:");
searchGames(query);