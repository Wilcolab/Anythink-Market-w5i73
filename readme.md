# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

### Step One - Clone the Repo

In your browser, navigate to your project's GitHub Repo, click on "Code" and copy the git URL.

On your PC, open your terminal in your preferred folder and run the git command to clone the repo

```bash
git clone <repo-url>
```

### Step Two - Ensure you have Docker Installed on your PC

If you do not have Docker installed on your PC, get it [here](https://docs.docker.com/get-docker/).

In your terminal, run the commands below to verify your installation of Docker:

```bash
docker -v
docker-compose -v
```

### Step Three - Load Anythink's Frontend and Backend

In your project's root terminal, run the command below to install and load Anythink's Frontend and Backend:

```bash
docker-compose up
```

### Step 4 - Create New User

After successfully loading Anythink's Frontend and Backend, verify that they are connected by creating a new user on your browser at `http://localhost:3001/register`.

Choose a good username and password.

Congrats! 🎉 You have successfully set up Anythink on your PC!
