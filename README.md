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

- [ ] Refactor code
- [ ] Point system
- [ ] Make objects (both player and hostiles) non-responsive (pixels?)
