$(function() {
	var canBeEdit = false;
	var editButton = $('.edit-button');
	var activityItem = $('.activity-item');
	editButton.click = function() {
	if (canBeEdit == false) {
		canBeEdit = true;
		editButton.html('确认');
		activityItem.removeClass('dispear');
	} else {
		canBeEdit = false;
		editButton.html('编辑');
		activityItem.addClass('dispear');
	}
	}
	var editbutton = $('.edit');
	var deletebutton = $('.delete');
	var upmovebutton = $('.upmove');
	var downmovebutton = $('.downmove');


	editbutton.click = function() {
		if (this.canBeEdit == true) {
			this.canBeEdit = false;
			form -> section;
		}  else (this.canBeEdit == false) {
			this.canBeEdit = true;
			section -> form;
		}
	}

	deletebutton.click = function() {
		$(this).parent("section").remove();
	}

	upmovebutton.click = function() {
		$(this).prev().prev(this);
		this.remove();

	}

	downmovebutton.click = function() {
		$(this).next().after(this);
		this.remove();
	}

})();