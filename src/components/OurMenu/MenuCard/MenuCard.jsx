import React from 'react';
import "./MenuCard.scss";

function MenuCard(props) {
    return (
      // <div className="flex-container mb-10">
      //     <div className="card image-full w-100">
      //       <div className="card-body">
      //         <div className="card-actions justify-center mt-auto">
      //         <figure><img src={props.image} alt={props.name} /></figure>
      //           <button className="btn btn-outline border-2 bg-black bg-opacity-50 border-custom text-custom hover:bg-opacity-0 hover:text-custom hover:border-custom">{props.name}</button>
      //         </div>
      //       </div>
      //     </div>        
      //   </div>
    
      <div className="flex-container">
        <div className="card card-bordered rounded-lg mb-4 relative">
          <figure className="card-image relative overflow-hidden rounded-lg">
            <img src={props.image} className="object-cover object-center h-52 w-96" alt={props.name} />
          </figure>
          <a href="#" className="flex items-center justify-center">
            <button className="h-12 mb-4 md:w-64 sm:w-48 btn btn-outline border-2 bg-black bg-opacity-50 border-custom text-custom hover:bg-opacity-0 hover:text-custom hover:border-custom absolute bottom-0 rounded-md">
              {props.name}
            </button>
          </a>
        </div>
      </div>
      
      // <div className="">

      // </div>

//       <div className="card card-bordered w-96 rounded-lg shadow-lg">
//   <figure className="card-image">
//     <img src={props.image} className="img-fluid rounded-lg" alt="Card image" />
//     <div className="absolute inset-0 flex justify-center items-end">
//       <button className="btn btn-primary rounded-lg">Click Here</button>
//     </div>
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra facilisis.</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-outline">Button</button>
//     </div>
//   </div>
// </div>

    );
  };
  
export default MenuCard;
  