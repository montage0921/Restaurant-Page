export default function clearHTMLEle(element) {
  if (element.children.length === 1) return;
  element.removeChild(element.lastChild);
}
