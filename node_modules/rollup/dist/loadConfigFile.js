/*
  @license
	Rollup.js v2.47.0
	Tue, 04 May 2021 05:02:40 GMT - commit 6cc9d6b5137dd80fef9618e97471f89f8fbc54ad


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('fs');
require('path');
require('url');
require('./shared/rollup.js');
require('./shared/mergeOptions.js');
require('crypto');
require('events');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
