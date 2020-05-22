const fs = require('fs');
const quq = require('quote-unquote');

module.exports = class TemplateService {
    loadTemplate(templateFile) {
        if (!fs.existsSync(templateFile)) {
            throw Error('Template does not exist');
        }
        return fs.readFileSync(templateFile).toString('utf8');
    }

    parseTemplate(template) {
        return template.split("\n").filter((line) => {
            return line.includes('=');
        }).map((line) => {
            const splits = line.split('=');
            const key = splits.shift();
            const value = splits.join('=');
            const parsedKey = key.trim();
            const parsedValue = quq.unquote(value.trim());

            return [parsedKey, parsedValue]
        }).reduce((obj, item) => {
            obj[item[0]] = item[1];
            return obj;
        }, {});
    }

    /**
     * @param {Object} mergedTemplateVariables
     * @return {String}
     */
    unparseTemplate(mergedTemplateVariables) {
        let out = '';
        for (let mergedTemplateVariablesKey in mergedTemplateVariables) {
            out += `${mergedTemplateVariablesKey}=${quq.quote(mergedTemplateVariables[mergedTemplateVariablesKey])}\n`
        }

        return out;
    }
}