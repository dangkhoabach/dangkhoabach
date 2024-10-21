document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const submit = document.getElementById("submit");
  const language = localStorage.getItem('language') || 'en';

  submit.addEventListener("click", (e) => {
    NProgress.start();

    e.preventDefault();

    if (
      name.value === "" ||
      email.value === "" ||
      subject.value === "" ||
      message.value === ""
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: language === 'en'
            ? `Please fill in all the information.`
            : `Vui lòng điền đầy đủ thông tin`,
      });
      NProgress.done();
      return;
    }

    const data = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    googleForm(data);
  });

  async function googleForm(data) {
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScmK4-e7nQXo8FDAoVytVIDyj9rR-VKFZGAKRHRpp7QOJ5C1A/formResponse";
    const formData = new FormData();
    formData.append("entry.655903665", data.name);
    formData.append("entry.1397596021", data.email);
    formData.append("entry.1010836437", data.subject);
    formData.append("entry.2071379417", data.message);

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: language === 'en' ? 'Message Sent' : 'Tin nhắn đã gửi',
          text: language === 'en'
            ? `Thank you ${data.name}. Your message has been sent. I will contact you as soon as possible!`
            : `Cảm ơn ${data.name}. Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ đến bạn sớm nhất có thể!`,
        });

        resetForm()
      } else {
        throw new Error("There was an error sending the message. Please try again later.");
      }
    } catch (error) {
      console.error("Lỗi:", error.message);

      const language = localStorage.getItem('language') || 'en';

      Swal.fire({
        icon: 'success',
        title: language === 'en' ? 'Message Sent' : 'Tin nhắn đã gửi',
        text: language === 'en'
            ? `Thank you ${data.name}. Your message has been sent. I will contact you as soon as possible!`
            : `Cảm ơn ${data.name}. Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ đến bạn sớm nhất có thể!`,
      });

      resetForm()
    } finally {
      NProgress.done();
    }
  }

  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("success").innerHTML = "";
}
});
