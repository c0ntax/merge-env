module.exports = class EnvironmentService {
    /**
     * @param {Object} environmentVariables
     * @param {Object} environmentVariableTemplate
     * @returns {Object}
     */
    merge(environmentVariables, environmentVariableTemplate) {
        for (let envKey in environmentVariables) {
            if (envKey in environmentVariableTemplate) {
                environmentVariableTemplate[envKey] = environmentVariables[envKey]
            }
        }

        return environmentVariableTemplate;
    }
}