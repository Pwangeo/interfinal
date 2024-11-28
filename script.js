function createCircle() {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      document.body.appendChild(circle);

      setTimeout(() => {
        window.location.href = 'spider.html';
      }, 1500); 
    }


