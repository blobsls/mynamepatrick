class ElementHandler {
    constructor(private selector: string) {}

    getElement(): HTMLElement | null {
        return document.querySelector(this.selector);
    }

    setText(text: string): void {
        const element = this.getElement();
        if (element) {
            element.textContent = text;
        }
    }

    setStyle(style: string, value: string): void {
        const element = this.getElement();
        if (element) {
            element.style[style as any] = value;
        }
    }

    addEventListener(event: string, callback: EventListener): void {
        const element = this.getElement();
        if (element) {
            element.addEventListener(event, callback);
        }
    }

    setAttribute(attr: string, value: string): void {
        const element = this.getElement();
        if (element) {
            element.setAttribute(attr, value);
        }
    }

    toggleClass(className: string): void {
        const element = this.getElement();
        if (element) {
            element.classList.toggle(className);
        }
    }
}
