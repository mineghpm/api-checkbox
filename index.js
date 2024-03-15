const axios = require('axios');

// Định nghĩa URL của API
const apiUrl = 'https://api.example.com/themes';

// Hàm để lấy dữ liệu từ API về chủ đề
async function layDuLieuChuDe() {
  try {
    const response = await axios.get(apiUrl);
    const duLieu = response.data;
    return duLieu;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu từ API:', error);
    throw error;
  }
}

// Hàm để tạo checkbox cho từng chủ đề
function taoCheckboxChuDe(chuDe) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'themes';
  checkbox.value = chuDe.id;
  
  const label = document.createElement('label');
  label.appendChild(document.createTextNode(chuDe.name));
  
  const container = document.createElement('div');
  container.appendChild(checkbox);
  container.appendChild(label);
  
  return container;
}

// Sử dụng hàm để lấy dữ liệu về chủ đề từ API và hiển thị chúng dưới dạng các checkbox
(async () => {
  try {
    const duLieuChuDe = await layDuLieuChuDe();
    const containerChuDe = document.getElementById('container-themes');
    
    duLieuChuDe.forEach(chuDe => {
      const checkbox = taoCheckboxChuDe(chuDe);
      containerChuDe.appendChild(checkbox);
    });
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  }
})();
