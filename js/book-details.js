let cart = [];
let orders = [];
let cartCount = 0;

function loadCart() {
  const savedCart = localStorage.getItem('booklandCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

function updateCartCount() {
  cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
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

document.addEventListener('DOMContentLoaded', function () {
  loadCart();
  loadOrderHistory();
  displayBookDetails();

  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

  document.getElementById('switch-to-register').addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.hide();
    setTimeout(() => registerModal.show(), 500);
  });

  document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    registerModal.hide();
    setTimeout(() => loginModal.show(), 500);
  });
});