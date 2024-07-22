import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import DonutChart2 from "@/components/partials/widget/chart/dount-chart3";
import DonutChart4 from "@/components/partials/widget/chart/dount-chart4";
import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const StatisticWidget = () => {
  // myRestaurant
  const [userName, setUserName] = useState("");
  const [reviews, setReviews] = useState(0);

  // competitorsRestaurant
  const [ratings, setRatings] = useState("");
  const [review, setReview] = useState(0);

  // State for Overall
  const [overallValues, setOverallValues] = useState({ value1: 0, value2: 0 });
  const [foodValues, setFoodValues] = useState({ value1: 0, value2: 0 });
  const [ambienceValues, setAmbienceValues] = useState({ value1: 0, value2: 0 });
  const [costingValues, setCostingValues] = useState({ value1: 0, value2: 0 });
  const [serviceValues, setServiceValues] = useState({ value1: 0, value2: 0 });
  const [reviewsValues, setReviewsValues] = useState({ value1: 0, value2: 0 });


  useEffect(() => {
    fetchData();
  }, []);

  const requestData = {
  };

  const fetchData = () => {

    fetch(`${REACT_APP_BASE_URL}/api/restaurants/competitorAnalysis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setUserName(responseData.data.myRestaurant.averageRating);
        setReviews(responseData.data.myRestaurant.totalReviews);

        setRatings(responseData.data.competitorsRestaurant.averageRating);
        setReview(responseData.data.competitorsRestaurant.totalReviews);

        // Set two values for Statistics Array
        setOverallValues({ value1: responseData.data.ratingComparison.Overall.myRestaurant, value2: responseData.data.ratingComparison.Overall.competitorsRestaurant });
        setFoodValues({ value1: responseData.data.ratingComparison.Food.myRestaurant, value2: responseData.data.ratingComparison.Food.competitorsRestaurant });
        setAmbienceValues({ value1: responseData.data.ratingComparison.Ambience.myRestaurant, value2: responseData.data.ratingComparison.Ambience.competitorsRestaurant });
        setCostingValues({ value1: responseData.data.ratingComparison.Costing.myRestaurant, value2: responseData.data.ratingComparison.Costing.competitorsRestaurant });
        setServiceValues({ value1: responseData.data.ratingComparison.Service.myRestaurant, value2: responseData.data.ratingComparison.Service.competitorsRestaurant });
        setReviewsValues({ value1: responseData.data.ratingComparison.Reviews.myRestaurant, value2: responseData.data.ratingComparison.Reviews.competitorsRestaurant });


      })
      .catch((error) => {
        console.error("API call error:", error);
      });

  };

  return (
    <>

      <div>
        <div className=" space-y-5">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
            <Card>
              <span className="block text-slate-500 dark:text-slate-300 text-sm font-medium">
                Your Restaurant Average Rating
              </span>
              <DonutChart2
                rating={userName}
                reviews={reviews}
                backgroundColor="#19CC56" backgroundColor2="#F6F5F7" />
            </Card>
            <Card>
              <span className="block text-slate-500 dark:text-slate-300 text-sm font-medium">
                Average Restaurant Rating Near You
              </span>
              <DonutChart2
                rating={ratings}
                reviews={review}
                colors={["#F1595C", "#F9E1E5"]} backgroundColor="#FF4995" backgroundColor2="#F6F5F7" />
            </Card>
          </div>
          <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-3">
            <Card>
              <span className="block text-slate-500 dark:text-slate-300 text-sm font-medium" style={{ height: "24px", fontWeight: "700", fontSize: "20px", color: "#50536A" }}>
                Rating Comparison
              </span>
              <span className="block text-slate-500 dark:text-slate-300 text-sm font-medium" style={{ height: "17px", fontWeight: "400", fontSize: "14px", color: "#50536A", marginBottom: "40px" }}>
                Distribution between your and other restaurant rating
              </span>
              <DonutChart4
                overallValues={overallValues}
                foodValues={foodValues}
                ambienceValues={ambienceValues}
                costingValues={costingValues}
                serviceValues={serviceValues}
                reviewsValues={reviewsValues}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticWidget;
