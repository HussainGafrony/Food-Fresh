$(document).ready(function () {
  $("#send").click(function () {
    validateForm();
  });
});

function validateForm() {
  const name = $("#name").val();
  const email = $("#email").val();
  const comment = $("#comment").val();
  const number = $("#number").val();

  if (isAnyFieldEmpty(name, email, comment)) {
    language() == "en"
      ? setAlertValue("Please fill in all fields", "danger")
      : setAlertValue("يرجى ملء جميع الحقول", "danger");
    return;
  }

  if (isTooShort(name, 5) || isTooShort(comment, 5)) {
    language() == "en"
      ? setAlertValue(
          "Name and Comment must be at least five characters long",
          "warning"
        )
      : setAlertValue(
          "الاسم والتعليق يجب أن يكونا على الأقل خمسة أحرف.",
          "warning"
        );
    return;
  }

  if (!isValidEmail(email)) {
    language() == "en"
      ? setAlertValue("Please enter a valid email address.", "danger")
      : setAlertValue("يرجى إدخال عنوان بريد إلكتروني صالح.", "danger");
    return;
  }

  if ($("#number").hasClass("services-number")) {
    if (number === "") {
      language() == "en"
        ? setAlertValue("Please enter the number of meals.", "danger")
        : setAlertValue("يرجى إدخال عدد الوجبات.", "danger");
      return;
    }
  }
  checkTotal()
    ? language() == "en"
      ? setAlertValue(
          "Thank you for reaching out to us. We appreciate your message",
          "success"
        )
      : setAlertValue("شكرًا لتواصلكم معنا. نقدر رسالتكم.", "success")
    : language() == "en"
    ? setAlertValue(
        "it seems you've chosen an incorrect answer ,give it another try, and you'll surely get the right answer!",
        "danger"
      )
    : setAlertValue(
        "يبدو أنك قمت باختيار إجابة غير صحيحة، جرب مرة أخرى وستحصل بالتأكيد على الإجابة الصحيحة!",
        "danger"
      );

  // Clear form fields
  $("#name").val("");
  $("#email").val("");
  $("#comment").val("");
  $("#number").val("");
}
const language = () => {
  return $("html").attr("lang");
};
const setAlertValue = (message, type) => {
  const alertPlaceholder = $("#alert");
  const wrapper = $(
    `<div class="alert alert-${type} alert-dismissible z-2 position-absolute py-3" role="alert">` +
      `   <div class='h4'>${message}</div>` +
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
      "</div>"
  );
  alertPlaceholder.empty().append(wrapper);
};

function isAnyFieldEmpty(...fields) {
  return fields.some((field) => field === "");
}

function isTooShort(value, minLength) {
  return value.length < minLength;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkTotal() {
  const num1 = Math.floor(Math.random() * 100);

  const num2 = Math.floor(Math.random() * 100);

  const correctTotal = num1 + num2;
  const userInput = parseInt(
    prompt("Enter the total of " + num1 + " and " + num2)
  );
  if (userInput === correctTotal) {
    return true;
  } else {
    return false;
  }
}

// loading Map

setTimeout(() => {
  $(".loading").hide(1000, "swing");
}, 2500);
