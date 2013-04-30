$(document).ready(function(){

	$("button").on('click', function(){
		var todoInput = $("<span>" + $("#todo_input").val() + "</span>");
		var lis = $("<li></li>");
		var checkbox = $("<input class='checkbox' type='checkbox'>");
		var img = $("<img class='trash' src='trash.svg'>");

		img.on('click', function() {
			$(this).parent().slideUp(), function(){$(this).remove();}
		});			

		checkbox.on('click', function() {
			var li = $(this).parent();

			if ($(this).prop('checked')) {
					li.insertAfter('#completed_list').css('color', 'red').css('text-decoration', 'line-through');
					// li.insertAfter('#completed_list').addClass('complete')

			} 
			else {
					li.insertAfter('#todo_list');
					li.css('color', 'black');
					li.css('text-decoration', 'none');
			}
		});


		$(checkbox).appendTo(lis);
	  $(todoInput).appendTo(lis);
	  $(img).appendTo(lis);							 
		$(lis).insertAfter('#todo_list');
		$("#todo_input").val('');


	});
});
