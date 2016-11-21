// Don't commit this file to your public repos. This config is for first-run
exports.creds = {
  // Requried. Tenent-specific endpoint is required.
  identityMetadata: 'https://login.microsoftonline.com/sijun1b2c.onmicrosoft.com/v2.0/.well-known/openid-configuration',
  // or 'https://login.microsoftonline.com/<your_tenant_guid>/v2.0/.well-known/openid-configuration'
  
  // Required
  clientID: 'f0b6e4eb-2d8c-40b6-b9c6-e26d1074846d',

  // Required
  validateIssuer: true,

  // Required. 
  // Set to true if you use `function(req, token, done)` as the verify callback.
  // Set to false if you use `function(req, token)` as the verify callback.
  passReqToCallback: false,

  // Required to be true to use B2C
  isB2C: true,

  // Required to use B2C
  policyName:'B2C_1_signin',

  // Optional, we use the issuer from metadata by default
  issuer: null,

  // Optional, default value is clientID
  audience: null,

  // Optional. Default value is false.
  // Set to true if you accept access_token whose `aud` claim contains multiple values.
  allowMultiAudiencesInToken: false,

  // Optional. 'error', 'warn' or 'info'
  loggingLevel:'info',
};

// Your mongo auth uri goes here;
exports.mongoose_auth_local = 'mongodb://localhost/tasklist'; 
