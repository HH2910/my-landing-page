document.addEventListener('DOMContentLoaded', function () {

  // Phone click
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'phone_call', { event_category: 'Contact', event_label: 'Phone Click' });
    });
  });

  // WhatsApp click
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
    el.addEventListener('click', function () {
      gtag('event', 'whatsapp_click', { event_category: 'Contact', event_label: 'WhatsApp Click' });
    });
  });

  // Contact form submit
  var form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', function () {
      gtag('event', 'form_submit', { event_category: 'Contact', event_label: 'Inquiry Form' });
    });
  }

});
