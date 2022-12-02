function addHomepage(container) {
  container.insertAdjacentHTML(
    `afterbegin`,
    ` <img src="/src/Restaurant.jpg" alt="" />
  <h1>Sushi Masaki Saito</h1>
  <p>
    Sushi Masaki Saito is a high-end, traditional sushi omakase restaurant.
    It is the first and only restaurant in Canada with a two
    Michelin-starred chef. Chef Masaki Saito, raised in Hokkaido and trained
    in Tokyo, focuses on the purity and source of his ingredients, and
    showcases his respect for Edomae tradition in evolution with his own
    unique imagination.
  </p>`
  );
}

export { addHomepage };
