import { LitElement, html, css } from 'lit';

export class SecondComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('second-component', SecondComponent);
