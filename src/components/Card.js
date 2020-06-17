import React from  'react';


const card= ({id,name,email})=>{
   return(
	    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-s">
	      <img alt='robots'src={`https://robohash.org/${id}`}/>
	      <div>
	         <h2>{name}</h2>
	         <p>{email}</p>

	      </div>
	    </div>
	);
}
export default card;