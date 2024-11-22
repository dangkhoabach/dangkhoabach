document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const contactMessage = document.getElementById("contactMessage");
  const submit = document.getElementById("submit");
  const language = localStorage.getItem("language") || "en";

  submit.addEventListener("click", (e) => {
    NProgress.start();

    e.preventDefault();

    if (
      name.value === "" ||
      email.value === "" ||
      subject.value === "" ||
      contactMessage.value === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text:
          language === "en"
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
      contactMessage: contactMessage.value,
    };
    sendToDiscordWebhook(data);
  });

  async function sendToDiscordWebhook(data) {
    const webhookUrl =
      "https://discord.com/api/webhooks/1309123601131376712/YJHhOBSD4bTcNv-dKrLUd0lA9ubokTMb5eWr50LCYVs2gYdkgY0gTgvXzEkPvJ73a0QJ";

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const payload = {
      content: `**dangkhoabach Website Contact**
${formattedDate}
- **Name**: ${data.name}
- **Email**: ${data.email}
- **Subject**: ${data.subject}
- **Message**: ${data.contactMessage}`,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: language === "en" ? "Message Sent" : "Tin nhắn đã gửi",
          text:
            language === "en"
              ? `Thank you ${data.name}. Your message has been sent to dangkhoabach!`
              : `Cảm ơn ${data.name}. Tin nhắn của bạn đã được gửi đến dangkhoabach!`,
        });

        resetForm();
      } else {
        throw new Error(
          "Failed to send message to dangkhoabach. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: language === "en" ? "Error" : "Lỗi",
        text:
          language === "en"
            ? `There was an error sending your message. Please try again later.`
            : `Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.`,
      });
    } finally {
      NProgress.done();
    }
  }

  function resetForm() {
    name.value = "";
    email.value = "";
    subject.value = "";
    contactMessage.value = "";
  }
});
