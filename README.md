Instalação do package.json
-> yarn init -y

instalação do typescript como ambiente de desenvolvimento e lib TSCONFIG
-> yarn add typescript ts-node-dev @types/node tsconfig-paths -D

Criar as depedências do Typescript

-> npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

Executar o servidor em desenvolvimento (arquivo package.json)
-> "scripts": {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
  "lint": "eslint . --ext .ts",
  "lint-fix": "eslint . --ext .ts --fix"
},

ESLint para formatação de código
-> yarn add -D elint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Dentro do arquivo .eslintrc
-> {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn"
  }
}

Adicionar no pacote (package.json)
-> "scripts": {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
->  "lint": "eslint . --ext .ts"
}

indicar os erros detectados de acordo com a configuração
-> yarn lint


INSTALAÇÃO DO PRETTIER
-> yarn add prettier -D

criação do arquivo .prettierrc

-> {
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "arrowParens": "avoid"
}

-> yarn add eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D

inclusão das linhas no arquivo .eslintrc
-> {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
  ->  "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
 ->   "prettier/@typescript-eslint",
 ->   "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
 ->   "prettier/prettier": "error"
  }
}
