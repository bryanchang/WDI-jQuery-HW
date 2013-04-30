function addTodoList(obj){
	var list = "<li> " + obj + " </li>";
	$("#todoList").append(list);
}

$("button").on('click', function(){
	var todoInput = $("#todoInput").val();
	addTodoList(todoInput);
});


