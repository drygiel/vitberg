const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

const PAGES = [
  { url: 'https://www.vitberg.com', file: 'homepage.md' },
  { url: 'https://www.vitberg.com/info/o-nas', file: 'o-nas.md' },
  { url: 'https://www.vitberg.com/info/o-terapii.html', file: 'o-terapii.md' },
  { url: 'https://www.vitberg.com/info/zastosowanie.html', file: 'zastosowanie.md' },
  { url: 'https://www.vitberg.com/info/kariera.html', file: 'kariera.md' },
  { url: 'https://www.vitberg.com/info/wspolpraca.html', file: 'wspolpraca.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/aparat-bazowy-vitberg-rs.html', file: 'aparat-bazowy.md' },
  { url: 'https://www.vitberg.com/info/vitberg-rs-program-oxy.html', file: 'program-oxy.md' },
  { url: 'https://www.vitberg.com/info/vitberg-rs-program-neuro.html', file: 'program-neuro.md' },
  { url: 'https://www.vitberg.com/info/vitberg-rs-program-cardio.html', file: 'program-cardio.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/modul-kolana-vitberg-rs.html', file: 'modul-kolana.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/modul-nogi-vitberg-rs.html', file: 'modul-nogi.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/modul-plecy-vitberg-rs.html', file: 'modul-plecy.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/modul-rece-vitberg-rs2.html', file: 'modul-rece.md' },
  { url: 'https://www.vitberg.com/vitberg-rs/modul-brzuch-vitberg-rs.html', file: 'modul-brzuch.md' }
];

async function scrapePage(page) {
  try {
    console.log(`Fetching ${page.url}...`);
    const res = await fetch(page.url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    // Clean up unwanted tags (scripts, styles, iframe, noscript, headers, footers, etc.)
    $('script, style, iframe, noscript, header, footer, #header, #footer, aside, nav, .breadcrumb, .cookieconsent, #cc-main').remove();

    // Target the main content container robustly
    const selectors = ['.elementor', '#content', '#wrapper', '#main', 'body'];
    let mainContent = '';

    for (const selector of selectors) {
      const el = $(selector);
      if (el.length > 0 && el.text().trim().length > 100) {
        mainContent = el.html();
        break;
      }
    }

    if (!mainContent) {
      mainContent = $('body').html();
    }

    // Convert to markdown
    let markdown = turndownService.turndown(mainContent);

    // Clean up empty lines and redundant spacings
    markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();

    const outputDir = path.join(__dirname, '../database');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, page.file);
    fs.writeFileSync(outputPath, `# ${$('title').text().trim()}\n\nSource: ${page.url}\n\n${markdown}`);
    console.log(`Saved ${page.file}`);
  } catch (err) {
    console.error(`Failed to scrape ${page.url}:`, err.message);
  }
}

async function run() {
  for (const page of PAGES) {
    await scrapePage(page);
    // Add small delay to avoid hitting rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

run();
