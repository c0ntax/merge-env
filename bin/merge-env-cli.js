#!/usr/bin/env node

const TemplateService = require('../lib/TemplateService');
const EnvironmentService = require('../lib/EnvironmentService');

const templateFile = process.argv[2];

const templateService = new TemplateService();
const environmentService = new EnvironmentService();
const template = templateService.loadTemplate(templateFile);
const environmentVariableTemplate = templateService.parseTemplate(template);
const mergedEnvironmentVariables = environmentService.merge(process.env, environmentVariableTemplate);
const unparsedTemplate = templateService.unparseTemplate(mergedEnvironmentVariables);

process.stdout.write(unparsedTemplate);
