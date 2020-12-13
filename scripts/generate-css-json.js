const fs = require('fs');
const revision = require('child_process').execSync('git rev-parse --short HEAD').toString().trim()

const cssDir = './public/static/css';
const imagesDir = './public/static/images';

const titleCase = str => str.replace('-', ' ').toLowerCase()
  .replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase());

const createDir = (path) => {
  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
}

(async () => {
  try {
    const dirs = await fs.readdirSync(cssDir);
    let sites = [];

    for await (let dir of dirs) {
      createDir(`${imagesDir}/${dir}`);

      const variations = [];
      const files = fs.readdirSync(`${cssDir}/${dir}`);

      for await (let file of files) {
        const url = file.replace('.css', '');

        createDir(`${imagesDir}/${dir}/${url}`);

        const { mtime, birthtime } = fs.statSync(`${cssDir}/${dir}/${file}`);
        const count = ((fs.readdirSync(`${imagesDir}/${dir}/${url}`)).length - 1) / 2;

        await variations.push({
          url,
          title: titleCase(url),
          image: `https://betterux.io/static/images/${dir}/${url}/thumb.jpg?${revision}`,
          created: birthtime,
          updated: mtime,
          galleryCount: count > 0 ? Math.floor(count) : 0,
        })
      }

      sites = [...sites, {
        url: dir,
        title: titleCase(dir),
        variations,
      }];
    }

    fs.writeFileSync('./public/static/json/sites.json', JSON.stringify(sites, null, 2));
  } catch (e) {
    console.log('error 2: ', e);
  }
})();
