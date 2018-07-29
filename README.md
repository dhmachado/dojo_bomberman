# Dojo Bomberman

### What are dojos ?
- A Coding Dojo is a meeting where a bunch of coders get together to work on a programming challenge. They are there have fun and to engage in [DeliberatePractice](https://codingdojo.org/DeliberatePractice/) in order to improve their skills.

See more information [here](https://codingdojo.org/WhatIsCodingDojo/)

### What can you tell me about this dojo ?
In this Dojo we are going to replicate some of the functionality of the [Bomberman#1983](https://en.wikipedia.org/wiki/Bomberman_(1983_video_game)) game.

The use cases are the following:
- The bomberman steps into a cell which is empty then it moves in
- The bomberman steps into a cell which is busy with an object then it doesn't move and throw an exception
- The bomberman steps into a cell which is busy with an enemy then it dies
- The bomberman leaves a boom next to a brick, the boom explodes and the brick disappears
- The bomberman throws a boom to a brick, the boom explodes and the brick disappears

### What interesting things will I see in this dojo ?
- First of all the game was coded using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) which means that we created first the tests and then implement the logic needed for the tests to pass. This ensure us that every piece of functionality is 100% tested.

- We also used the [Null Object Pattern](https://en.wikipedia.org/wiki/Null_object_pattern). 
This help us to instead of using a null reference to convey absence of an object, one uses an object which implements the expected interface, but whose method body is empty. The advantage of this approach over a working default implementation is that a null object is very predictable and has no side effects: it does nothing. 
The example on this repository is the Nothing.js class, and this is the default value for when we create a Cell that is empty, so instead of having a null occupant of this cell we have Nothing as the occupant.

- We also used a [Double Dispatch](https://en.wikipedia.org/wiki/Double_dispatch).

