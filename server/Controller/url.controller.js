const { nanoid } = require("nanoid");
const Urlmodel = require("../Model/url.model");

const shortner = async (req, res) => {
  try {
    const shortId = nanoid(8);
    const { redirectUrl } = req.body;
    const result = await Urlmodel.create({ shortId, redirectUrl });
    res.json({ shortUrl: `${process.env.API_URL}/${shortId}` });
  } catch (error) {
    console.log("Error in shortner controller");
    res.status(500).send("Server Error");
  }
};

const redirect = async (req, res) => {
  try {
    const { shortId } = req.params;
    const result = await Urlmodel.findOne({ shortId });
    if (result) {
      result.click += 1;
      await result.save();
      return res.redirect(`https://${result.redirectUrl}`);
    } else {
      console.log("URL not found");
      return res.status(404).send("URL not found");
    }
  } catch (error) {
    console.log("Error in redirect controller");
    res.status(500).send("Server Error");
  }
};

const analytics = async (req, res) => {
  try {
    const { shortId } = req.params;
    const result = await Urlmodel.findOne({ shortId });
    if (res) {
      res.json({ click: result.click });
    } else {
      console.log("URL not found");
      return res.status(404).send("URL not found");
    }
  } catch (error) {
    console.log("Error in analytics controller");
    res.status(500).send("Server Error");
  }
};

module.exports = {
  shortner,
  redirect,
  analytics,
};
