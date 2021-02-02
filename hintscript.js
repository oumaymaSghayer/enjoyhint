var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  {
    "click .search-bar": "Search for a product you're familiar with here. ",
    showNext: false,
    showSkip: false,
    showPrev: false,
    //nextButton: { className: "myNext", text: "Next" },
  },
  {
    "click #quantity":
      "Change quantity directly here, <br/> Click on the field.",
    sideStatement: "top",
    showSkip: false,
    showPrev: false,
  },
  {
    "click .js--add": "Change quantity here, <br/> Click on the + to add.",
    showSkip: false,
    showPrev: false,
  },
  {
    "click .js--minus":
      "Change quantity here, <br/> Click on the - to remove. ",
    showSkip: false,
    showPrev: false,
  },
  {
    "next #addToCart-product-template1": "Add it to your cart.",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
    sideStatement: ["top", "bottom", "bottom"],
  },
  {
    "next #recomend__w": "You can view reviews here.",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next .threadInfostyle__RatingContent-sc-1xh2vij-7":
      "You can filter reviews by rating. <br/> ",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },
  {
    "click .rating_bar .rcmnd_clickable": "Click here to see 5 stars reviews",
    showSkip: false,
    showPrev: false,
  },
  {
    "click .rating_bar:nth-child(2)": "Click here to see 4 stars reviews",
    showSkip: false,
    showPrev: false,
  },

  {
    "next .threadstyle__UploadImgCol-sc-1owic9v-11 .eWUHUo":
      "Add a review here. ",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next .tIfshU0wdYsRwszYAaofZ": "See all reviews here ",
    nextButton: { className: "allReviewsNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next #newsletter": "Subscrive to our newsletter here.",
    showNext: true,
    showPrev: false,
    showSkip: false,
    nextButton: { className: "finalNext", text: "Done!" },
  },
];
enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
