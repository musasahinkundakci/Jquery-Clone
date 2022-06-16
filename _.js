function cu(target) {
    let ptr = document.querySelector(target);
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
    ptr.on = function (eventName, callback) {
        ptr.addEventListener(eventName, callback);
        return ptr;
    };
    ptr.click = function (callback) {
        ptr.addEventListener('click', callback);
        return ptr;
    };
    ptr.dblclick(callback){
        ptr.addEventListener("dblclick",callback)
        return ptr;
    }
    return ptr;
}
