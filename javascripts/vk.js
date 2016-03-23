var photo1 = 'photo-71627954_404741670';
var photo2 = 'photo-71627954_404741553';
var photo3 = 'photo-71627954_404741553';

VK.init(function() { 
  	console.log('Successful initializtion');
  	//VK.callMethod('showInviteBox');
     // API initialization succeeded 
     // Your code here 
}, function() {
  	console.log('Fail initializtion');
     // API initialization failed 
     // Can reload page here 
}, '5.50');

function post(score){
	var photo;
	if (score <= 4)
		photo = photo1;
	else if (sore <=9)
		photo = photo2;
	else 
		photo = photo3;
	VK.api('wall.post', { message: 'Hello', attachments: photo, from_group: 1 }, function(result){
		console.log('wall.post: ' + result);
	});
}