import clearHTMLEle from "./clean";

export default function addMenuPage() {
  const container = document.querySelector(`#content`);

  clearHTMLEle(container);
  container.insertAdjacentHTML(
    `beforeend`,
    ` <div id="menu">
  <img src="" alt="" />
  <p>
    Our omakase menu is based on the traditional Japanese dining style in
    which we defer to the chef to curate seasonal specialities. The price for
    the omakase dinner at Sushi Masaki Saito is $680 per person.
  </p>
</div>`
  );
}
