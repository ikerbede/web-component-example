const template = `
<template id="pizza-details-template">
  <style>
    .pizza-details {
      border: 1px solid black;
      border-radius: 4px;

      width: 150px;
      padding: 16px;
    }
    .pizza-details-header {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
    }
    .pizza-details-header > h3,
    h4 {
      margin: 0;
    }
    .pizza-details-footer {
      display: flex;
      justify-content: flex-end;
    }
  </style>
  <article class="pizza-details">
    <header class="pizza-details-header">
      <h3><slot name="pizza-name"></slot></h3>
      <h3><slot name="pizza-price"></slot></h3>
    </header>
    <h4>Ingrédients :</h4>
    <slot name="pizza-ingredients"></slot>
    <footer class="pizza-details-footer">
      <button type="button" id="button-buy">BUY</button>
    </footer>
  </article>
</template>
`;

export class PizzaDetailsComponent extends HTMLElement {
  constructor() {
    super();

    const parser = new DOMParser();
    const dom = parser.parseFromString(template, 'text/html');

    const templateElt = dom.getElementById(
      'pizza-details-template'
    ) as HTMLTemplateElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateElt.content.cloneNode(true));
  }
}
