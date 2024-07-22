import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const rows = [
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 5,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/5.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 4.5,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/4.5.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 4,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/4.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 3,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/3.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 2,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/2.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 1,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image: "http://localhost:5173/src/assets/images/icon/1.svg"
  }
];

const TotalTable = () => {
  const { id } = useParams();

  const [reviewValue, setReviewValue] = useState([]);

  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${REACT_APP_BASE_URL}/api/restaurants/getEmployeesReviews/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        if (responseData.code == 200) {

          setReviewValue(responseData.data);
        } else {
          console.log("API call error:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };
  return (
    <div style={{ marginTop: "17px" }}>


      {/* {reviewValue.map((data,index)=>(
           <h1>{data.comment}</h1>
          
          ))} */}
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 rounded">
                Date & Time
              </th>
              <th scope="col" class="px-6 py-3">
                Rating
              </th>
              <th scope="col" class="px-6 py-3 rounded-lg rounded-l-none">
                Comments
              </th>

            </tr>
          </thead>
          <tbody>


            {reviewValue.map((data, index) => (
              <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 w-40 align-text-top">
                  {/* {data.item1}<br />{data.item2} */}
                  {data.createdAt}
                </td>
                <td class="px-6 py-4 flex items-center justify-center">
                  {(data.review.service == 1) ? (
                    <img src="http://localhost:5173/src/assets/images/icon/1.svg" alt="SVG Image" class="h-6 mr-2" />
                  ) : (data.review.service == 2) ? (
                    <img src="http://localhost:5173/src/assets/images/icon/2.svg" alt="SVG Image" class="h-6 mr-2" />
                  ) : (data.review.service == 3) ? (
                    <img src="http://localhost:5173/src/assets/images/icon/3.svg" alt="SVG Image" class="h-6 mr-2" />
                  ) : (data.review.service == 4) ? (
                    <img src="http://localhost:5173/src/assets/images/icon/4.svg" alt="SVG Image" class="h-6 mr-2" />
                  ) : (data.review.service == 4.5) ? (
                    <img src="http://localhost:5173/src/assets/images/icon/4.5.svg" alt="SVG Image" class="h-6 mr-2" />
                  ) : (
                    <img src="http://localhost:5173/src/assets/images/icon/5.svg" alt="SVG Image" class="h-6 mr-2" />
                  )}

                  {/* <img src={data.Image} alt="SVG Image" class="h-6 mr-2" /> */}
                  {data.review.service}
                </td>
                <td scope="row" class="px-6 py-4 text-gray-900 dark:text-white">
                  {data.comment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalTable;
