import fetch from 'isomorphic-fetch'

export function fetchRatings () {
  const encodedURI = [
    {id: 1, name: 'Rafael Lopez', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 2, name: 'Corrie Johnson', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 3, name: 'Trevor James', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 4, name: 'Megan Brown', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'}
  ];

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}