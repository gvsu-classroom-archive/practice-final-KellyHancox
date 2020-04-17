import React from 'react'
import API from './API'

function OrderUp({submitPress}) {
  const [currentInput, setCurrentInput] = React.useState([])

  let updateInput = (value) => {
    setCurrentInput(value);
  }

  return (
    <div>
      <h3>Put your order number here:</h3>
      <input
            type="text"
            className="form-control"
            autoComplete="input"
            name="input"
            id="input"
            placeholder=""
            onChange={event => updateInput(event.target.value)}
          />
      <button id='submit' onClick={event => submitPress(currentInput)}>Submit</button>
    </div>
  );
}

function OrderResponse({data, inputVal}) {

  const allOrders = data.map((item) => (
    <OrderRow key={item.price} item={item} />
  ));

  var totalCost = 0
  for( var i = 0; i < data.length; i++){
    console.log('ength', data.length)
    console.log(data[i].price)
    totalCost = totalCost + (data[i].price * data[i].quantity)
  }

  return (
    <div>
      <h4>Order: {inputVal} </h4>
      <table > 
        <tbody>
            <tr>  
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
        </tbody>
        {allOrders}
      </table>
      <hr/>
      <table>
        <tbody>
        <tr>
          <th>Total</th>
          <td id="totalCost">{totalCost.toFixed(2)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

function OrderRow({ item }) {

  return (
    <tbody>
      <tr>
        <td>{item.item}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
    </tbody>
  );
}

function OrderPage() {
  const [orders, setOrders] = React.useState([])
  const [inputVal, setInputVal] = React.useState([])

  const fetchOrders = (inputValue) => {
      API.fetchOrders(inputValue).then(data => {
        console.log('Received data')
        console.log(data)
        if (data) {
          setOrders(data)
          setInputVal(inputValue)
        } else {
          console.log("Failed")
        }
      }).catch(console.log("Failed"))
    }


    
  
  return (
    <div>
      <OrderUp submitPress={fetchOrders}/>
      <OrderResponse data={orders} inputVal={inputVal}></OrderResponse>

    </div>
  );
}

export default OrderPage;