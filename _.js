function cu(target) {
    let ptr = document.querySelector(target);

    /**
     *
     * @defination Basic html operations
     */
    ptr.text = function (text) {
        if (text) {
            ptr.innerText = text;
            return ptr;
        }
        return ptr.innerText;
    };
    ptr.html = function () {
        return self.innerHTML;
    };
    ptr.css = function (styles) {
        for (let key in styles) {
            ptr.style[key] = styles[key];
        }
        return ptr;
    };

    /**
     * @defination Bind event with the living element
     * @param {*} eventName
     * @param {*} callback
     * @returns ptr
     */
    ptr.on = function (eventName, callback) {
        ptr.addEventListener(eventName, callback);
        return ptr;
    };

    /**
     * @defination  Bind event with the living element
     * @param {*} callback
     * @returns ptr
     */
    ptr.click = function (callback) {
        ptr.addEventListener('click', callback);
        return ptr;
    };
    ptr.dblclick = function (callback) {
        ptr.addEventListener('dblclick', callback);
        return ptr;
    };
    ptr.hover = function (callback) {
        ptr.addEventListener('mouseover', callback);
        return ptr;
    };
    ptr.mouseEnter = function (callback) {
        ptr.addEventListener('mouseenter', callback);
        return ptr;
    };
    ptr.mouseLeave = function (callback) {
        ptr.addEventListener('mouseleave', callback);
        return ptr;
    };
    ptr.toggle = function () {
        ptr.css({
            display: ptr.style.display === 'none' ? 'inline-block' : 'none',
        });
    };

    /**
     * @defination AJAX operations
     */
    async function get(url) {
        fetch();
    }
    return ptr;
}
