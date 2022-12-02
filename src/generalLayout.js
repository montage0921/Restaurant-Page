function addLayout(container) {
  container.insertAdjacentHTML(
    `afterbegin`,
    `<div class="general-layout">
  <img class="logo" src="/src/assets/logo.png" />
  <div class="tab-container">
    <button class="homepage tab">Home</button>
    <button class="menu tab">Menu</button>
    <button class="about-us tab">About us</button>
  </div>
</div>`
  );

  const homeTab = document.querySelector(`.homepage`);
  const menuTab = document.querySelector(`.menu`);
  const aboutTab = document.querySelector(`.about-us`);

  return { homeTab, menuTab, aboutTab };
}

export { addLayout };
