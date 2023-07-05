let cart = [];

    function addToCart(name, price) {
      let item = {
        name: name,
        price: price
      };
      cart.push(item);
      updateCart();
    }

    function removeItem(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      let cartList = document.getElementById("cartList");
      cartList.innerHTML = "";
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = item.name + " ($" + item.price.toFixed(2) + ")" +
          "<button type='button' class='btn btn-sm btn-danger ms-2' onclick='removeItem(" + i + ")'>Remove</button>";
        cartList.appendChild(li);
        total += item.price;
         }
        if (cart.length == 0) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = "Your cart is empty.";
        cartList.appendChild(li);
        } else {
        let li = document.createElement("li");
        li.className = "list-group-item active";
        li.innerHTML = "Total: $" + total.toFixed(2);
        cartList.appendChild(li);
        }}