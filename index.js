import { Octokit } from "@octokit/core";
const core = require("@actions/core");
const github = require("@actions/github");
const octokit = new Octokit({
  auth: "{{ authToken }}",
});

try {
  console.log("Locking develop branch");
  octokit.request(
    "PUT /repos/fdhansen/BranchProtectionTest/branches/develop/protection",
    {
      owner: "fdhansen",
      repo: "BranchProtectionTest",
      branch: "develop",
      required_status_check: null,
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
