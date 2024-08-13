document
  .getElementById("downloadLink")
  .addEventListener("click", function (event) {
    event.preventDefault();

    Swal.fire({
      title: "Do you want to download this file?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Download",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        NProgress.start();

        var link = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link.href, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
          if (xhr.status === 200) {
            var url = window.URL.createObjectURL(xhr.response);
            var a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = link.getAttribute("download");
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            NProgress.done();
          }
        };
        xhr.onerror = function () {
          NProgress.done();
        };
        xhr.send();
      }
    });
  });