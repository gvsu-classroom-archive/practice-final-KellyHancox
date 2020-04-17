function getInput(){
    var inputValue = document.getElementById('inputField').value;
    if(inputValue === '') {
        alert("You must put in a valid number to search");
    } else{
        loadDoc(inputValue)
    }
}

function displayData(data, inputValue) {

    let response = document.getElementById('totalResponse');
    
    var htmlString = `<h4>Order: ${inputValue} </h4>
    <table > 
    <tr>  
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
    </tr>`

    var totalCost = 0

    data.forEach((item) => {
      htmlString += `<tr>`
      for (var i = 0; i < 3; i ++){
        htmlString += `<td>`
        if(i == 0){
            htmlString += item.item;
        } else if (i == 1){
            htmlString += item.quantity;
        } else {
            htmlString += item.price;
            totalCost += item.price * item.quantity
        }
        htmlString += `</td>`
      }
      htmlString += `</tr>`
    });

    htmlString += `</table>`
    htmlString += `<hr/>
    <table>
        <tr>
            <th>Total</th>
            <td id="totalCost">${totalCost}</td>
        </tr>
    </table> `

    response.innerHTML = htmlString
    document.getElementById('totalResponse').style.visibility = "visible"
  }

function loadDoc(inputValue) {
    console.log("Fetching document");

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      console.log("Detected a change to readyState: " + xhr.readyState);
      console.log(xhr);
      if (xhr.readyState === 4) {
        console.log("The data is ready:");
        console.log("Data as received:");
        console.log(xhr.response);
        let data = ""
        try{
            data = JSON.parse(xhr.response);
        } catch {
            document.getElementById('totalResponse').innerHTML = "No response found, try again"
        }
        console.log("Data after being parsed: ");
        console.log(data);
        displayData(data, inputValue);          
      } else {
        document.getElementById('totalResponse').innerHTML = "No response found, try again"
      }
    }

    xhr.open("GET", "https://www.cis.gvsu.edu/~kurmasz/Orders/" + inputValue, true);
    xhr.send();
  }

  document.getElementById('submit').addEventListener('click', getInput);


