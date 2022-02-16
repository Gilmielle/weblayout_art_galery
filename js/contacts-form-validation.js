window.addEventListener('DOMContentLoaded', function() {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate('.contacts-form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
        function: (name, value) => {
          var username = document.querySelector('#contacts-form-name').value;
          for (let i = 0; i < username.length; i ++) {
            return username[i].match(/[а-я]/i);
          }
        }
      },

      phone: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: 'Недопустимый формат',
      phone: 'Недопустимый формат',
    },

    submitHandler: function(thisForm) {
      let formData = new FormData(thisForm);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      thisForm.reset();
    }
  });
});