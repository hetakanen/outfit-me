const host = "http://localhost:3000/graphql";

export const createClothing = async () => await fetch(host, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        mutation {
            createClothing(
                photoUrl: "01.jpg"
                type: SHIRT
            ) {
              photoUrl
              type
            }
        }
    `,
  })
})
  .then((res) => res.json())

export const getClothing = async () => await fetch(`${host}?query=query{clothing{photoUrl,type,id}}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then((res) => res.json())
