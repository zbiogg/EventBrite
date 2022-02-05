
import { storage, database } from '../lib/firebase'
export function getEventInfo(eventID, callback) {
	var imageUrl;
	var imgCtgUrl;
	var ctgOriginID;
	var ctgOriginName;
	var colorCtg;
	var dataEvent;
	var successIconCtg=false;
	function getDataEvent(callback) {
		database.ref("Events/" + eventID)
			.once("value")
			.then(snapshot => {
				 callback(snapshot.val());
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
							var iconUrl = snapshot.child(item.child("parent_id").val()).child("iconUrl").val();
							callback(originID,originName,color,iconUrl);
						} else {
							var originID = item.child("id").val();
							var originName = item.child("name").val();
							var color = item.child("color").val();
							var iconUrl = item.child("iconUrl").val();
							callback(originID,originName,color,iconUrl);
						}
					}
				});
			}
		});
	}
	getDataEvent(data =>{
		dataEvent = data;
		getDataCtg((originID,originName,color, iconUrl) =>{
			ctgOriginID =originID;
			ctgOriginName = originName;
			colorCtg = color;
			imgCtgUrl =data;
			var newData = { ...dataEvent, 
				"ctgIconUrl": iconUrl, 
				"ctgColor": colorCtg, 
				"ctgOriginName": ctgOriginName };		
			callback(newData);	
		});				
	})
};


