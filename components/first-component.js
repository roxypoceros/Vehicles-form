import { LitElement, html, css } from 'lit';

export class FirstComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                font-family: 'Alexandria', sans-serif;
                justify-content: center;
	            align-items: center;
                          
                
                --almostBlack: #2a2a2a;
                --ghost: #ffffff8f
                
            }
            
            input[type="text"] {
                width: 30%;
                padding: 8px 16px;
                margin: 8px;
                border: none;
                background-color: #ffffff8f;
                color: var(--ghost);
                font-family: 'Alexandria', sans-serif;
                font-weight: 300;
            }

            button {
                background-color: #2a2a2a;
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
                opacity: .75;
}
        `
    ];

    render() {
        return html`
        <div class="inputBox">
        <label class="inputLabels" for="name">Nombre:</label>
        <input type="text" id="name" placeholder="Nombre de auto" />
        
        <label class="inputLabels" for="name">Año:</label>
        <input type="text" id="name" placeholder="Año de auto" />
        <br>

        <label class="inputLabels" for="name">Marca:</label>
        <input type="text" id="name" placeholder="Marca de auto" />

        <label class="inputLabels" for="name">Versión:</label>
        <input type="text" id="name" placeholder="Versión de auto" />
        
        <button>Agregar</button>


        </div>
        `;
    }
}
customElements.define('first-component', FirstComponent);
