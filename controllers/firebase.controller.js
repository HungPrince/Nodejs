var FirebaseModel = require('./../models/firebase.model');
var TaskQueue = require('task-queue');

var AsyncWorkQueue = require("async-work-queue");

// var worker = function (task, callback) {
//     // do something here with the task 
//     callback(error, result);
// }

// var asyncQueue = new AsyncWorkQueue(worker);
// asyncQueue.push("task1", function (error, result) { if(result) console.log (result) });
// asyncQueue.push("task2", function (error, result) { if(result) console.log (result) });
// asyncQueue.push("task3", function (error, result) { if(result) console.log (result) });

// function error(error, task){
// 	console.log(error);
// }

//var queue = TaskQueue.Queue({capacity: 10, concurrency: 10, timeout:1000});

module.exports = {
    // getAccessToken: function (req, res) {
	// 	queue.start();
	// 	for (var i = 0; i < 10; i++) {
	// 		queue.enqueue(myCreateTask(i));
	// 	}

	// 	function myCreateTask(i) {
	// 		console.log(i);
		
	// 		return function () {
	// 			console.log("Task " + i);
	// 		};
	// 	}
		
	// 	queue.finished = function(){
	// 		console.log('finished');
	// 	}
			
	// 	res.json(true);
      //  FirebaseModel.getAccessToken().then(function (data) {
        //    res.json(data);
     //   });
		
		
    // }
}