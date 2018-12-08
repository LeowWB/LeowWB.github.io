let ddMenuVisible = false;

function dropDown()
{
	console.log("dropdown");
	
	let ddMenu = document.getElementById("test_dropdown_menu");
	
	if (ddMenu === null || ddMenu === undefined)
		alert("crap");
	else
	{
		if (ddMenuVisible)
			ddMenu.style.display = "none";
		else
			ddMenu.style.display = "block";
		
		ddMenuVisible = !ddMenuVisible;
	}
}

function dropDownBtn(displayText)
{
	dropDown();
	alert(displayText);
}

function vehicleOverturn()
{
	alert("VEHICLE OVERTURN");
	console.log("vehicle overturn");
}

function stallForTime()
{
	console.log("stall for time");
	
	let honkText = document.getElementById("honk_text");
	
	if (honkText === null || honkText === undefined)
	{
		alert("dammit textarea is null/undefined");
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

function updateHonkText()
{
	let honkText = document.getElementById("honk_text");
	let honkTextBw = document.getElementById("honk_text_bw");
	
	if (honkText === null || honkText === undefined || honkTextBw === null || honkTextBw === undefined)
	{
		alert("dammit textarea is null/undefined");
	}
	else
	{
		let htv = honkText.value;
		let htv2 = "";
		
		for (let i = 0; i < htv.length; i++)
		{
			htv2 += htv[htv.length-1-i];
		}
		
		honkTextBw.value = htv2;
	}
}