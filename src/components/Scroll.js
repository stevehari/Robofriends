import React from'react';

const Scroll=(props)=>
{
	return(
	<div style={{overflowY: 'Scroll',height:'800px'}}>
	{props.children};
	</div>
	);
	

};
export default Scroll;