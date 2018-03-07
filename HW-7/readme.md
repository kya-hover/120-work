Kya Hover, Group B

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

What each line of code does:

1.
2.
3. declares the `ball` variable
4. sets ball width to 40
5. sets x position to 10
6. sets y position to 10
7. sets the ball.delta_x to 1, distance the ball moves on the x-axis
8. sets the ball.delta_y to 1, distance the ball moves on the y-axis
9. sets the ball.scale_x to 1, controls the x spacing between the ellipses
10. sets the ball.scale_y to 1, controls the y spacing between the ellipses
11.
12. setup function
13. creates the canvas with a windowWidth and height of  400
14. sets background color to white in grayscale
15. ends setup function
16.
17.
18.
19. draw function
20.
21. moves the ball to the x position of the ball plus itself multiplied by ball.scale_x
22. moves the ball to the y position of the ball plus itself multiplied by ball.scale_y
23.
24.
25. sets the boolean value parameters (executed if true) to the x position of the ball is greater than or equal to the width or the x position of the ball is less than or equal to 0
26. stops the ball from going off of the left and right sides of the canvas
27. ends the first `if` statement
28. sets the boolean value parameters (executed if true) to the y position of the ball is greater than or equal to the height or the y position of of the ball is less than or equal to 0
29. stops the ball from going off the top and bottom of the canvas
30. ends the second `if` statement
31.
32. sets the ball color to white in grayscale
33. draws the ball at 10, 10, and gives it a width and height of 40
34. ends the draw function
35.
36. declares the `mousePressed` function
37. maps the mouseX of ball.scale_x to 0.5, 10
38. maps the mouseY of ball.scale_y to 0.5, 10
39. ends the `mousePressed` function
40.

You can make the ball change direction by using the `mousePressed` function. By pressing the mouse, the direction of the ball is mapped to 0.5, 10. This happens every time that the mouse is pressed. The ball also changes direction every time the center hits the edge of the window. This is because the windowWidth and windowHeight are both boolean parameters within `if` statements. The parameters are set so that when the ball souches the edge, it's direction is multiplied by -1, causimg it to change direction.

## How did you alter the sketch?

I changed the sketch by:
  * making the color of the ellipse stroke random and contingent on the `mousePressed` function
  * increasing the stroke weight by 0.5
  * making the ball increase speed when it  hit the wall
  * making the ball increase in size when it hit the top and bottom walls
  * making the ball decrease in size when it hit the side walls
I changed the sketch this way so that it would be more visually interesting. I like the objects to go faster and faster whenever they bounce off of the wall. Mine eventually gets going so fast and large in size that it disappears.
