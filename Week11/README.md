# Project description

I deided to try the Three.js library and it was fantastic. I really liked how you can incorporate 3D objects into a website. It is pretty hard to create something complicated, therefore I decided to stick to simple fundametals. I created two geometry objects that spin around - A Cube and a Donut shaped object.

### Responsive design

I also decided to make the website resizable as well as the objects. Now when you shrink the window, the object also shrink, which makes it a better experience.

```
document.onmousemove = function (e) {
  var centerX = window.innerWidth * 0.5;
  var centerY = window.innerHeight * 0.5;

  camera.position.x = (centerX - e.clientX ) * 0.01;
  camera.position.y = (e.clientY - centerY) * 0.01;
};
```

To create something special, I decide to play with camera position and made it follow the cursor of the user.

<img src="photo1.png" width="350">
<img src="photo2.png" width="350">

### What have I learned

It was a fun experience to learn something new, however, due to limited time and the complicated system of Three.js, it is hard to create a better work. I believe that with a training it could be used to create beautiful parallax effects and make even your portfolio beautiful. 
It was interesting how the creation of an object works - you need to have a geometrical object and the material that covers it. It reminded me of Unity, where you also need material/mesh for using an objects. The difference betweeen Unity and Three.js is of course the ability to doing it without code, just inside the editor. 

I learned:

<ul> 
    <li> The basics of Three.js, the camera movements and scene management</li>
    <li> Geometrical objects of Three js and how to make them move constantly</li>
    <li> How to resize the window and make the scene also resize as well as mouse interactions</li>
</ul>
