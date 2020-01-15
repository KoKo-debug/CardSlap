export function clearTimeout() {
    let id = window.setTimeout(function () { }, 0);

    while (id--) {
        window.clearTimeout(id);
    }
}