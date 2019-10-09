# PokeGo Chat

**Usage**

Visit the website: https://optimistic-northcutt-f027b5.netlify.com and search for a pokemon!

Or to run it locally...

```bash
$ git clone git@github.com:weschang15/pokego-chat.git
$ cd pokego-chat
$ npm install
$ npm run dev
```

_Time limit: 3-4 hours_

My initial idea was to build an application where you could search for locations and check if there are any current construction zones near by that may impact commute. However, finding an API that returns data about construction zones was difficult and was spending too much time so I opted for something far less relative to CompanyCam industry.

**User flow**

1. Visits website
2. Searches for a pokemon
3. Views some details about this pokemon (name, images, moves, etc.)
4. Can chat about the pokemon anonymously (if there is time)

**Components**

1. Form
2. Input
3. Pokemon (top level component - shows results from search)
4. PokemonMoves
5. PokemonMove
6. PokemonBio

### Issues

- In production, when a user searches for a pokemon that is not found, no error message is rendered however, a "Not Found" should appear
