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

// Sử dụng hàm để lấy dữ liệu về chủ đề từ API
(async () => {
  try {
    const duLieuChuDe = await layDuLieuChuDe();
    console.log('Dữ liệu về chủ đề:', duLieuChuDe);
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  }
})();
