import React from 'react';

const Card = ({ name, email, id }) => {
  // const { name, email, id } = props;
  // just destructure inside the parameter
  return (
    //return only one element
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='Our pretty Pic' src={`https://robohash.org/${id}?50x50`} />
      <div>
        <h2>{name}</h2> 
        <p>{email}</p>
      </div>
    </div>
  )
}
//! js expressions within html are wrapped inside curly brackets



// const Card = (props) => {
//   // const { name, email, id } = props;
//   return (
//     //return only one element
//     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//       <img alt='Our pretty Pic' src={`https://robohash.org/${id}?50x50`} />
//       <div>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//       </div>
//     </div>
//   )
// }

export default Card;