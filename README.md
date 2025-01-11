<br>

<div align="center">

[<img src="https://raw.githubusercontent.com/JempUnkn/webtv-beta/refs/heads/main/app-icon.png" width="144"/>](https://github.com/jempunkn)

  <h1 align="center">WebTV - BETA</h1>

  <p align="center">
    <strong>É um app/web onde pode assistir Streaming de Canais.</strong>
  </p>

[![build](https://img.shields.io/github/actions/workflow/status/JempUnkn/webtv-beta/dist/builder-debug.yml)](https://github.com/JempUnkn/webtv-beta/releases/tag/v0.3.1.nomenubar-fixbugs)
[![release](https://img.shields.io/github/package-json/v/jempunkn/webtv-beta)](https://github.com/JempUnkn/webtv-beta/releases)
<br>
</div>

# Tutorial Completo: Usando Electron Builder com Electron

Este tutorial completo irá guiá-lo no processo de empacotar e criar um instalador para seu aplicativo Electron usando o **Electron Builder**. Inclui desde a instalação até a personalização e solução de problemas.

## 1. **Instalação do Electron e Electron Builder**

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados. Você pode verificar se já estão instalados executando:

```bash
node -v
npm -v
```

Caso não tenha o **Node.js** e o **npm**, baixe-os em [https://nodejs.org](https://nodejs.org) e instale-os.

Depois de ter o **Node.js** e o **npm** instalados, crie um diretório para o seu projeto e execute os seguintes comandos para inicializar o projeto:

```bash
mkdir meu-app
cd meu-app
npm init -y
```

Isso criará um arquivo `package.json` básico para o seu projeto.

Em seguida, instale o **Electron** e o **Electron Builder**:

```bash
npm install electron --save-dev
npm install electron-builder --save-dev
```

## 2. **Estrutura do Projeto**

A estrutura básica do seu projeto deve ser parecida com isso:

```
meu-app/
├── src/
│   └── index.html
│   └── main.js
├── package.json
└── build/
    └── icon.ico
```

- `src/index.html` é o arquivo HTML que será carregado no aplicativo.
- `src/main.js` é o script principal do Electron que controla a janela do aplicativo.
- `build/icon.ico` é o ícone para o instalador do aplicativo (se desejar personalizar com ícones).

## 3. **Configurando o Electron**

No arquivo `main.js`, você deve configurar a criação da janela do Electron:

```js
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('src/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
```

## 4. **Configurando o Electron Builder**

No seu `package.json`, adicione a configuração do **Electron Builder**. Isso inclui a definição de informações sobre seu aplicativo, como nome, versão, ícones e plataformas de destino (Windows, Mac, Linux).

```json
{
  "name": "meu-app",
  "version": "1.0.0",
  "description": "Descrição do meu aplicativo",
  "main": "src/main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.meuapp",
    "productName": "MeuApp",
    "copyright": "© 2024 MeuApp",
    "win": {
      "icon": "build/icon.ico"
    },
    "mac": {
      "icon": "build/icon.icns"
    },
    "linux": {
      "icon": "build/icon.png"
    },
    "directories": {
      "output": "dist"
    }
  },
  "devDependencies": {
    "electron": "^30.0.0",
    "electron-builder": "^24.13.3"
  }
}
```

- **`appId`**: Identificador único do seu aplicativo.
- **`productName`**: Nome do seu aplicativo.
- **`win.icon`**: Caminho para o ícone do aplicativo no Windows.
- **`mac.icon`**: Caminho para o ícone no Mac (formato `.icns`).
- **`linux.icon`**: Caminho para o ícone no Linux (formato `.png`).

## 5. **Construindo o Aplicativo**

Para construir o aplicativo para **Windows**, execute:

```bash
npm run build
```

Isso criará o instalador do aplicativo na pasta `dist/`.

- **Windows**: O instalador será um arquivo `.exe`.
- **Mac**: O instalador será um arquivo `.dmg`.
- **Linux**: O instalador será em formato `.deb`, `.rpm` ou outro dependendo da configuração.

## 6. **Personalizando o Instalador**

Se você quiser adicionar mais personalizações, como a alteração do ícone do instalador ou a inclusão de opções extras no processo de instalação, você pode editar o campo `build` no `package.json`. Algumas opções comuns incluem:

### 6.1. **Alterando o ícone do instalador**

Adicione o ícone na configuração `win` para Windows, `mac` para Mac, ou `linux` para Linux:

```json
"win": {
  "icon": "build/icon.ico",
  "target": [
    "nsis"
  ]
},
"mac": {
  "icon": "build/icon.icns"
},
"linux": {
  "icon": "build/icon.png"
}
```

### 6.2. **Adicionando arquivos extras ao instalador**

Se você precisar adicionar arquivos extras, como configurações ou arquivos adicionais, use a configuração `files`:

```json
"build": {
  "files": [
    "dist/**/*",
    "src/**/*",
    "build/**/*"
  ]
}
```

Isso garante que todos os arquivos que você deseja incluir no pacote final estejam presentes.

## 7. **Gerenciando Erros Comuns**

### 7.1. **Erro: `ERR_ELECTRON_BUILDER_CANNOT_EXECUTE`**
Esse erro pode ocorrer devido a permissões ou problemas com a instalação do `makensis`. Tente o seguinte:

1. **Verifique as permissões**: Certifique-se de que o **makensis.exe** tenha permissões de execução.
2. **Reinstale o Electron Builder**: Às vezes, o cache do Electron Builder pode estar corrompido. Tente limpar o cache e reinstalar:

```bash
npm run clean
npm install --force
```

3. **Verifique a versão do `makensis`**: Algumas versões do `makensis` podem ter bugs. Certifique-se de usar a versão correta.

### 7.2. **Erro: `can't write X bytes to output`**

Esse erro geralmente ocorre quando o arquivo final excede o tamanho permitido para o processo de criação do instalador. Soluções possíveis incluem:

1. **Reduzir o tamanho do aplicativo**: Tente remover arquivos desnecessários ou compactar recursos (imagens, vídeos, etc.).
2. **Usar outro método de compressão**: Modifique a configuração de compressão no `package.json` para algo como:

```json
"compression": "normal"
```

### 7.3. **Erros ao tentar criar um instalador para Mac**

Se estiver criando para Mac e o instalador falhar, a causa mais comum é a falta de um certificado de assinatura. Você precisará de um **Apple Developer Certificate** para assinar o aplicativo.

## 8. **Dicas**

- **Icones e recursos**: Sempre use ícones de alta qualidade (recomenda-se ícones com 512x512 px para o Windows e 1024x1024 px para o macOS).
- **Testing**: Teste seu instalador localmente antes de distribuí-lo. Para isso, basta baixar o arquivo de saída (por exemplo, `.exe` ou `.dmg`) e instalá-lo em uma máquina.
- **Atualizações**: Se precisar atualizar o aplicativo, o **Electron Builder** suporta a criação de atualizações automáticas através do **Electron Updater**.

## 9. **Finalizando**

Após executar o comando `npm run build`, o instalador estará disponível na pasta `dist/`, e você poderá distribuí-lo para os usuários finais. Caso queira testar o instalador, basta clicar no arquivo gerado e seguir o assistente de instalação.

Se seguir todas essas etapas, você conseguirá empacotar e criar o instalador do seu aplicativo com **Electron** e **Electron Builder** de forma eficaz e sem grandes problemas.
 
Created by me :)
<div align="center">

 [![Nobody](https://i.ibb.co/JqCcwCm/Turbo-Granny-29-Infobox-29.png)](https://github.com/JempUnkn)

WebPage: [webtv.io](https://jempunkn.github.io/webtv-beta) by cybergu!ld
</div>
