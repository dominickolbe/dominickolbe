export const darkmode = () => {
  const now = new Date().getHours();
  if (now >= 18 || now <= 8) {
    document.body.classList.add("darkmode");
  }
};
