import scriptsProvider from './sriptsProvider';
import {renderToString} from "react-dom/server";
import PageToJsxMapper from "../../hybrid/utils/PageToJsxMapper/PageToJsxMapper";

const getHeadTag = PAGE => {

    const headTag = `<head>
            <title>${PAGE?.TITLE}</title>
            <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <meta id="description" name="description" content="${PAGE.META_DESCRIPTION}"/>
            <script src="https://kit.fontawesome.com/4ba6f840db.js" crossorigin="anonymous"></script>
            <style>@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');</style>
            <link rel="icon" type="image/png" href="/favicon.svg"/>
            ${scriptsProvider.getStylingScripts()}
        </head>`;

    return headTag;
};

const getPageBody = (html, PAGE) => {
    return `<body id="${PAGE?.ID}"><div id="${PAGE?.WRAPPER_ID}">${html}</div></body>${scriptsProvider.getBootstrapAppScript()}`
}

const AddHeaderAndBodyWrapper = (reactHtml, options) => {
    const headTag = getHeadTag(options);
    const bodyTag = getPageBody(reactHtml, options);

    return `<!DOCTYPE html>
        	<html lang="nl">
				${headTag}
				${bodyTag}
        	</html>`;
};

export const getPageHtml = PAGE => {
    const pageHtml = PageToJsxMapper(PAGE, true);
    return AddHeaderAndBodyWrapper(pageHtml, PAGE);
};
