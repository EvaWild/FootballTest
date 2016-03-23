VK.init(function() { 
  	console.log('Successful initializtion');
  	VK.callMethod('showInviteBox');
     // API initialization succeeded 
     // Your code here 
}, function() {
  	console.log('Fail initializtion');
     // API initialization failed 
     // Can reload page here 
}, '5.50');