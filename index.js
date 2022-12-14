const { Octokit } = require("@octokit/rest");
const core = require("@actions/core");
const github = require("@actions/github");
const octokit = new Octokit({
  auth: core.getInput("auth-token"),
});

try {
  console.log("Locking develop branch");
  console.log(core.getInput("auth-token"));
  octokit.request(
    "PUT /repos/fdhansen/BranchProtectionTest/branches/develop/protection",
    {
      owner: "fdhansen",
      repo: "BranchProtectionTest",
      branch: "develop",
      required_status_checks: null,
      enforce_admins: false,
      required_pull_request_reviews: null,
      restrictions: null,
      required_linear_history: false,
      allow_force_pushes: true,
      allow_deletions: false,
      required_conversation_resolution: true,
      lock_branch: true,
      allow_fork_syncing: false,
    }
  );
} catch (error) {
  console.log("failed to lock develop branch");
  core.setFailed(error.message);
}
