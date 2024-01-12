# **Enlace GitHubPages**

[https://jhonuru.github.io/website/](https://jhonuru.github.io/website/)

# **Dependencias**

## Bootstrap 

```bash
npm install bootstrap@5.3.2

#App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Sass

```bash
npm install sass
```

## FontAwesome

```bash
npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest

#app.jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)

#home.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
```

## AOS

```bash
npm install aos --save

#App.jsx

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

useEffect(() => {
    Aos.init();
  }, [])
```

## GITHUB PAGES

```bash
npm i gh-pages -D

#vite.config.js
base: "/el-nombre-de-tu-repositorio/",

```