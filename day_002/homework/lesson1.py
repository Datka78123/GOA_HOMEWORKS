from turtle import*

#we want to make a house 

#step1: draw a square 

speed(30)
width(7)
color("brown")

forward (200)
left(90)

forward (200)
left (90)

forward(200)
left(90)

forward(200)
left(90)

#end of squre

#step2: draw a door

forward(70)
color("black")
begin_fill()
left(90)
forward(120)  #height of the door
right(90)
forward(60)
right(90)
forward(120)    #height of the door
end_fill()

#step3:draw a roof

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#draw window 1

penup()
goto(15, 110)
pendown()
color("blue")
begin_fill()
left(120)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
end_fill()

#draw window 2

penup()
goto(145, 110)
pendown()
color("blue")
begin_fill()
right(90)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
end_fill()

#draw filed

penup()
goto(-720, -400)
pendown()
width(799)
color("green")
right(90)
forward(1600)

#draw tree 1

penup()
goto(-150, -1) #coordinates for tree
pendown()
width(20)
color("brown")
left(90)
forward(200)
color("green")
width(100)
forward(100)

#draw tree 2

penup()
goto(350, -1) #coordinates for tree
pendown()

width(20)
color("brown")
forward(200)
color("green")
width(100)
forward(100)

#draw tree 3

penup()
goto(650, -1) #coordinates for tree
pendown()

width(20)
color("brown")
forward(200)
color("green")
width(100)
forward(100)

#draw tree 4

penup()
goto(-450, -1) #coordinates for tree
pendown()

width(20)   
color("brown")
forward(200)
color("green")
width(100)
forward(100)

exitonclick()