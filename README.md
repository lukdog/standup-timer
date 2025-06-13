# Standup-Timer

### Why

My teams needed a standup timer during standup meetings in order to avoid waste of time.
The timer can be shared with screen sharing in order to permit to all members to use the right amount of time.

### How to use

Names can be passed in query parameters, in order to populate the team.

The format is

```
lukdog.com/standup-timer&name1=time&name2=time...
```

If time is not specified a default of 2 minutes is used

### How to run

```
yarn install
yarn run dev
```

### Deployment

It is currently deployed using github pages on [lukdog.com/standup-timer](https://lukdog.com/standup-timer)
