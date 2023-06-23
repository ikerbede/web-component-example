export class PizzaDetailsComponent extends HTMLElement {
  constructor() {
    super();
    fetch('./pizza-details.component.html')
      .then((response: Response) => response.text())
      .then((template: string) => {
        document.write(template);
        const templateElt = document.getElementById(
          'pizza-details-template'
        ) as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        return shadowRoot.appendChild(templateElt.content.cloneNode(true));
      });
  }
}
