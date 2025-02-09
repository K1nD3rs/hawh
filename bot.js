const puppeteer = require('puppeteer');

(async () => {
    try {
        // Запуск браузера в headless режиме
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Переход на нужный сайт
        await page.goto('https://example.com');

        // Ввод данных в поля
        await page.type('#username', 'your_username');
        await page.type('#password', 'your_password');

        // Нажатие на кнопку входа
        await page.click('#loginButton');

        // Ожидание загрузки страницы
        await page.waitForNavigation();

        // Получение текста из нужного элемента
        const resultText = await page.$eval('#resultText', el => el.textContent);

        console.log('Найденный текст:', resultText);

        // Закрытие браузера
        await browser.close();
    } catch (error) {
        console.error('Ошибка:', error);
    }
})();
