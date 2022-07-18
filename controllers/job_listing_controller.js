const axios = require("axios");

//controller for fetch the get request of github job
module.exports.fetchJob = async function (req, res) {
  try {
    const response = await axios.get(
      "https://remotive.com/api/remote-jobs?category=software-dev"
    );
    let resData = response.data.jobs;

    return res.render("job_listings", {
      jobs: resData,
    });
  } catch (err) {
    console.log("*** Error in Fetching GET request ***", err);
    return res.redirect("back");
  }
};
