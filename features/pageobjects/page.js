module.exports = class Page {
    async open(path) {
        if (path == '' || path == '/') {
            await browser.url('https://www.saucedemo.com/');
        } else {
            await browser.url(`https://www.saucedemo.com/${path}`);
        }
    }
}
