import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname em ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.join(__dirname, 'dist')
const filePath = path.join(distDir, '404.html')

const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=/" />
    <link rel="canonical" href="/" />
  </head>
  <body>
    <p>If you are not redirected, <a href="/">click here</a>.</p>
  </body>
</html>
`

;(async () => {
  try {
    await fs.writeFile(filePath, htmlContent, 'utf8')
    console.log('404.html has been created in the dist folder.')
  } catch (error) {
    console.error('Error creating 404.html:', error)
  }
})()
