export const calculateAge = (dateString) => {
  // Chuyển đổi chuỗi thành đối tượng Date
  const birthDate = new Date(dateString);

  // Lấy ngày hiện tại
  const currentDate = new Date();

  // Tính toán tuổi
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Kiểm tra xem đã qua sinh nhật chưa trong năm nay
  // Nếu chưa qua sinh nhật, giảm đi 1 tuổi
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
