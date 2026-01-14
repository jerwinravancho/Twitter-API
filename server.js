require("dotenv").config();
const express = require("express");

// node-fetch v2
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/user/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const twitterURL =
      `https://api.twitter.com/2/users/by/username/${username}` +
      `?user.fields=profile_image_url,description`;

    const twitterRes = await fetch(twitterURL, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const data = await twitterRes.json();

    if (!twitterRes.ok) {
      return res.status(twitterRes.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user metrics (followers, following, tweet count)
app.get("/user/:id/metrics", async (req, res) => {
  try {
    const userId = req.params.id;

    const url = `https://api.twitter.com/2/users/${userId}?user.fields=public_metrics`;

    const twitterRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const data = await twitterRes.json();

    if (!twitterRes.ok) {
      return res.status(twitterRes.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get recent tweets by user
app.get("/user/:id/tweets", async (req, res) => {
  try {
    const userId = req.params.id;

    const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=5`;

    const twitterRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const data = await twitterRes.json();

    if (!twitterRes.ok) {
      return res.status(twitterRes.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const cors = require('cors');
app.use(cors({
  origin: 'https://remlasp.github.io' 
}));