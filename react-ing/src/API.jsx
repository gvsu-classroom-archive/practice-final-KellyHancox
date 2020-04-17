const apiURL = 'https://www.cis.gvsu.edu/~kurmasz/Orders/'

export default class API {
  static fetchOrders (index) {
    return fetch(`${apiURL}/${index}`)
      .then(response => {
        // Notice: At this point, we have only the headers.  We can't
        // access the JSON data.
        console.log('Response from /orders ')
        console.log(response)

        if (response.ok) {
          return response.json()
        } else {
          //throw new Error(`Got a ${response.status} status.`)
          alert('Received error. try again.')
        }
      })
      .then(data => {
        console.log('JSON data from /orders')
        console.log(data)
        return data
      })
  } // end fetchOrders

} // end class API
