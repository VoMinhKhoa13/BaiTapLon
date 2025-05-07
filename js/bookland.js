// Global variables
let cart = [];
let orders = [];
let cartCount = 0;

// Book list
const books = [
  { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", price: 75000, originalPrice: 120000, image: "../img/dacnhantam86.jpg", category: "Kỹ năng sống", description: "Cuốn sách kinh điển về nghệ thuật giao tiếp và thu phục lòng người." },
  { id: 2, title: "Nhà Giả Kim", author: "Paulo Coelho", price: 68000, originalPrice: 90000, image: "../img/nhagiakimm.webp", category: "Tiểu thuyết", description: "Hành trình theo đuổi giấc mơ đầy cảm hứng của một chàng trai chăn cừu." },
  { id: 3, title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", author: "Rosie Nguyễn", price: 62000, originalPrice: 80000, image: "../img/tuoitredanggiabaomhieu.webp", category: "Kỹ năng sống", description: "Hành trình khám phá bản thân và sống trọn vẹn tuổi trẻ." },
  { id: 4, title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh", author: "Nguyễn Nhật Ánh", price: 72000, originalPrice: 95000, image: "../img/toithayhoavangtrencoxanh.webp", category: "Tiểu thuyết", description: "Câu chuyện tuổi thơ đầy cảm xúc ở làng quê Việt Nam." },
  { id: 5, title: "Cà Phê Cùng Tony", author: "Tony Buổi Sáng", price: 85000, originalPrice: 110000, image: "../img/caphecungtony.webp", category: "Kỹ năng sống", description: "Những câu chuyện truyền cảm hứng về cuộc sống và thành công." },
  { id: 6, title: "Sapiens: Lược Sử Loài Người", author: "Yuval Noah Harari", price: 189000, originalPrice: 230000, image: "../img/luocsuloainguoi.webp", category: "Khoa học", description: "Lược sử loài người từ thời kỳ đồ đá đến hiện đại." },
  { id: 7, title: "Dám Bị Ghét", author: "Kishimi Ichiro", price: 89000, originalPrice: 120000, image: "../img/dambighet.webp", category: "Kỹ năng sống", description: "Triết lý sống tự do và hạnh phúc theo tâm lý học Adler." },
  { id: 8, title: "Hành Trình Về Phương Đông", author: "Baird T. Spalding", price: 65000, originalPrice: 85000, image: "../img/hanhtrinhvephuongdong.webp", category: "Tiểu thuyết", description: "Khám phá tâm linh và triết lý phương Đông." },
  { id: 9, title: "Đi Tìm Lẽ Sống", author: "Viktor E. Frankl", price: 72000, originalPrice: 95000, image: "../img/di-tim-le-song.jpg", category: "Kỹ năng sống", description: "Tìm ý nghĩa cuộc sống qua trải nghiệm trại tập trung." },
  { id: 10, title: "Totto-chan Bên Cửa Sổ", author: "Kuroyanagi Tetsuko", price: 60000, originalPrice: 80000, image: "../img/totochanbencuaso.webp", category: "Tiểu thuyết", description: "Câu chuyện tuổi thơ hồn nhiên tại một ngôi trường đặc biệt." },
  { id: 11, title: "Người Giàu Có Nhất Thành Babylon", author: "George S. Clason", price: 78000, originalPrice: 100000, image: "../img/nguoigiauconhatbabylon.webp", category: "Kỹ năng sống", description: "Bí quyết quản lý tài chính từ thời cổ đại." },
  { id: 12, title: "Bí Mật Tư Duy Triệu Phú", author: "T. Harv Eker", price: 92000, originalPrice: 125000, image: "../img/bimattuduytrieuphu.webp", category: "Kỹ năng sống", description: "Thay đổi tư duy để đạt được sự giàu có." },
  { id: 13, title: "Khởi Nguyên Của Vũ Trụ", author: "Neil deGrasse Tyson", price: 110000, originalPrice: 140000, image: "../img/khoi-nguyen-cua-vu-tru.webp", category: "Khoa học", description: "Khám phá vũ trụ qua những câu chuyện khoa học hấp dẫn." },
  { id: 14, title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ", author: "Nguyễn Nhật Ánh", price: 70000, originalPrice: 90000, image: "../img/chotoixin1vedituoitho.webp", category: "Tiểu thuyết", description: "Hành trình trở về tuổi thơ đầy kỷ niệm." },
  { id: 15, title: "Từng Có Một Người Yêu Tôi Như Sinh Mệnh", author: "Thư Nghi", price: 82000, originalPrice: 105000, image: "../img/tungconguoiyeutoinhusinhmenh.webp", category: "Tiểu thuyết", description: "Câu chuyện tình yêu sâu sắc và cảm động." },
  { id: 16, title: "Homo Deus", author: "Yuval Noah Harari", price: 195000, originalPrice: 240000, image: "../img/homodeus.webp", category: "Khoa học", description: "Tương lai của loài người trong kỷ nguyên công nghệ." },
  { id: 17, title: "Nghĩ Giàu Và Làm Giàu", author: "Napoleon Hill", price: 88000, originalPrice: 115000, image: "../img/nghigiaulamgiau.webp", category: "Kỹ năng sống", description: "Hành trình xây dựng tư duy thành công và giàu có." },
  { id: 18, title: "Những Người Khốn Khổ", author: "Victor Hugo", price: 150000, originalPrice: 180000, image: "../img/nhungnguoikhonkho.jpg", category: "Tiểu thuyết", description: "Tác phẩm kinh điển về xã hội Pháp thế kỷ 19." }
];

// Pagination variables
const booksPerPage = 6;
let currentPage = 1;

// Checkout variables
let isFreeShipping = false;
const addressData = {
  hcm: {
    districts: [
      { value: "q1", name: "Quận 1" },
      { value: "q3", name: "Quận 3" },
      { value: "q7", name: "Quận 7" },
      { value: "bt", name: "Bình Thạnh" }
    ],
    wards: {
      q1: [
        { value: "btx", name: "Bến Thành" },
        { value: "nct", name: "Nguyễn Cư Trinh" }
      ],
      q3: [
        { value: "p1", name: "Phường 1" },
        { value: "p2", name: "Phường 2" }
      ],
      q7: [
        { value: "tp", name: "Tân Phú" },
        { value: "tq", name: "Tân Quy" }
      ],
      bt: [
        { value: "p13", name: "Phường 13" },
        { value: "p14", name: "Phường 14" }
      ]
    }
  },
  hn: {
    districts: [
      { value: "hm", name: "Hoàn Miếm" },
      { value: "bd", name: "Ba Đình" },
      { value: "cg", name: "Cầu Giấy" }
    ],
    wards: {
      hm: [
        { value: "hd", name: "Hàng Đào" },
        { value: "hb", name: "Hàng Bông" }
      ],
      bd: [
        { value: "nh", name: "Ngọc Hà" },
        { value: "tt", name: "Trúc Bạch" }
      ],
      cg: [
        { value: "dt", name: "Dịch Vọng" },
        { value: "yc", name: "Yên Hòa" }
      ]
    }
  },
  dn: {
    districts: [
      { value: "hl", name: "Hải Châu" },
      { value: "tb", name: "Thanh Bình" }
    ],
    wards: {
      hl: [
        { value: "hc1", name: "Hải Châu 1" },
        { value: "hc2", name: "Hải Châu 2" }
      ],
      tb: [
        { value: "p1", name: "Phường 1" },
        { value: "p2", name: "Phường 2" }
      ]
    }
  },
  other: {
    districts: [
      { value: "other", name: "Khác" }
    ],
    wards: {
      other: [
        { value: "other", name: "Khác" }
      ]
    }
  }
};

// Authentication functions from auth.js
function updateAuthUI() {
  const authSection = document.getElementById('auth-section');
  if (!authSection) {
    console.error('Không tìm thấy auth-section trong DOM');
    return;
  }

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('booklandUser'));
    console.log('booklandUser:', user);
  } catch (e) {
    console.error('Lỗi khi đọc booklandUser từ localStorage:', e);
  }
  const cartCount = getCartCount();

  if (user && user.email && user.fullname) {
    authSection.innerHTML = `
      <a class="btn btn-outline-secondary me-2" id="cart-button" href="cart.html">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge rounded-pill badge-cart" id="cart-count">${cartCount}</span>
      </a>
      <div class="user-info">
        <span class="me-2"><i class="fas fa-user me-1"></i>${user.fullname}</span>
        <button class="btn btn-outline-danger btn-sm" id="logout-button">Đăng xuất</button>
      </div>
    `;
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', logout);
    }
  } else {
    authSection.innerHTML = `
      <a class="btn btn-outline-secondary me-2" id="cart-button" href="cart.html">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge rounded-pill badge-cart" id="cart-count">${cartCount}</span>
      </a>
      <button class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Đăng nhập</button>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng ký</button>
    `;
  }
}

function login(email, fullname) {
  const user = { email, fullname };
  try {
    localStorage.setItem('booklandUser', JSON.stringify(user));
    console.log('Đã lưu booklandUser:', user);
  } catch (e) {
    console.error('Lỗi khi lưu booklandUser vào localStorage:', e);
  }
  updateAuthUI();
}

function logout() {
  try {
    localStorage.removeItem('booklandUser');
    console.log('Đã xóa booklandUser');
  } catch (e) {
    console.error('Lỗi khi xóa booklandUser khỏi localStorage:', e);
  }
  updateAuthUI();
  alert('Đăng xuất thành công!');
}

function getCartCount() {
  try {
    const savedCart = localStorage.getItem('booklandCart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      return cart.reduce((total, item) => total + (item.quantity || 0), 0);
    }
  } catch (e) {
    console.error('Lỗi khi đọc booklandCart từ localStorage:', e);
  }
  return 0;
}

// Cart and order management functions
function loadCart() {
  const savedCart = localStorage.getItem('booklandCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

function updateCartCount() {
  cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  saveCart();
  updateCartCount();
  alert(`Đã thêm "${name}" vào giỏ hàng!`);
}

function saveCart() {
  localStorage.setItem('booklandCart', JSON.stringify(cart));
}

function loadOrderHistory() {
  try {
    const savedOrders = localStorage.getItem('booklandOrders');
    orders = savedOrders ? JSON.parse(savedOrders) : [];
    displayOrderHistory();
  } catch (e) {
    console.error('Lỗi khi tải lịch sử mua hàng:', e);
    orders = [];
    displayOrderHistory();
  }
}

function displayOrderHistory() {
  const orderList = document.getElementById('order-history-list');
  if (!orderList) return;
  orderList.innerHTML = '';
  if (orders.length === 0) {
    orderList.innerHTML = '<tr><td colspan="4" class="text-center">Chưa có đơn hàng nào.</td></tr>';
  } else {
    orders.forEach(order => {
      const row = `
        <tr>
          <td>${order.id}</td>
          <td>${order.date}</td>
          <td>${order.total.toLocaleString()}₫</td>
          <td><button class="btn btn-sm btn-primary" onclick="showInvoiceById('${order.id}')">Xem</button></td>
        </tr>
      `;
      orderList.insertAdjacentHTML('beforeend', row);
    });
  }
}

function showInvoiceById(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    showInvoice(order);
  }
}

function showInvoice(order) {
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'tempInvoiceModal';
  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hóa đơn mua hàng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Mã đơn hàng:</strong> ${order.id}</p>
          <p><strong>Ngày đặt:</strong> ${order.date}</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Sách</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>${item.price.toLocaleString()}₫</td>
                  <td>${(item.price * item.quantity).toLocaleString()}₫</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <p class="text-end"><strong>Tổng cộng:</strong> ${order.total.toLocaleString()}₫</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const invoiceModal = new bootstrap.Modal(modal);
  invoiceModal.show();
  modal.addEventListener('hidden.bs.modal', () => modal.remove());
}

// Book details functions from book-details.js
function displayBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = parseInt(urlParams.get('id'));
  const book = books.find(b => b.id === bookId);

  if (book) {
    document.getElementById('book-title').textContent = book.title;
    document.getElementById('book-image').src = book.image;
    document.getElementById('book-image').alt = book.title;
    document.getElementById('book-author').textContent = book.author;
    document.getElementById('book-price').textContent = book.price.toLocaleString() + '₫';
    document.getElementById('book-original-price').textContent = book.originalPrice.toLocaleString() + '₫';
    document.getElementById('book-category').textContent = book.category;
    document.getElementById('book-description').textContent = book.description || 'Chưa có mô tả.';
    document.getElementById('add-to-cart-btn').onclick = () => addToCart(book.id, book.title, book.price);
  } else {
    document.querySelector('.book-detail').innerHTML = '<p class="text-center">Sách không tồn tại.</p>';
  }
}

// Cart functions from cart.js
function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<tr><td colspan="5" class="text-center">Giỏ hàng trống</td></tr>';
    cartTotal.textContent = '0₫';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}₫</td>
        <td>
          <div class="quantity-control">
            <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
            <input type="number" class="form-control" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
          </div>
        </td>
        <td>${itemTotal.toLocaleString()}₫</td>
        <td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button></td>
      </tr>
    `;
    cartItems.insertAdjacentHTML('beforeend', row);
  });

  cartTotal.textContent = total.toLocaleString() + '₫';
}

function updateQuantity(index, quantity) {
  quantity = parseInt(quantity);
  if (quantity < 1) {
    removeFromCart(index);
    return;
  }
  cart[index].quantity = quantity;
  saveCart();
  updateCartCount();
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  displayCart();
}

// Checkout functions from checkout.js
function updateDistricts(city) {
  const districtSelect = document.getElementById('district');
  if (!districtSelect) return;
  districtSelect.innerHTML = '<option value="" selected disabled>Chọn quận/huyện</option>';
  const districts = addressData[city]?.districts || [];
  districts.forEach(district => {
    const option = new Option(district.name, district.value);
    districtSelect.add(option);
  });
  districtSelect.disabled = districts.length === 0;
  updateWards('');
}

function updateWards(district) {
  const city = document.getElementById('city')?.value;
  const wardSelect = document.getElementById('ward');
  if (!wardSelect) return;
  wardSelect.innerHTML = '<option value="" selected disabled>Chọn phường/xã</option>';
  const wards = addressData[city]?.wards[district] || [];
  wards.forEach(ward => {
    const option = new Option(ward.name, ward.value);
    wardSelect.add(option);
  });
  wardSelect.disabled = wards.length === 0;
}

function updateCheckoutDisplay() {
  const checkoutItemsElement = document.getElementById('checkout-items');
  if (!checkoutItemsElement) return;

  checkoutItemsElement.innerHTML = '';

  let subtotal = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const checkoutItem = document.createElement('div');
    checkoutItem.className = 'd-flex justify-content-between align-items-center mb-2';
    checkoutItem.innerHTML = `
      <div>
        <span>${item.name} x ${item.quantity}</span>
      </div>
      <span>${itemTotal.toLocaleString()}₫</span>
    `;
    checkoutItemsElement.appendChild(checkoutItem);
  });

  const shippingFee = isFreeShipping || cart.length === 0 ? 0 : 30000;
  const total = subtotal + shippingFee;

  document.getElementById('checkout-subtotal').textContent = subtotal.toLocaleString() + '₫';
  document.getElementById('checkout-shipping').textContent = shippingFee.toLocaleString() + '₫';
  document.getElementById('checkout-total').textContent = total.toLocaleString() + '₫';
}

function applyDiscountCode() {
  const code = document.getElementById('discount-code')?.value.trim().toUpperCase();
  const messageElement = document.getElementById('discount-message');
  if (!messageElement) return;

  if (code === 'CHOEM10D') {
    isFreeShipping = true;
    messageElement.textContent = 'Mã giảm giá áp dụng thành công! Miễn phí vận chuyển.';
    messageElement.className = 'discount-message';
    messageElement.style.display = 'block';
  } else {
    isFreeShipping = false;
    messageElement.textContent = 'Mã giảm giá không hợp lệ.';
    messageElement.className = 'discount-error';
    messageElement.style.display = 'block';
  }
  updateCheckoutDisplay();
}

function placeOrder() {
  if (cart.length === 0) {
    alert('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
    return;
  }

  const form = document.getElementById('shipping-form');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const orderId = 'ORDER-' + Date.now();
  const orderDate = new Date().toLocaleString('vi-VN');
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = isFreeShipping ? 0 : 30000;
  const orderTotal = subtotal + shippingFee;
  const order = {
    id: orderId,
    date: orderDate,
    total: orderTotal,
    items: [...cart]
  };

  orders.push(order);
  localStorage.setItem('booklandOrders', JSON.stringify(orders));
  cart = [];
  saveCart();
  updateCheckoutDisplay();
  alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại BookLand.');

  const orderHistoryModal = new bootstrap.Modal(document.getElementById('orderHistoryModal'));
  loadOrderHistory();
  orderHistoryModal.show();
}

// Index and products functions
function displayBooks(bookList, page = 1, elementId = 'book-list') {
  const bookListElement = document.getElementById(elementId);
  if (!bookListElement) return;

  bookListElement.innerHTML = '';

  const start = (page - 1) * booksPerPage;
  const end = start + booksPerPage;
  const paginatedBooks = bookList.slice(start, end);

  paginatedBooks.forEach(book => {
    const bookCard = `
      <div class="col-md-4 col-sm-6">
        <div class="card h-100">
          <a href="book-detail.html?id=${book.id}"><img src="${book.image}" class="card-img-top" alt="${book.title}"></a>
          <div class="card-body">
            <h5 class="card-title"><a href="book-detail.html?id=${book.id}" class="text-decoration-none">${book.title}</a></h5>
            <p class="card-text">${book.author}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="book-price">${book.price.toLocaleString()}₫</span>
                <span class="discount ms-2">${book.originalPrice.toLocaleString()}₫</span>
              </div>
              <button class="btn btn-sm btn-outline-primary" onclick="addToCart(${book.id}, '${book.title}', ${book.price})">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    bookListElement.insertAdjacentHTML('beforeend', bookCard);
  });

  if (elementId === 'book-list') {
    updatePagination(bookList);
  }
}

function updatePagination(bookList) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';
  const pageCount = Math.ceil(bookList.length / booksPerPage);

  pagination.innerHTML += `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">Trước</a>
    </li>
  `;

  for (let i = 1; i <= pageCount; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
      </li>
    `;
  }

  pagination.innerHTML += `
    <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Sau</a>
    </li>
  `;
}

function changePage(page) {
  if (page < 1 || page > Math.ceil(books.length / booksPerPage)) return;
  currentPage = page;
  filterBooks();
  const scrollTarget = document.getElementById('store-content') || window;
  if (scrollTarget === window) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function searchBooks() {
  const query = document.getElementById('search-input')?.value.toLowerCase();
  if (!query) return;
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
  );
  currentPage = 1;
  displayBooks(filteredBooks, currentPage);
}

function filterBooks() {
  const category = document.getElementById('category-filter')?.value;
  const priceFilter = document.getElementById('price-filter')?.value;

  let filteredBooks = [...books];

  if (category) {
    filteredBooks = filteredBooks.filter(book => book.category === category);
  }

  if (priceFilter === 'low-to-high') {
    filteredBooks.sort((a, b) => a.price - b.price);
  } else if (priceFilter === 'high-to-low') {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

  displayBooks(filteredBooks, currentPage);
}

function displayFeaturedBooks() {
  const featuredBooks = books.slice(0, 6);
  displayBooks(featuredBooks, 1, 'featured-books');
}

// Consolidated DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
  console.log('bookland.js loaded');
  
  // Common initialization
  loadCart();
  loadOrderHistory();
  updateAuthUI();

  // Initialize modals
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

  // Modal switch handlers
  const switchToRegister = document.getElementById('switch-to-register');
  if (switchToRegister) {
    switchToRegister.addEventListener('click', function (e) {
      e.preventDefault();
      loginModal.hide();
      setTimeout(() => registerModal.show(), 500);
    });
  }

  const switchToLogin = document.getElementById('switch-to-login');
  if (switchToLogin) {
    switchToLogin.addEventListener('click', function (e) {
      e.preventDefault();
      registerModal.hide();
      setTimeout(() => loginModal.show(), 500);
    });
  }

  // Authentication form handlers
  const loginForm = document.getElementById('modal-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Login form submitted');
      const email = document.getElementById('modal-login-email').value;
      const password = document.getElementById('modal-login-password').value;
      let users = {};
      try {
        users = JSON.parse(localStorage.getItem('booklandUsers')) || {};
        console.log('booklandUsers:', users);
      } catch (error) {
        console.error('Lỗi khi đọc booklandUsers từ localStorage:', error);
      }

      const user = users[email];
      if (user && user.password === password) {
        login(email, user.fullname);
        alert('Đăng nhập thành công!');
        const loginModalInstance = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        if (loginModalInstance) loginModalInstance.hide();
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    });
  } else {
    console.warn('Không tìm thấy modal-login-form trong DOM');
  }

  const registerForm = document.getElementById('modal-register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Register form submitted');
      const fullname = document.getElementById('modal-register-fullname').value;
      const email = document.getElementById('modal-register-email').value;
      const phone = document.getElementById('modal-register-phone').value;
      const password = document.getElementById('modal-register-password').value;
      const confirmPassword = document.getElementById('modal-register-confirm-password').value;
      const termsAgreed = document.getElementById('modal-terms-agree').checked;
      const phoneError = document.getElementById('phone-error');

      // Kiểm tra số điện thoại chỉ chứa số
      if (!/^\d+$/.test(phone)) {
        phoneError.style.display = 'block';
        return;
      } else {
        phoneError.style.display = 'none';
      }

      if (!termsAgreed) {
        alert('Vui lòng đồng ý với điều khoản sử dụng!');
        return;
      }

      if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }

      let users = {};
      try {
        users = JSON.parse(localStorage.getItem('booklandUsers')) || {};
        console.log('booklandUsers before register:', users);
      } catch (error) {
        console.error('Lỗi khi đọc booklandUsers từ localStorage:', error);
      }

      if (users[email]) {
        alert('Email đã được đăng ký!');
        return;
      }

      users[email] = { fullname, phone, password };
      try {
        localStorage.setItem('booklandUsers', JSON.stringify(users));
        console.log('Đã lưu booklandUsers:', users);
      } catch (error) {
        console.error('Lỗi khi lưu booklandUsers vào localStorage:', error);
        alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại!');
        return;
      }

      login(email, fullname);
      alert('Đăng ký tài khoản thành công!');
      const registerModalInstance = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      if (registerModalInstance) registerModalInstance.hide();
    });
  } else {
    console.warn('Không tìm thấy modal-register-form trong DOM');
  }

  // Page-specific initialization
  const path = window.location.pathname;

  if (path.includes('index.html') || path === '/') {
    displayFeaturedBooks();
    filterBooks();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  if (path.includes('products.html')) {
    filterBooks();
  }

  if (path.includes('book-detail.html')) {
    displayBookDetails();
  }

  if (path.includes('cart.html')) {
    displayCart();
  }

  if (path.includes('checkout.html')) {
    updateCheckoutDisplay();
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    if (citySelect) {
      citySelect.addEventListener('change', () => updateDistricts(citySelect.value));
    }
    if (districtSelect) {
      districtSelect.addEventListener('change', () => updateWards(districtSelect.value));
    }
    const applyDiscountButton = document.getElementById('apply-discount');
    if (applyDiscountButton) {
      applyDiscountButton.addEventListener('click', applyDiscountCode);
    }
    const discountCodeInput = document.getElementById('discount-code');
    if (discountCodeInput) {
      discountCodeInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          applyDiscountCode();
        }
      });
    }
    const placeOrderButton = document.getElementById('place-order');
    if (placeOrderButton) {
      placeOrderButton.addEventListener('click', placeOrder);
    }
  }
});