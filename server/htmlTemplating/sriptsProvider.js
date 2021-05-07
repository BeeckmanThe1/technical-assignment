const getStylingScripts = () => `<link rel="stylesheet" type="text/css" href="/client.${process.env.ENV === 'development' ? 'dev' : 'prod'}.bundle.css">`
const getBootstrapAppScript = () => `<script src='/client.${process.env.ENV === 'development' ? 'dev' : 'prod'}.bundle.js'></script>`; //This is the bundled address from client > hydrateApp.jsx

export default {getBootstrapAppScript, getStylingScripts}
