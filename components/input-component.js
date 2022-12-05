import { LitElement, html, css } from 'lit';

export class InputComponent extends LitElement {

static get properties() {
  return {
    inputSpace: { type: String },
  };
}

constructor(){
  super();
  this.inputSpace = "";
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

    input[type="number"] {
      width: 30%;
      padding: 8px 16px;
      margin: 8px;
      border: none;
      background-color: var(--ghost);
      color: var(--almostBlack);
      font-family: "Alexandria", sans-serif;
      font-weight: 300;
    }

    input[type="text"] {
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

    
  `,
];

  render() {
    return html`
    <h2>Nombre: </h2>
        <input 
        type="text" 
        id="idInput" 
        placeholder="Nombre de auto"
        value="" 
        @change=${this.changeInput}/>
    
    `;

  }

get inputValue(){
  return this.renderRoot?.querySelector("#idInput")??null;
  console.log(inputValue);
}

changeInput(){
  this.inputSpace = this.inputValue.value;
  this.dispatchEvent(new CustomEvent("changeInput",{
    detail: {
      value: this.inputSpace
    },
    bubbles: true,
    composed: true

  }))

}



}
customElements.define('input-component', InputComponent);
