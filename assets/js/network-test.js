document.getElementById("startTestBtn").addEventListener("click", function () {
  startNetworkSpeedTest();
});

let testCanceled = false;

async function startNetworkSpeedTest() {
  let uploadSpeeds = [];
  let downloadSpeeds = [];
  const testDuration = 10;
  let ipAddress = '';

  // Fetch IP address
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ipAddress = data.ip;
  } catch (error) {
    console.error('Failed to fetch IP address:', error);
  }

  Swal.fire({
    title: "Network Speed Test",
    html: '<b></b> Checking network speed, please wait...',
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    timer: testDuration * 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}s`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      if (testCanceled) {
        console.log("Network test canceled.");
      }
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      testCanceled = true;
      return;
    }
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("Network test completed.");
    }
  });

  function simulateSpeed() {
    if (testCanceled) return;
    let uploadSpeed = Math.random() * 100;
    let downloadSpeed = Math.random() * 100;
    uploadSpeeds.push(uploadSpeed);
    downloadSpeeds.push(downloadSpeed);
  }

  let interval = setInterval(function () {
    simulateSpeed();
  }, 1000);

  setTimeout(function () {
    clearInterval(interval);
    if (testCanceled) return;
    let bestUploadSpeed = calculateBest(uploadSpeeds);
    let bestDownloadSpeed = calculateBest(downloadSpeeds);
    displayResults(bestUploadSpeed, bestDownloadSpeed, ipAddress);
  }, testDuration * 1000);
}

function calculateBest(speeds) {
  if (speeds.length === 0) return 0;
  return Math.max(...speeds);
}

function displayResults(uploadSpeed, downloadSpeed, ipAddress) {
  Swal.fire({
    title: "Network Speed Test Results",
    html: `<p><strong>IP Address:</strong> <span>${ipAddress}</span></p>
           <p><strong>Download Speed:</strong> <span>${downloadSpeed.toFixed(2)}</span> Mbps</p>
           <p><strong>Upload Speed:</strong> <span>${uploadSpeed.toFixed(2)}</span> Mbps</p>`,
    icon: "success",
    confirmButtonText: "OK",
  });
}
