# 1. The MVP

    The player starts from bottom of the screen with moving capacity to all four sides, and aim is to reach top of the screen. Avoid obstacles on the way and if player's element collide with any obstacles, game over.

# 2. Milestones

- ### Milestone 1:
         Display player with moving capasity to all 4 sides + create blocks that coming from each sides randomly
- ### Milestone 2:
      Code the collision between player and blocks + Game Over Screen
- ### Milestone 3:
        Diversify of obstacle objects with size, speed
- ### Milestone 4:
         Spesific obstacles in spesific layers of the screen. Also applience of background (river,road etc.)
- ### Milestone 5:
         Point system. Randomly point elements appears in screen and if player collect(collide with) them, it will add to bonus which we can follow from one side of the screen
- ### Milestone 6:
         Add "not allowed" zones to spesific layers (like water in the river) In another words, now obstacles are the aim of the player and everything else is collision
- ### Milestone 7:
        Spesific spots for player element as a win condition. Some of them will give extra points.
- ### Milestone 8:
          A welcome page. Game should not start as soon as we load the screen but instead we will have "Play" button and also instructions of the game in the same screen.
- ### Milestone 9:
      Forming the game with images. Put different images for;
      - Player
      - Background (with different layers)
      - Different Obstacles (And name them)
      - Extra points

# 3. CheckList

Day 1:

- [x] Defined html, css & js files
- [x] Adjusted placement of player
- [x] Implamented character movement
- [x] Create Hostile Blocks (Only from left side so far)
- [x] Make hostiles appear from each sides from randomly points
- [x] Make hostiles disappear when they left screen
- [x] Collision between player and hostiles

Day 2:

- [x] Win Condition (Player touches top of the screen)
- [x] Hostiles has their own subboard

Day 3:

- [x] Point system

Day 4:

- [x] Point objects moving
- [x] Add backgrounds for objects and boards.
- [x] Point objects moving randomly
- [x] Add logs to the river
- [x] Cars and trucks have dedicated lines

Day 5:

- [x] Frog is stuck with logs and it's on top of them
- [x] If frog stays on log while it hits border, game over.
- [x] Fix flies stucking in screen after a while
- [x] Applied 5 lily pad elements

Day 6:

- [x] Object images changes depending on the side they're appearing
- [x] Objects coming from different sides and positions with same class
- [x] When moving, frog image changes
- [x] Welcome Page with instructions
- [x] Golden Bug Appears.

Day 7:

- [ ] Fix log bug
- [ ] Fix movement images better.
- [ ] Win condition on Lily Pads
- [ ] River is collision and logs are safe zones.
- [ ] Refactor code
- [ ] Make objects (both player and hostiles) non-responsive (pixels?)
