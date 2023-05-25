import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://deprem.afad.gov.tr/last-earthquakes.html');
    await page.waitForSelector('body');
    await page.waitForSelector('table', { timeout: 60000 });

    const html = await page.content();
    const $ = cheerio.load(html);

    const depremVerileri = [];

    $('table tr').each((index, element) => {
      if (index === 0) return;

      const cells = $(element).find('td');

      const deprem = {
        tarih: $(cells[0]).text().trim(),
        saat: $(cells[1]).text().trim(),
        enlem: $(cells[2]).text().trim(),
        boylam: $(cells[3]).text().trim(),
        derinlik: $(cells[4]).text().trim(),
        buyukluk: $(cells[5]).text().trim(),
        yer: $(cells[6]).text().trim(),
      };

      depremVerileri.push(deprem);
    });

    res.json(depremVerileri);

    await browser.close();
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    res.status(500).json({ error: 'Veri çekme hatası' });
  }
});

export default router;



