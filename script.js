<script>
  function toggleWishlist(el) {
    el.classList.toggle("active");
    if (el.classList.contains("active")) {
      el.innerText = "❤️";
    } else {
      el.innerText = "🤍";
    }
  }
</script>


let wishlist = [];

function addToWishlist(el, name, img, price) {
  // Toggle heart
  if (el.innerText === '🤍') {
    el.innerText = '❤️';
    wishlist.push({ name, img, price });
  } else {
    el.innerText = '🤍';
    wishlist = wishlist.filter(item => item.name !== name);
  }

  updateWishlist();
}

function updateWishlist() {
  const list = document.getElementById("wishlist-items");
  const count = document.getElementById("wishlist-count");

  list.innerHTML = "";
  wishlist.forEach(item => {
    list.innerHTML += `
      <li style="margin-bottom:10px">
        <img src="${item.img}" style="width:40px;height:40px;border-radius:50%"> 
        <strong>${item.name}</strong> - ${item.price}
      </li>`;
  });

  count.innerText = wishlist.length;
}

function toggleWishlistPopup() {
  document.getElementById("wishlist-popup").classList.toggle("hidden");
}

let wishlist = [];

function addToWishlist(el, name, img, price) {
  const exists = wishlist.find(item => item.name === name);
  if (exists) return;

  wishlist.push({ name, img, price });

  document.getElementById('wishlist-count').textContent = wishlist.length;

  el.textContent = "❤️"; // change icon to filled
  el.style.color = "red";
}

function toggleWishlist() {
  const popup = document.getElementById('wishlist-popup');
  const list = document.getElementById('wishlist-items');
  list.innerHTML = '';

  wishlist.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${item.img}" width="40" style="margin-right:10px;">
                    ${item.name} - ${item.price}`;
    list.appendChild(li);
  });

  popup.classList.toggle('hidden');
}

function closeWishlist() {
  document.getElementById('wishlist-popup').classList.add('hidden');
}
