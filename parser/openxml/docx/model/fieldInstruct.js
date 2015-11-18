'use strict';

define(['../model'], function (Super) {
	return Super.extend(function (wXml, wDoc, mParent) {
		Super.apply(this, arguments);
		wDoc.parseContext.field.instruct(wXml.textContent);
	}, {

		parse: function parse() {}
	}, { type: 'fieldInstruct' });
});
//# sourceMappingURL=fieldInstruct.js.map