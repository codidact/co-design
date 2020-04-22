---
layout: page
title: Releasing Co-Design
description: This instructions will guide you how to release a new version Co-Design.
---

Follow this guide to release a new version of Co-Design:

1. Open the repository in your terminal and [build both the css and the documentation](/setup/improving). There shouldn't be any changes in the most cases, but if there are any, commit them.
2. Now run `npm version x.y.z`. This will update the package json files and create a new commit with that version name.

    Choose x, y and z based on our current release version and on the amount of changes this release introduces. As a general rule, you'll probably never increment x, you'll increment y if new components are introduced or other major changes are done and you'll increment z in all other cases. When changing y, set z to 0.

3. Update the version numbers in `docs_src/_data/release.json` and rebuild the documentation. Amend the release commit with the changes.

4. Push the commits to GitHub. Create a new release tag there and add a changelog.

5. Run `npm publish` to publish the release to NPM. You'll probably need to sign into NPM, when you haven't done so already.

6. Merge `develop` into `master`. This will deploy the documentation.