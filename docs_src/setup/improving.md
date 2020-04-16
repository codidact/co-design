---
layout: page
title: Improving Co-Design
description: This instructions will guide you how to improve Co-Design.
---

Contributions are very welcome! Codidact is an open, community-run
project, and that means the code too.

## What needs doing?

- **Bugs** are reported [on GitHub](https://github.com/codidact/co-design/issues). Have a look at the open
issues tagged `type: bug` to find something that needs fixing.
- **Requests for features** are also suggested as issues [on GitHub](https://github.com/codidact/co-design/issues). Have a look at the open
issues tagged `type: feature request` to find something that needs fixing.
   
Once you've picked what you're going to work on, please
**leave a comment** on the issue to indicate you're planning
to work on it; this helps us reduce wasted effort. If there's
not already an issue for the feature you want to work on,
please create one. If you need time to work on an issue,
that's absolutely fine, but please **keep us updated** with
comments on the issue - if we don't hear from you for a few
weeks, we may assume you've given up working on that issue
and give it to someone else.

## What's the workflow?

* First, **you need an issue to work under**. Either assign
yourself to an existing issue (or request it be assigned
to you), or create a new issue and assign yourself to that.
* Second, you can make your changes. If you have access to
the repository, create a topic branch (please use the format
`art/40/add-bells-and-whistles`, i.e.
`username/issue-number/brief-description`) and make your
changes there; if not, fork the repository and work in your
fork.
* Once you've made your changes, submit a pull request targeting
the `develop` branch.

Keep in mind that **status checks are required to pass**, **both CSS and documentation need to be in sync and built** and
**at least one approving review** is required from the team
before any pull request can be merged. If status checks don't
pass, we won't be able to merge - there are _no exceptions_,
so please fix the failures and commit again. You can always
mark your pull request as *Draft Pull Request*
while you're still trying to make it work.

## How to build the CSS and the documentation?

First of all, you need to make sure, that you have everything important installed. Run this command to set up the development environment:

```
$ npm install
```

To build the CSS you need to run:

```
$ npm run build
```

To build the documentation you need to run:

```
$ npx @11ty/eleventy
```

Or for running a live update web server

```
$ npx @11ty/eleventy --serve
```

## What standards are there?

We have code style and standards documents for each applicable
language. Please make sure you follow these if possible; if 
there's a good reason why not, please document it in your code,
add a linter exception, and let us know why in your pull
request. Here they are:

* [Code standards: CSS](https://github.com/codidact/core/wiki/Code-standards:-CSS)
* [Code standards: CSS naming](https://github.com/codidact/core/wiki/Code-standards:-CSS-naming)
* [Code standards: HTML](https://github.com/codidact/core/wiki/Code-standards:-HTML)
* [Code standards: JS](https://github.com/codidact/core/wiki/Code-standards:-JS)

## Commit Message Guidelines

Again, please follow these where possible, as they help
us to keep a cohesive commit history and see how the project
has developed.

Commit messages are a golden opportunity to give people
context on what you are adding to the codebase. These are
some guidelines to make sure everyone is using them
consistently.

### Subject line format

Your subject line (the commit _title_) should be a concise
**_summary_** of the changes being submitted. Be specific
and precise, and avoid getting into minuteness - additional
context, if needed, should be added in the detailed commit
description, not here.

**Please try to keep the subject line under 70-75 characters**.
This encourages conciseness and ensures the summary is
rendered fully in a diverse range of environments.

#### Good

```
Add the user's fetch information in a global multidimensional array instead of a local one.
```

#### Bad

```
Fixed scope bugs.
```

### Commit description format

In most cases - except for the most trivial changes, a commit
description (or "_body_") is necessary to include additional
context (such as _how_ and _why_ a certain change - or set
thereof - was implemented). Be descriptive and provide as much
information as required, while also striving to minimize
excessive verbosity.

Commit descriptions can have any arbitrary number of lines,
within reason - use your best judgment. Does your description
refer only to things that are relevant to the changes being
made?

Also note that, unlike the commit summary, there is **no** restriction
imposed on the commit description character length. Here as well,
we expect contributors to use their best judgment, by using line
breaks and blank lines where it makes sense.

1. **Include relevant information and context where you can**, to
allow us to quickly see the purpose of the commit. Don't be too
verbose - be specific and concise.

2. **Write in the infinitive, not in the past** - i.e. write "Add
user details to the global scope and fetch on load" rather than
"Added user details to the global scope and fetched on load"

3. The use of standard markdown is allowed, but we
**prefer plain text**. Use single quotes to refer to specific filenames
or code snippets within the commit message (i.e. `404 error page:
Fix conflicting 'margin' CSS property for 'body'`). If using markdown,
refer to a syntax cheatsheet if necessary.

4. Use short commit hashes whenever you need to refer to previous
commits from your commit message. The short hash should preferably
have a length of 8; a length of 7 is also acceptable. Example:
`Complements 17236a81 by adding line break`.  
Note that the GitHub interface will always render commit hashes
abbreviated to 7 chars.

If your change is small enough to not have a commit body,
i.e. your subject line can describe your changes, then it's
okay to commit without one. If you're making significant
changes that require more explanation then you must include
the commit body.

### Single-purpose commits

Each commit you make should do _one_ thing. Try to make sure all
changes in the commit are all for the same purpose - one
refactoring, or one feature, etc. If you have more changes to
make, split them up into multiple commits.

### Testing your commits

**Commits on development branches** _need not_ pass tests every time.
Particularly if you're writing your tests first and then developing
features, it can be helpful to create a commit where tests don't pass.

**Merges and commits to master** _must_ pass the tests every time.
The master branch is considered the stable channel - anything on there
should be suitable for production deployment. Commits should generally
not be made directly to master - only organization and repository
administrators have the ability to, and should avoid doing so if at
all possible.