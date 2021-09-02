import React, { useEffect, useState } from "react";

var XMLParser = require("react-xml-parser");
var parser = new XMLParser();

export const DataPage = (props) => {
  const checkForXML = (tampons) => {
    if (typeof tampons == "string") {
      tampons = parser.parseFromString(tampons);
      let newTamponObj = [];
      let obj = {};
      tampons.children.map((firstLevelChild) => {
        firstLevelChild.children.map((secondLevelChild) => {
          obj[secondLevelChild.name] = secondLevelChild.value;
        });
        newTamponObj.push(obj);
      });
      return newTamponObj;
    }

    return tampons;
  };

  return (
    <div className="my-10">
      {props.data.map((order, index) => {
        return (
          <div className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mt-6 mx-40 h-32">
            <img
              className="object-contain h-28"
              src={order.productImage}
              alt="https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png"
            />
            <div className="ml-10 text-2xl font-bold">
              Price: {order.price} {order.currency}
            </div>
            <div className="ml-10 flex flex-row justify-center aling-center content-center items-center">
              <p className="text-xl font-semibold text-gray-600 mx-10">
                Orders:
              </p>
              {checkForXML(order.tampons ? order.tampons : order.tapons).map(
                (tampon, index) => {
                  return (
                    <div className="flex flex-col ml-5">
                      <div className="mt-2 font-bold text-black-600">
                        Number {index + 1}
                      </div>
                      <div className="text-gray-600">Size: {tampon.size}</div>
                      <div className="text-gray-600">
                        Coating: {tampon.coating}
                      </div>
                      <div className="text-gray-600">
                        Amount: {tampon.amount}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
