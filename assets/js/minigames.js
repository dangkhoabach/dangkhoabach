document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("minigames-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      Swal.fire({
        title: "Bạn muốn chơi game nào?",
        icon: "question",
        html: `
            <button class="swal2-styled" onclick="window.open('https://games.dangkhoabach.id.vn/tetris', '_blank')">Tetris</button>
            <button class="swal2-styled" onclick="window.open('https://games.dangkhoabach.id.vn/slitherio', '_blank')">Slitherio</button>
        `,
        showConfirmButton: false,
        showCancelButton: false,
      });
    });
});