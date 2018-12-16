function tag(evt,child_Id,num)
{	var cur = evt.srcElement ? evt.srcElement : evt.target;
	var	 front_id=cur.id.substring(0,cur.id.length-1);
	var _className=cur.className;
	var p_class_f=_className.substring(0,_className.length-1);
	var child_f=child_Id.substring(0,child_Id.length-1);
	var child_node=document.getElementById(child_Id);
	var c_className=child_node.className;
	var c_class_f=c_className.substring(0,c_className.length-1);
	cur.className=p_class_f+"0";
	child_node.className=c_class_f+"0";
	for(var i=0;i<= num;i++)
	{ 
		if(front_id+i.toString()!=cur.id){
			var ele=document.getElementById(front_id+i.toString());
			if (ele)	{ele.className=p_class_f+"1";}
			var child_ele=document.getElementById(child_f+i.toString());
			if(child_ele)	{child_ele.className=c_class_f+"1";}	
		}
	}
}