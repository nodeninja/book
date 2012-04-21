/**
$.ajax({
  url: '/api/raceInfo',
  success: function(data) {
    console.log(data);
  }
});*/

var data = [{"date":"2012-03-04","time":"12:30:00","venue":"Sunshine Coast","race":"1","meetingType":"R","places":4},{"date":"2012-03-04","time":"13:05:00","venue":"Sunshine Coast","race":"2","meetingType":"R","places":4},{"date":"2012-03-04","time":"13:40:00","venue":"Sunshine Coast","race":"3","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:15:00","venue":"Sunshine Coast","race":"4","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:50:00","venue":"Sunshine Coast","race":"5","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:25:00","venue":"Sunshine Coast","race":"6","meetingType":"R","places":4},{"date":"2012-03-04","time":"16:05:00","venue":"Sunshine Coast","race":"7","meetingType":"R","places":4},{"date":"2012-03-04","time":"16:42:00","venue":"Sunshine Coast","race":"8","meetingType":"R","places":4},{"date":"2012-03-04","time":"12:00:00","venue":"Bendigo","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"12:35:00","venue":"Bendigo","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:10:00","venue":"Bendigo","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:45:00","venue":"Bendigo","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"14:20:00","venue":"Bendigo","race":"5","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:58:00","venue":"Bendigo","race":"6","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:38:00","venue":"Bendigo","race":"7","meetingType":"R","places":4},{"date":"2012-03-04","time":"16:14:00","venue":"Bendigo","race":"8","meetingType":"R","places":4},{"date":"2012-03-04","time":"12:20:00","venue":"Murray Bridge","race":"1","meetingType":"R","places":4},{"date":"2012-03-04","time":"12:55:00","venue":"Murray Bridge","race":"2","meetingType":"R","places":4},{"date":"2012-03-04","time":"13:30:00","venue":"Murray Bridge","race":"3","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:05:00","venue":"Murray Bridge","race":"4","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:40:00","venue":"Murray Bridge","race":"5","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:16:00","venue":"Murray Bridge","race":"6","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:54:00","venue":"Murray Bridge","race":"7","meetingType":"R","places":4},{"date":"2012-03-04","time":"16:34:00","venue":"Murray Bridge","race":"8","meetingType":"R","places":4},{"date":"2012-03-04","time":"12:45:00","venue":"Armidale","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:20:00","venue":"Armidale","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:55:00","venue":"Armidale","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"14:30:00","venue":"Armidale","race":"4","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:08:00","venue":"Armidale","race":"5","meetingType":"R","places":4},{"date":"2012-03-04","time":"15:46:00","venue":"Armidale","race":"6","meetingType":"R","places":4},{"date":"2012-03-04","time":"16:22:00","venue":"Armidale","race":"7","meetingType":"R","places":4},{"date":"2012-03-04","time":"14:54:00","venue":"Bunbury","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:34:00","venue":"Bunbury","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:10:00","venue":"Bunbury","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:50:00","venue":"Bunbury","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:25:00","venue":"Bunbury","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:00:00","venue":"Bunbury","race":"6","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:35:00","venue":"Bunbury","race":"7","meetingType":"R","places":3},{"date":"2012-03-04","time":"19:15:00","venue":"Bunbury","race":"8","meetingType":"R","places":3},{"date":"2012-03-04","time":"19:55:00","venue":"Bunbury","race":"9","meetingType":"R","places":3},{"date":"2012-03-04","time":"12:05:00","venue":"Devonport","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"12:40:00","venue":"Devonport","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:15:00","venue":"Devonport","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:50:00","venue":"Devonport","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"14:25:00","venue":"Devonport","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:04:00","venue":"Devonport","race":"6","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:42:00","venue":"Devonport","race":"7","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:18:00","venue":"Devonport","race":"8","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:15:00","venue":"Alice Springs","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:55:00","venue":"Alice Springs","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:30:00","venue":"Alice Springs","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:10:00","venue":"Alice Springs","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:48:00","venue":"Alice Springs","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:56:00","venue":"Geelong","race":"1","meetingType":"T","places":3},{"date":"2012-03-04","time":"17:19:00","venue":"Geelong","race":"2","meetingType":"T","places":3},{"date":"2012-03-04","time":"17:47:00","venue":"Geelong","race":"3","meetingType":"T","places":3},{"date":"2012-03-04","time":"18:14:00","venue":"Geelong","race":"4","meetingType":"T","places":3},{"date":"2012-03-04","time":"18:41:00","venue":"Geelong","race":"5","meetingType":"T","places":3},{"date":"2012-03-04","time":"19:01:00","venue":"Geelong","race":"6","meetingType":"T","places":3},{"date":"2012-03-04","time":"19:29:00","venue":"Geelong","race":"7","meetingType":"T","places":3},{"date":"2012-03-04","time":"19:51:00","venue":"Geelong","race":"8","meetingType":"T","places":3},{"date":"2012-03-04","time":"17:03:00","venue":"Mt Gambier","race":"1","meetingType":"T","places":4},{"date":"2012-03-04","time":"17:31:00","venue":"Mt Gambier","race":"2","meetingType":"T","places":4},{"date":"2012-03-04","time":"17:55:00","venue":"Mt Gambier","race":"3","meetingType":"T","places":4},{"date":"2012-03-04","time":"18:21:00","venue":"Mt Gambier","race":"4","meetingType":"T","places":4},{"date":"2012-03-04","time":"18:49:00","venue":"Mt Gambier","race":"5","meetingType":"T","places":4},{"date":"2012-03-04","time":"19:09:00","venue":"Mt Gambier","race":"6","meetingType":"T","places":4},{"date":"2012-03-04","time":"19:36:00","venue":"Mt Gambier","race":"7","meetingType":"T","places":4},{"date":"2012-03-04","time":"09:15:00","venue":"Addington","race":"1","meetingType":"T","places":3},{"date":"2012-03-04","time":"09:45:00","venue":"Addington","race":"2","meetingType":"T","places":3},{"date":"2012-03-04","time":"10:15:00","venue":"Addington","race":"3","meetingType":"T","places":3},{"date":"2012-03-04","time":"10:47:00","venue":"Addington","race":"4","meetingType":"T","places":3},{"date":"2012-03-04","time":"11:15:00","venue":"Addington","race":"5","meetingType":"T","places":3},{"date":"2012-03-04","time":"11:47:00","venue":"Addington","race":"6","meetingType":"T","places":3},{"date":"2012-03-04","time":"12:21:00","venue":"Addington","race":"7","meetingType":"T","places":3},{"date":"2012-03-04","time":"12:56:00","venue":"Addington","race":"8","meetingType":"T","places":3},{"date":"2012-03-04","time":"13:31:00","venue":"Addington","race":"9","meetingType":"T","places":3},{"date":"2012-03-04","time":"14:06:00","venue":"Addington","race":"10","meetingType":"T","places":3},{"date":"2012-03-04","time":"14:41:00","venue":"Addington","race":"11","meetingType":"T","places":3},{"date":"2012-03-04","time":"15:06:00","venue":"Addington","race":"12","meetingType":"T","places":3},{"date":"2012-03-04","time":"16:45:00","venue":"Hobart","race":"1","meetingType":"T","places":3},{"date":"2012-03-04","time":"17:11:00","venue":"Hobart","race":"2","meetingType":"T","places":3},{"date":"2012-03-04","time":"17:39:00","venue":"Hobart","race":"3","meetingType":"T","places":3},{"date":"2012-03-04","time":"18:06:00","venue":"Hobart","race":"4","meetingType":"T","places":3},{"date":"2012-03-04","time":"18:29:00","venue":"Hobart","race":"5","meetingType":"T","places":3},{"date":"2012-03-04","time":"18:56:00","venue":"Hobart","race":"6","meetingType":"T","places":3},{"date":"2012-03-04","time":"19:21:00","venue":"Hobart","race":"7","meetingType":"T","places":3},{"date":"2012-03-04","time":"19:44:00","venue":"Hobart","race":"8","meetingType":"T","places":3},{"date":"2012-03-04","time":"20:07:00","venue":"Hobart","race":"9","meetingType":"T","places":3},{"date":"2012-03-04","time":"10:01:00","venue":"United States","race":"1","meetingType":"T","places":3},{"date":"2012-03-04","time":"10:20:00","venue":"United States","race":"2","meetingType":"T","places":3},{"date":"2012-03-04","time":"10:41:00","venue":"United States","race":"3","meetingType":"T","places":3},{"date":"2012-03-04","time":"11:01:00","venue":"United States","race":"4","meetingType":"T","places":3},{"date":"2012-03-04","time":"11:21:00","venue":"United States","race":"5","meetingType":"T","places":3},{"date":"2012-03-04","time":"11:42:00","venue":"United States","race":"6","meetingType":"T","places":3},{"date":"2012-03-04","time":"12:05:00","venue":"United States","race":"7","meetingType":"T","places":3},{"date":"2012-03-04","time":"12:25:00","venue":"United States","race":"8","meetingType":"T","places":3},{"date":"2012-03-04","time":"12:45:00","venue":"United States","race":"9","meetingType":"T","places":3},{"date":"2012-03-04","time":"13:24:00","venue":"United States","race":"11","meetingType":"T","places":3},{"date":"2012-03-04","time":"13:44:00","venue":"United States","race":"12","meetingType":"T","places":3},{"date":"2012-03-04","time":"14:04:00","venue":"United States","race":"13","meetingType":"T","places":3},{"date":"2012-03-04","time":"16:41:00","venue":"Albion Park","race":"1","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:05:00","venue":"Albion Park","race":"2","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:22:00","venue":"Albion Park","race":"3","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:46:00","venue":"Albion Park","race":"4","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:03:00","venue":"Albion Park","race":"5","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:25:00","venue":"Albion Park","race":"6","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:45:00","venue":"Albion Park","race":"7","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:05:00","venue":"Albion Park","race":"8","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:27:00","venue":"Albion Park","race":"9","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:50:00","venue":"Albion Park","race":"10","meetingType":"G","places":4},{"date":"2012-03-04","time":"13:14:00","venue":"Sandown Park","race":"1","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:29:00","venue":"Sandown Park","race":"2","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:49:00","venue":"Sandown Park","race":"3","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:04:00","venue":"Sandown Park","race":"4","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:24:00","venue":"Sandown Park","race":"5","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:39:00","venue":"Sandown Park","race":"6","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:04:00","venue":"Sandown Park","race":"7","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:24:00","venue":"Sandown Park","race":"8","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:41:00","venue":"Sandown Park","race":"9","meetingType":"G","places":3},{"date":"2012-03-04","time":"16:04:00","venue":"Sandown Park","race":"10","meetingType":"G","places":3},{"date":"2012-03-04","time":"16:25:00","venue":"Sandown Park","race":"11","meetingType":"G","places":3},{"date":"2012-03-04","time":"16:44:00","venue":"Sandown Park","race":"12","meetingType":"G","places":3},{"date":"2012-03-04","time":"16:53:00","venue":"Sale","race":"1","meetingType":"G","places":3},{"date":"2012-03-04","time":"17:08:00","venue":"Sale","race":"2","meetingType":"G","places":3},{"date":"2012-03-04","time":"17:29:00","venue":"Sale","race":"3","meetingType":"G","places":3},{"date":"2012-03-04","time":"17:44:00","venue":"Sale","race":"4","meetingType":"G","places":3},{"date":"2012-03-04","time":"18:04:00","venue":"Sale","race":"5","meetingType":"G","places":3},{"date":"2012-03-04","time":"18:19:00","venue":"Sale","race":"6","meetingType":"G","places":3},{"date":"2012-03-04","time":"18:39:00","venue":"Sale","race":"7","meetingType":"G","places":3},{"date":"2012-03-04","time":"18:54:00","venue":"Sale","race":"8","meetingType":"G","places":3},{"date":"2012-03-04","time":"19:19:00","venue":"Sale","race":"9","meetingType":"G","places":3},{"date":"2012-03-04","time":"19:34:00","venue":"Sale","race":"10","meetingType":"G","places":3},{"date":"2012-03-04","time":"19:49:00","venue":"Sale","race":"11","meetingType":"G","places":3},{"date":"2012-03-04","time":"16:47:00","venue":"Gawler","race":"1","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:10:00","venue":"Gawler","race":"2","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:34:00","venue":"Gawler","race":"3","meetingType":"G","places":4},{"date":"2012-03-04","time":"17:51:00","venue":"Gawler","race":"4","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:16:00","venue":"Gawler","race":"5","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:34:00","venue":"Gawler","race":"6","meetingType":"G","places":4},{"date":"2012-03-04","time":"18:53:00","venue":"Gawler","race":"7","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:14:00","venue":"Gawler","race":"8","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:35:00","venue":"Gawler","race":"9","meetingType":"G","places":4},{"date":"2012-03-04","time":"19:55:00","venue":"Gawler","race":"10","meetingType":"G","places":4},{"date":"2012-03-04","time":"12:28:00","venue":"Healesville","race":"1","meetingType":"G","places":3},{"date":"2012-03-04","time":"12:46:00","venue":"Healesville","race":"2","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:03:00","venue":"Healesville","race":"3","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:21:00","venue":"Healesville","race":"4","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:38:00","venue":"Healesville","race":"5","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:56:00","venue":"Healesville","race":"6","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:13:00","venue":"Healesville","race":"7","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:31:00","venue":"Healesville","race":"8","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:47:00","venue":"Healesville","race":"9","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:11:00","venue":"Healesville","race":"10","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:29:00","venue":"Healesville","race":"11","meetingType":"G","places":3},{"date":"2012-03-04","time":"15:47:00","venue":"Healesville","race":"12","meetingType":"G","places":3},{"date":"2012-03-04","time":"11:38:00","venue":"Manukau","race":"1","meetingType":"G","places":3},{"date":"2012-03-04","time":"11:56:00","venue":"Manukau","race":"2","meetingType":"G","places":3},{"date":"2012-03-04","time":"12:14:00","venue":"Manukau","race":"3","meetingType":"G","places":3},{"date":"2012-03-04","time":"12:31:00","venue":"Manukau","race":"4","meetingType":"G","places":3},{"date":"2012-03-04","time":"12:49:00","venue":"Manukau","race":"5","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:06:00","venue":"Manukau","race":"6","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:24:00","venue":"Manukau","race":"7","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:41:00","venue":"Manukau","race":"8","meetingType":"G","places":3},{"date":"2012-03-04","time":"13:59:00","venue":"Manukau","race":"9","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:16:00","venue":"Manukau","race":"10","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:34:00","venue":"Manukau","race":"11","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:55:00","venue":"Manukau","race":"12","meetingType":"G","places":3},{"date":"2012-03-04","time":"14:50:00","venue":"Kranji","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:20:00","venue":"Kranji","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:50:00","venue":"Kranji","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:20:00","venue":"Kranji","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:50:00","venue":"Kranji","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:25:00","venue":"Kranji","race":"6","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:55:00","venue":"Kranji","race":"7","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:30:00","venue":"Kranji","race":"8","meetingType":"R","places":3},{"date":"2012-03-04","time":"19:00:00","venue":"Kranji","race":"9","meetingType":"R","places":3},{"date":"2012-03-04","time":"19:30:00","venue":"Kranji","race":"10","meetingType":"R","places":3},{"date":"2012-03-04","time":"20:00:00","venue":"Kranji","race":"11","meetingType":"R","places":3},{"date":"2012-03-04","time":"20:30:00","venue":"Kranji","race":"12","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:20:00","venue":"UK","race":"1","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:50:00","venue":"UK","race":"2","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:10:00","venue":"England","race":"1","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:40:00","venue":"England","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:00:00","venue":"Sha Tin","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"15:30:00","venue":"Sha Tin","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:05:00","venue":"Sha Tin","race":"3","meetingType":"R","places":3},{"date":"2012-03-04","time":"16:35:00","venue":"Sha Tin","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:05:00","venue":"Sha Tin","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"17:40:00","venue":"Sha Tin","race":"6","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:10:00","venue":"Sha Tin","race":"7","meetingType":"R","places":3},{"date":"2012-03-04","time":"18:55:00","venue":"Sha Tin","race":"8","meetingType":"R","places":3},{"date":"2012-03-04","time":"19:25:00","venue":"Sha Tin","race":"9","meetingType":"R","places":3},{"date":"2012-03-04","time":"20:00:00","venue":"Sha Tin","race":"10","meetingType":"R","places":3},{"date":"2012-03-04","time":"09:55:00","venue":"Cromwell","race":"1","meetingType":"R","places":3},{"date":"2012-03-04","time":"10:30:00","venue":"Cromwell","race":"2","meetingType":"R","places":3},{"date":"2012-03-04","time":"11:00:00","venue":"Cromwell","race":"3","meetingType":"R","places":4},{"date":"2012-03-04","time":"11:30:00","venue":"Cromwell","race":"4","meetingType":"R","places":3},{"date":"2012-03-04","time":"12:06:00","venue":"Cromwell","race":"5","meetingType":"R","places":3},{"date":"2012-03-04","time":"12:41:00","venue":"Cromwell","race":"6","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:16:00","venue":"Cromwell","race":"7","meetingType":"R","places":3},{"date":"2012-03-04","time":"13:51:00","venue":"Cromwell","race":"8","meetingType":"R","places":3},{"date":"2012-03-04","time":"14:26:00","venue":"Cromwell","race":"9","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:00:00","venue":"Leopardstown","race":"1","meetingType":"R","places":3},{"date":"2012-03-05","time":"00:30:00","venue":"Leopardstown","race":"2","meetingType":"R","places":3}];

RaceApp = Ember.Application.create();

RaceApp.raceController = Ember.ArrayController.create({
    content: [],

    checked: false,

    hideRow: function() {
    	//var object
    },

    processChange: function(obj) {
        var race = Ember.Object.create(obj);
        this.pushObject(race);
    },

    togglePlaces: function() {
    	this.checked = !this.checked;
    	this.filterProperty('places', 3).forEach(this.removeObject, this);
    }
});

for (var i=0; i<data.length; i++) {
	RaceApp.raceController.processChange({
	        "date": data[i].date,
	        "time": data[i].time,
	        "venue": data[i].venue,
	        "race": data[i].race,
	        "type": data[i].meetingType,
	        "places": data[i].places
	});	
}


RaceApp.view = Ember.View.create({
  templateName: 'raceInfo',

  hideRow: function() {
  	RaceApp.raceController.hideRow();	
  },

  toggle: function() {
  		RaceApp.raceController.togglePlaces();	
  }

});

RaceApp.view.appendTo('#container');