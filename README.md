## D3F

### 关于d3f

研究各种第三方使用

### 目录结构

```
-config/
  -github-deploy/
    -index.js
  -html-elements-plugin
    -index.js
  -empty.js
  -head-config.common.js
  -helpers.js
  -karma.conf.js
  -protractor.conf.js
  -resource-override.js
  -spec-bundle.js
  -wepack.common.js
  -webpack.dev.js
  -webpack.github-deploy.js
  -webpack.prod.js
  -webpack.test.js
-dist
  -webpack-assets.json
-dll
  dll-bundles-state.json
  polyfiles-manifest.json
  polyfilles.dll.js
  polyfills.dll.js.map
  vendor-manifest.json
  vendor.dll.js
  vendor.dll.js.map
-node_modules/
  -...
-src/
  -app/
    -+barrel/
      -+child-barrel
        -child-barrel.component.ts
        -child-barrel.module.ts
        -child-barrel.routes.ts
        -index.ts
      -barrel-component.ts
      -barrel.module.ts
      -barrel.routes.ts
      -index.ts
    -+detail
      -+child-detail/
        -child-detail.component.ts
        -child-detail.module.ts
        -child-detail.routes.ts
        -index.ts
      -detail.component.ts
      -detail.module.ts
      -detail.routes.ts
      -index.ts
    -+survey
      -+survey-editor
        -index.ts
        -survey-editor.component.ts
        -survey-editor.module.ts
        -survey-editor.routes.ts
      -+survey-renderer
        -index.ts
        -survey-renderer.component.ts
        -survey-renderer.module.ts
        -survey-editor.routes.ts
    -about
      -about.component.spec.ts
      -about.component.ts
      -index.ts
    -home
      -title/
        -index.ts
        -title.service.spec.ts
        -title.service.ts
      -x-large
        -index.ts
        -x-large.drective.spec.ts
        -x-large.directive.ts
      -home.component.css
      -home.component.html
      -home.component.spec.ts
      -home.component.ts
      -home.e2e.ts
      -index.ts
    -no-content/
      -index.ts
      -no-content.component.ts
    -app.component.css
    -app.component.spec.ts
    -app.component.ts
    -app.e2e.ts
    -app.module.ts
    -app.resolver.ts
    -app.routes.ts
    -app.service.ts
    -environment.ts
    -index.ts
  -assets/
    -css/
    -icon/
    -img/
    -mock-data/
      -mock-data.json
    -data.json
    -humans.txt
    -manifest.json
    -robots.txt
    -service-worker.js
  -meta/
    -humans.txt
    -robots.txt
  -styles/
    -_variables.scss
    -headings.css
    -styles.scss
  -custom-typings.d.ts
  -index.html
  -main.brower.aot.ts
  -main.brower.ts
  -polyfills.brower.ts
-Dockerfile
-firebase.json
-karma.conf.js
-LICENSE
-netlify.toml
-package.json
-protractor.conf.js
-README.md
-tsconfig.json
-tsconfig.webpack.json
-tslint.json
-typedoc.json
-webpack.config.js
```

### 添加survey支持