function vehicleOverturn()
{
	alert("VEHICLE OVERTURN");
}

function stallForTime()
{
	console.log("stall for time");
	
	let honkText = document.getElementById("honk_text");
	
	if (honkText === null || honkText === undefined)
	{
		alert("dammit");
	}
	else
	{
		let htv = honkText.value;
		let alertStr = "ok thanks\n\n";
		
		if (htv === null || htv === "")
			alertStr = "eh type something in the text area";
		else
		{
			alertStr += htv + "\n";
			alertStr += htv[0] + "\n";
		}
		
		alert(alertStr);
	}
}