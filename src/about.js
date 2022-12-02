import clearHTMLEle from "./clean";

export default function addAboutPage() {
  const container = document.querySelector(`#content`);

  clearHTMLEle(container);

  container.insertAdjacentHTML(
    `beforeend`,
    ` <div id="about">
  <h1>Address</h1>
  <p>88 Avenue Road, Toronto, ON, Canada M5R 2H2</p>
  <h1>Contact</h1>
  <p>416 924 0888</p>
  <p>infoto@masakisaito.ca</p>
  <p>media@masakisaito.ca</p>
  <h1>Hours</h1>
  <p>Dinner</p>
  <p>Mon to Tues, Thurs to Sat</p>
  <p>1st Seating: 6:00pm</p>
  <p>2nd Seating: 8:30pm</p>
</div>`
  );
}
