
import { storage, database } from '../lib/firebase'
export function getEventInfo(eventID, callback) {
	var imageUrl;
	var imgCtgUrl;
	var ctgOriginID;
	var ctgOriginName;
	var colorCtg;
	var dataEvent;
	var successImage=false;
	var successIconCtg=false;
	function getDataEvent(callback) {
		database.ref("Events/" + eventID)
			.once("value")
			.then(snapshot => {
				 callback(snapshot.val());
			});
	}
	function getImageEvent(callback) {
		database.ref("Events/" + eventID)
			.once("value")
			.then(snapshot => {
				 dataEvent = snapshot.val();
				storage.ref("event/" + eventID + "/background/" + dataEvent.image) //get Image of Event in Storage
					.getDownloadURL().then((url) => {
						imageUrl = url;
						callback(url);
					});
			});
	}
	

	function getIconCtgOrigin(callback) {
		storage.ref("category")
			.child(ctgOriginID + ".png")
			.getDownloadURL()
			.then((url) => {
				callback(url);
			});
	}
	function getDataCtg(callback) {
		database.ref("Categories").on("value", snapshot => {
			if (snapshot.val() !== null) {
				snapshot.forEach(item => {
					if (item.child("id").val().toString() === dataEvent.category_id.toString()) {
						if (item.hasChild("parent_id")) {
							var originID = item.child("parent_id").val();
							var originName = snapshot.child(item.child("parent_id").val()).child("name").val();
							var color = snapshot.child(item.child("parent_id").val()).child("color").val();
							callback(originID,originName,color);
						} else {
							var originID = item.child("id").val();
							var originName = item.child("name").val();
							var color = item.child("color").val();
							callback(originID,originName,color);
						}
					}
				});
			}
		});
	}
	getDataEvent(data =>{
		dataEvent = data;
		console.log("xong data");
		getImageEvent((data) => {
			imageUrl = data;
			console.log("xong image");
			successImage=true;
				if(successImage&&successIconCtg){
					var newData = { ...dataEvent, 
						"imageUrl": imageUrl, 
						"ctgIconUrl": imgCtgUrl, 
						"ctgColor": colorCtg, 
						"ctgOriginName": ctgOriginName };
					callback(newData);
				}
		});
		getDataCtg((originID,originName,color) =>{
			ctgOriginID =originID;
			ctgOriginName = originName;
			colorCtg = color;
			console.log("xong get ctgorrgin");
			getIconCtgOrigin((data) =>{
				imgCtgUrl =data;
				successIconCtg=true;
				console.log("xong get icon ctg");
				if(successImage&&successIconCtg){
					var newData = { ...dataEvent, 
						"imageUrl": imageUrl, 
						"ctgIconUrl": imgCtgUrl, 
						"ctgColor": colorCtg, 
						"ctgOriginName": ctgOriginName };
					callback(newData);
				}
				
			});
		});				
	})
};


