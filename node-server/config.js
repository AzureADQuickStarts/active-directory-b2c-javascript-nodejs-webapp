 // Don't commit this file to your public repos. This config is for first-run
 exports.creds = {
     mongoose_auth_local: 'mongodb://localhost/tasklist', // Your mongo auth uri goes here
     clientID: '<client ID>',
     audience: 'http://kidventus.net/TodoListService',
     identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
     tenantName:'<tenant name>',
     policyName:'<policy>',
     validateIssuer: true
 };
