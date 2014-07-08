var SelectorImage = {
	canReturnMultipleRecords: function () {
		return true;
	},

	canHaveChildSelectors: function () {
		return false;
	},

	canHaveLocalChildSelectors: function () {
		return false;
	},

	canCreateNewJobs: function () {
		return false;
	},
	willReturnElements: function () {
		return false;
	},
	_getData: function (parentElement) {
		var elements = this.getDataElements(parentElement);

		var result = [];
		$(elements).each(function (k, element) {
			var data = {};

			data[this.id + '-src'] = element.src;
			result.push(data);
		}.bind(this));

		if (this.multiple === false && elements.length === 0) {
			var data = {};
			data[this.id+'-src'] = null;
			result.push(data);
		}
		return result;
	},

	getDataColumns: function () {
		return [this.id + '-src'];
	},

	getFeatures: function () {
		return ['multiple', 'delay']
	},

	getItemCSSSelector: function() {
		return "img";
	}
};