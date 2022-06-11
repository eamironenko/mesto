export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItemStart(element) {
        this._container.prepend(element);
    }

    addItemEnd(element) {
        this._container.append(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems(renderedItems) {
        renderedItems.forEach((item) => {
            this._renderer(item)
        });
    }
}