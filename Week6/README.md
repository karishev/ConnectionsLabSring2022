# Trying out Node and Express

I decided that for this project I will try and implement the information about Attack on Titan 9 Titans. I fount the information about the titans on this page: https://attackontitan.fandom.com/wiki/Wiki. It realy helped in gathering information that would be used in the api. I have sticked with only displaying the name, height, description, and current user.


The code below is for finding the information about the titan by params
```
app.get("/titans/:titan", (req, res) => {
  if (!titans[req.params.titan]) {
    res.json({ response: "There is no such Titan" });
  }
  res.json(titans[req.params.titan]);
});

```

The thing that I didn't know about before implementing the website was the event handler. I heard about it, but I didn't know how to use it. Therefore, this segment of code got me surprised with its simplicity and code readibility. Before that, I would have write the event handler for each click i wanted to do, whicih was time consuming.

```
document.addEventListener("click", (e) => {
  fetch("/titans/" + e.target.id)
    .then(response => response.json()
  })
  
```

Overall, using Node.js for creating my own self made APIs was really interesting, even though time consuming in some parts, especially for information gathering.
