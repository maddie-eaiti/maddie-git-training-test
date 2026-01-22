# git-training

A repository with exercises for git training

## Setup

Fork this repository to a new repository under your user. **Make sure to uncheck "copy `main` branch only" which is selected by default**, you will need the additional branches. Then get the address of your new repository, and create a local copy on your laptop with `git clone {address}`.

## Exercise 1

Create a new branch called "develop" off of main. Add text to the `<strong>` tags in main.html, and a new `console.log` to the `run()` method of main.ts. Push your changes to your remote, and ensure it's present on Github.

### Questions

1. What are the steps for putting your changes on remote (hint: there's three of them).

2. What would be different about this process if there were changes on remote that you did not have?

## Exercise 2

Merge the branch `exercise-two` into your `develop` branch. There should be merge conflicts - but you should be able to resolve them unambiguously.

### Questions

1. What does it mean for a change to be "unambiguously" resolvable? What would the opposite be?

## Exercise 3

Add a new method to `script.ts` and stash it. Then, merge the branch `exercise-three` into your branch, and unstash your change. Resolve the conflict and commit the result.

### Questions

1. How does this affect the order in which the changes resolve? What could be the benefits to using a stash in this way?

2. What are some other ways you could use a stash?

## Exercise 4

Rebase your branch from `main` onto `exercise-four`.

### Questions

1. How does a rebase differ from a merge?

2. Based on your experience doing a rebase and merges here, what would some advantages or disadvantages be of doing a merge vs a rebase?

## Exercise 5

Merge in the branch `exercise-five`. When you run into a merge conflict, abort the merge. Then do the following:

1. Commit a change.

2. Undo that commit, while keeping the changes.

3. Commit the changes again.

4. Revert the changes.

### Questions

1. What are some real life circumstances in which you might abort a merge?

2. If you run into a merge that cannot be resolved unambiguously, what are some practical steps you might take?
