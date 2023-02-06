# Task Description

**OPTIONAL** - Add task specific description here

# PR-Checklist

This checklist should be done before setting the PR ready for review, to ensure that the PR adhere to the team-decided standards

## Checks

### Completing the task

- [ ] Is copy (i.e the text resources) exactly as in the task
- [ ] All visuals are exactly as in the XD file, or difference is described in the Jira task
- [ ] Everything described in the task is addressed and any uncertainty has been discussed with task owner
- [ ] No build errors, no known runtime errors

### Before marking PR ready for review

- [ ] **Branch compiles, runs and does what it expected in the task**
- [ ] All commits named as specified in the [review guidelines](https://mouseflow.atlassian.net/wiki/spaces/DEV/pages/617971715/Review+guidelines) or [here](https://cbea.ms/git-commit/)
- [ ] Branch in named as specified in the [review guidelines](https://mouseflow.atlassian.net/wiki/spaces/DEV/pages/617971715/Review+guidelines), like `feature/MD-###_ultrashort_snakecase_description`
- [ ] Every single line change in the diff is intentional
- [ ] Every file has a newline at the end (these are flagged with a "no entry" icon in github)
- [ ] PR does only one thing (if multiple, consider splitting into two PRs, based on top of eachother)
- [ ] Contents are considered ready to end up in production (if not, dependencies must be very explicit and a plan for handling with PM/SM/principal engineer must exist)
- [ ] SQL changes, if applicable, are attached to PR adhering the [SQL changes guidelines](https://mouseflow.atlassian.net/wiki/spaces/DEV/pages/1005256705/SQL+changes+guidelines)
- [ ] Layout is as specified in task - if in doubt, consider asking someone from Product Department to have a look at your screen to verify
- [ ] Branch is (recently) rebased on top of latest develop

### Pull request details

- [ ] Title is in the same form as a commit (see above)
- [ ] Description is optional - but must be provided if
  - All intention is not completely clear from code itself
  - Code contains any changes that are not directly related to tasks (e.g. refactors)
  - If PR is not covering all of the task
- [ ] Assigned to yourself
- [ ] Team or specific developer assigned as reviewer
- [ ] Team asked for review

##### This is built from our official [PR-CHECKLIST](https://mouseflow.atlassian.net/wiki/spaces/DEV/pages/997883905/PR+checklist)
