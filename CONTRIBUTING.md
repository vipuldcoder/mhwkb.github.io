# Contributing

Thank you for your interest in this project...

## Inquiring about an Issue
**If you find an issue that interests you, please leave a note asking about it first. If
you don't, someone else may, and I will have to accept his or her patch/PR. It's best
to leave a note so everyone knows who the patch is assigned to, and won't interfere
with the work you want to do.**

* [Code of Conduct](CODE_OF_CONDUCT.md)
* [List of Contributors](CONTRIBUTORS.md)

## Communication
  * Request membership to the [KB team](https://github.com/orgs/mhwkb/teams/kb)
  * [Chat (Slack Workspace)](https://join.slack.com/t/mhwkb/shared_invite/enQtMjU3MjcwMTk4NjYzLTA0ZDc2YjAwMDJiNTU1YTBmYTViNmQ5MTdjOTk2MDA2MDMyMzNiYjU4ZWIzMTZlNmU4ZjFhNDg1MjQ5OGQyMjI)
  * [Create or Discuss Issues](https://github.com/mhwkb/mhwkb.github.io/issues)

## CSS and html design

* [See the design info page](DESIGN.md)
* [Testing your CSS and HTML changes](TESTING.md)

## Code formatting
Indent of ***2*** spaces in HTML based on [W3 Schools HTML5 style guide](https://www.w3schools.com/htmL/html5_syntax.asp)

## Tags
* tags should be specific
* Use 10 tags or less, each tag should be less than 40 characters
* links that discuss many different types of mental health issues should be
tagged using keywords that the article focuses on, not with each disorder
listed
* Don't use the tag "mental health". Every link in the KB should be related
to "mental health", which makes the tag unnecessary.
* Don't use synonyms. (ex. "veterans" is good, but don't add military. It's
implied. If the links is more broadly about the military, then it's okay to
use "military" and "veterans".
* If you're not sure what tags to use, don't spend any time worrying about it. Ask in the
  chat room or make a comment when you submit your pull request.

## Pull Requests
1. Fork the repo (if you haven't already done so)
2. Clone it to your computer
3. You're welcome to [join the chat room](https://join.slack.com/t/mhwkb/shared_invite/enQtMjU3MjcwMTk4NjYzLTA0ZDc2YjAwMDJiNTU1YTBmYTViNmQ5MTdjOTk2MDA2MDMyMzNiYjU4ZWIzMTZlNmU4ZjFhNDg1MjQ5OGQyMjI)
3. When you're ready to work on an issue, be sure you're on the **master** branch. From there, [create a separate branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) (e.g. issue_32)
4. Make your changes. If you're unsure of some details while you're making edits, you can discuss them on the ticket or in the chat room.
5. Commit your changes
6. If this is your first contribution, add yourself to [CONTRIBUTORS.md](CONTRIBUTORS.md)
    * commit the change
6. Push the working branch (e.g. issue_32) to your remote fork and make your pull request
    * Do not merge it with the master branch on your fork. That would result in multiple, or unrelated patches being included in a single PR.
8. If any further changes need to be made, comments will be made on the pull request or I'll @ping you in the chat room.

It's possible to work on two or more different patches (and therefore multiple branches) at one time, but it's recommended that beginners only work on one patch at a time.

### Syncing ###
Periodically, especially before starting a new patch, you'll need the sync your
repo with mine (remote upstream). GitHub has instructions for doing this:

1. [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
    * For step 3 on that page, use https://github.com/mhwkb/mhwkb.github.io for the URL.
2. [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
    * On that page, it shows how to merge the **master** branch (steps 4 & 5 of **Syncing a Fork**).
