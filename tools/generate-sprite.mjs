import fs from 'fs'
import path from 'path'
import SVGSpriter from 'svg-sprite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

// Create a sprite from a directory of svg files.

const projectRootDir = path.resolve(__dirname, '../')

function generateSprite() {
  const prefix = 'f'
  const iconDelim = 'i'
  const srcDir = path.join(projectRootDir, process.argv[2] || 'src/icons')
  const outputDir = path.join(projectRootDir, process.argv[3] || 'src/demo/assets/img')
  const spriteName = process.argv[3] ? '' : '/formeo-sprite.svg'

  const isSvg = filePath => /.svg$/.test(filePath)
  const iconPaths = fs
    .readdirSync(srcDir)
    .filter(isSvg)
    .map(filename => ({
      file: `${srcDir}/${filename}`,
      name: filename,
    }))

  const spriteConfig = {
    dest: outputDir,
    log: 'info',
    shape: {
      id: {
        generator: name => name.replace(/^icon-(.*)\.svg$/, `${prefix}-${iconDelim}-$1`),
      },
      transform: [
        {
          svgo: {
            plugins: [
              { name: 'preset-default' },
              { name: 'cleanupAttrs' },
              { name: 'removeDimensions' },
              { name: 'removeTitle' },
              { name: 'removeUselessDefs' },
              { name: 'mergePaths' },
              { name: 'removeStyleElement' },
              { name: 'removeNonInheritableGroupAttrs' },
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(stroke|fill|style|^font-*)',
                },
              },
            ],
          },
        },
      ],
    },

    mode: {
      symbol: true,
    },
  }

  const spriter = new SVGSpriter(spriteConfig)

  iconPaths.forEach(iconPath => {
    spriter.add(iconPath.file, iconPath.name, fs.readFileSync(iconPath.file, 'utf-8'))
  })

  // Compile the sprite
  spriter.compile(function(error, result) {
    if (error) {
      throw new Error(error)
    }
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputDir + spriteName, result.symbol.sprite.contents)
  })
}

generateSprite();
