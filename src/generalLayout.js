function addLayout(container) {
  container.insertAdjacentHTML(
    `afterbegin`,
    `<div class="general-layout">
  <img class="logo" src="/src/logo.png" />
  <div class="tab-container">
    <button class="homepage tab">Home</button>
    <button class="menu tab">Menu</button>
    <button class="about-us tab">About us</button>
  </div>
</div>`
  );
}

export { addLayout };
