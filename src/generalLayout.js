function addLayout(container) {
  container.insertAdjacentHTML(
    `afterbegin`,
    `<div class="general-layout">
  <img class="logo" src="/src/logo.png" />
  <div class="tab-container">
    <div class="homepage">Home</div>
    <div class="menu">Menu</div>
    <div class="about-us">About us</div>
  </div>
</div>`
  );
}

export { addLayout };
