document.querySelectorAll('.nav1 a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      link.onclick = () => false;
    }
  });