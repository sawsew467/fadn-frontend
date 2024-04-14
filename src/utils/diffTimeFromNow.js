function diffTimeFromNow(time) {
  const now = new Date(); // Lấy thời gian hiện tại

  // Chuyển đổi time thành đối tượng Date
  const createdAtDate = new Date(
    time?.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/, "$3-$2-$1T$4:$5")
  );

  // Tính khoảng thời gian chênh lệch giữa hai thời gian (tính bằng mili giây)
  const diffInMilliseconds = now - createdAtDate;

  // Chia thành các đơn vị phút, giờ và ngày
  const minutesDiff = Math.floor(diffInMilliseconds / (1000 * 60));
  const hoursDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const daysDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  // Xác định đơn vị thời gian phù hợp dựa trên khoảng thời gian chênh lệch
  if (minutesDiff < 60) {
    return `${minutesDiff}min`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff}h`;
  } else {
    return `${daysDiff}day`;
  }
}
export { diffTimeFromNow };
