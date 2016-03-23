var photo_id = 'photo-71627954_402632215';

VK.init(function() { 
  	console.log('Successful initializtion');
  	post();
  	//VK.callMethod('showInviteBox');
     // API initialization succeeded 
     // Your code here 
}, function() {
  	console.log('Fail initializtion');
     // API initialization failed 
     // Can reload page here 
}, '5.50');

function post(){
	VK.api('wall.post', { message: 'Hello', attachments: photo_id, from_group: 1 }, function(result){
		console.log('wall.post: ' + result);
	});
}