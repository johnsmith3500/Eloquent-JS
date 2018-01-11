// The program forms chess board for given width and height
var width=3;
var height=4;
var cb='';		// String representing chess board
var next='#';	// Not initial character
console.log("123456789");	// For debuging
for(var i=1; i < (width+1)*height; i++)
{
	if(i % (width+1) == 0)	// If end of row - print newline
	{
		cb+="\n";
		if(width % 2 == 0)
			next=(next == '#') ? ' ' : '#';		// Swap	
	}
	else
	{
		next=(next == '#') ? ' ' : '#';			// Swap
		cb+=next;
	}
}
console.log(cb);