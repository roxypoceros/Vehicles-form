import { LitElement, html, css } from 'lit';
import "./first-component.js"

export class MainComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                font-family: 'Alexandria', sans-serif;
                background-image: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);
                //background-color:gray;
                //300,400,500
                border: solid black 4px;
                border-radius: 25px;
                padding: 24px;
                margin: 0px;
                box-sizing: 0px;
                --almostBlack: #2a2a2a;


            }
        `
    ];

    render() {
        return html`
        <div id="mainComponent">
        <h1>Car Wash</h1>
          <first-component></first-component>
        </div>
        `;
    }
}
customElements.define('main-component', MainComponent);
