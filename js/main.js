(function () {
  // Add event listener

  const elem = document.querySelector(".bgc");
  elem.addEventListener("mousemove", parallax);
  // Magic happens here
  function parallax(e) {
    let getWidth = window.innerWidth / 2;
    let getHeight = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let headerImg = `${50 - (mouseX - getWidth) * 0.01}% ${
      50 - (mouseY - getHeight) * 0.01
    }%`;
    let x = `${headerImg}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
