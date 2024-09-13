require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
    "login": "sumitverma",
    "id": 464667,
    "node_id": "MDQ6VXNlcjQ2NDY2Nw==",
    "avatar_url": "https://avatars.githubusercontent.com/u/464667?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sumitverma",
    "html_url": "https://github.com/sumitverma",
    "followers_url": "https://api.github.com/users/sumitverma/followers",
    "following_url": "https://api.github.com/users/sumitverma/following{/other_user}",
    "gists_url": "https://api.github.com/users/sumitverma/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sumitverma/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sumitverma/subscriptions",
    "organizations_url": "https://api.github.com/users/sumitverma/orgs",
    "repos_url": "https://api.github.com/users/sumitverma/repos",
    "events_url": "https://api.github.com/users/sumitverma/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sumitverma/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sumit Verma",
    "company": "Ten24",
    "blog": "https://www.ten24.co",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 2,
    "followers": 18,
    "following": 2,
    "created_at": "2010-11-02T19:05:22Z",
    "updated_at": "2024-07-11T17:58:17Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('hello sumit verma')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello login here</h1>')

})
app.get('/github',(req,res)=>{
   res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})