import clearHTMLEle from "./clean";

function addHomepage() {
  const container = document.querySelector(`#content`);

  clearHTMLEle(container);

  container.insertAdjacentHTML(
    `beforeend`,
    ` <div id="homepage">
  <img src="" alt="" />
  <p>
    Sushi Masaki Saito is a high-end, traditional sushi omakase
    restaurant. It is the first and only restaurant in Canada with a two
    Michelin-starred chef. Chef Masaki Saito, raised in Hokkaido and
    trained in Tokyo, focuses on the purity and source of his ingredients,
    and showcases his respect for Edomae tradition in evolution with his
    own unique imagination.
  </p>
  <p>
    Tucked into a cozy Victorian building in Yorkville, Sushi Masaki Saito
    reveals the tradition and atmosphere of Gion, Kyoto or an Old
    Edo-style neighbourhood in Tokyo. Every detail serves the aim of
    authenticity, including a 200-year old Hinoki dining counter imported
    from Nara, Japan that is surrounded by a harmony of traditional
    Japanese handcrafted décor and local Ontario marble and limestone.
  </p>
</div>`
  );
}

export { addHomepage };
