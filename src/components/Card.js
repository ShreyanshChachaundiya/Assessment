import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="mx-5">
      <div class="flex   my-10 justify-between h-[23rem] w-[17rem]">
        <div class="max-w-sm rounded min-h-[21rem] overflow-hidden shadow-lg">
          <img class="w-full" src={props.image} alt="Sunset in the mountains" />

          <div class="px-6 py-4">
            <div class="card__header">Popular</div>
            <div class="font-bold text-xl mb-2">
              <p class="text-purple-500 text-left">${props.price}/month</p>
            </div>
            <div class="font-bold text-xl mb-2">
              <p class="text-black-800 text-left">{props.title}</p>
            </div>
            <div class="text-sm mb-2">
              <p class="text-brown-600 text-left">{props.location}</p>
            </div>
            <hr class="text-gray-800" />
            <div class="m-2 mb-0 flex justify-between items-center">
              <div class="inline-flex items-center justify-start">
                <MdOutlineBed className="mx-1 ml-0" />
                <p>{props.beds} beds</p>
              </div>
              <div class="inline-flex items-center">
                <BiBath className="mx-1" />
                <p>{props.baths} baths</p>
              </div>
              <div class="inline-flex items-center">
                <AiOutlineHome className="mx-1 mr-0" />
                <p>{props.area}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
