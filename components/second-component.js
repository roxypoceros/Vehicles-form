import { LitElement, html, css } from "lit";

export default class SecondComponent extends LitElement {
  /**
   * Declared properties and their corresponding attributes
   */
  static properties = {
    carName: {
      type: String,
      hasChanged: function () {
        console.log("Cambió el nombre");
      },
    },
    year: { type: Number },
    brand: { type: String },
    version: { type: String },
  };

  constructor() {
    super();
    console.log("SecondComponent");
  }

  static styles = [
    css`
      :host {
        display: block;
    }

        img {
          max-width: 100%;
          border-radius: 15px;
        }

        .cardStyle {
            background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
            width: 80%;
            padding: 16px;
            margin: 16px;
            border: solid black 2px;
            border-radius: 25px;
        }
    `,
  ];

  render() {
    return html`
      <div class="cardStyle">
        <img src="src/carImg.jpg"/>
        <h2>${this.carName}</h2>
        <p>${this.year}</p>
        <p>${this.brand}</p>
        <p>${this.version}</p>
      </div>
    `;
  }
}

customElements.define("second-component", SecondComponent);

