import { LitElement, html, css } from "lit";
import "./second-component"


export class FirstComponent extends LitElement {

/**
  * Declared properties and their corresponding attributes
  */
static get properties() {
    return {
        carInfo: {type: Object}
    };
}

/**
  * Instance of the element is created/upgraded. Useful for initializing
  * state, set up event listeners, create shadow dom.

  */
constructor() {
    super();
    this.carInfo = [];

    console.log(this.carInfo);

    
}


  static styles = [
    css`
      :host {
        display: flex;
        font-family: "Alexandria", sans-serif;
        justify-content: center;
        align-items: center;

        --almostBlack: #2a2a2a;
        --ghost: #ffffff8f;
      }

      input[type="number" ] {
        width: 30%;
        padding: 8px 16px;
        margin: 8px;
        border: none;
        background-color: var(--ghost);
        color: var(--almostBlack);
        font-family: "Alexandria", sans-serif;
        font-weight: 300;
      }

      input[type="text" ] {
        width: 30%;
        padding: 8px 16px;
        margin: 8px;
        border: none;
        background-color: var(--ghost);
        color: var(--almostBlack);
        font-family: "Alexandria", sans-serif;
        font-weight: 300;
      }

      input:focus {
        outline: transparent;
      }

      button {
        background-color: var(--almostBlack);
        border-radius: 25px;
        max-width: 200px;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        overflow: hidden;
        padding: 9px 20px 8px;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 100%;
      }

      button:hover,
      button:focus {
        opacity: 0.90;
      }
    `,
  ];
  
  render() {
    return html`
    <div>
      <div class="inputBox">
        <label class="inputLabels" for="name">Nombre:</label>
        <input type="text" id="carName" placeholder="Nombre de auto" required />

        <label class="inputLabels" for="name">Año:</label>
        <input type="number" id="year" placeholder="Año de auto" />
        <br />

        <label class="inputLabels" for="name">Marca:</label>
        <input type="text" id="brand" placeholder="Marca de auto" />

        <label class="inputLabels" for="name">Versión:</label>
        <input type="text" id="version" placeholder="Versión de auto" />

        <button @click=${this.addCar}>Agregar</button>

        </div>

        ${this.carInfo.map( element =>
          html `
          <second-component
          carName=${element.carName}
          year=${element.year}
          brand=${element.brand}
          version=${element.version}
          ></second-component>
          `)}

          </div>


    `;
  }

  get carName() {
    return this.renderRoot?.querySelector("#carName") ?? null;}
  get carYear() {
        return this.renderRoot?.querySelector("#year") ?? null;}
  get carBrand() {
        return this.renderRoot?.querySelector("#brand") ?? null;}
  get carVersion() {
            return this.renderRoot?.querySelector("#version") ?? null;}




addCar(e) {
    this.carInfo = [...this.carInfo,
      { carName: this.carName.value,
        year: this.carYear.value,
        brand:this.carBrand.value,
        version:this.carVersion.value,

      }

      ];

      console.log(this.carInfo)




  }
}
customElements.define("first-component", FirstComponent);
