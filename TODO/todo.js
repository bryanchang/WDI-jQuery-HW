$(document).ready(function(){

	$("button").on('click', function(){
		var todoInput = $("#todo_input").val();
		var list = "<li>" 
							+ "<input class='checkbox' type='checkbox'>"
							+ todoInput
							+ "<img class='trash' src='trash.svg'>" 
							+ "</li>";
		$(list).insertAfter('#todo_list');
		$("#todo_input").val('');

		$('.trash').on('click', function() {
			$(this).parent().slideUp(), function(){$(this).remove();}
		});			

		$('.checkbox').on('click', function() {
			if ($(this).prop('checked')) {
					$(this).parent().insertAfter('#completed_list');
					$(this).parent().css('color', 'red');
					$(this).parent().css('text-decoration', 'line-through');
			} 
			else {
					$(this).parent().insertAfter('#todo_list');
					$(this).parent().css('color', 'black');
					$(this).parent().css('text-decoration', 'none');

			}
		});
	});
});
