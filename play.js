let a = [
    "https://github.com/fmx-proptech/fmx-vms",
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdex",
    "https://github.com/fmx-proptech/fmx-communication-coreServices",
    "https://github.com/fmx-proptech/fmx-cronServices",
    "https://github.com/fmx-proptech/fmx-App-clientAdmin",
    "https://github.com/fmx-proptech/fmx-vms-backend",
    "https://github.com/fmx-proptech/dataMigration",
    "https://github.com/fmx-proptech/fmx-users",
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdex",
    "https://github.com/fmx-proptech/fmx-adminCoreServices-backend",
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdexCoreServices",
    "https://github.com/fmx-proptech/fmx-usersCoreServices-backend",
    "https://github.com/fmx-proptech/fmx-device-backend",
    "https://github.com/fmx-proptech/fmx-device-coreServices",
    "https://github.com/fmx-proptech/fmx-admin-backend",
    "https://github.com/fmx-proptech/fmx-formBuilder-CoreServices",
    "https://github.com/fmx-proptech/fmx-formBuilder-backend",
    "https://github.com/fmx-proptech/fmx-feedback-backend",
    "https://github.com/fmx-proptech/ssoLogin"
]


#!/bin/bash

# Array of GitHub repository links
repos=(
    "https://github.com/fmx-proptech/fmx-vms"
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdex"
    "https://github.com/fmx-proptech/fmx-communication-coreServices"
    "https://github.com/fmx-proptech/fmx-cronServices"
    "https://github.com/fmx-proptech/fmx-App-clientAdmin"
    "https://github.com/fmx-proptech/fmx-vms-backend"
    "https://github.com/fmx-proptech/dataMigration"
    "https://github.com/fmx-proptech/fmx-users"
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdex"
    "https://github.com/fmx-proptech/fmx-adminCoreServices-backend"
    "https://github.com/fmx-proptech/fmx-clientAdmin-helpdexCoreServices"
    "https://github.com/fmx-proptech/fmx-usersCoreServices-backend"
    "https://github.com/fmx-proptech/fmx-device-backend"
    "https://github.com/fmx-proptech/fmx-device-coreServices"
    "https://github.com/fmx-proptech/fmx-admin-backend"
    "https://github.com/fmx-proptech/fmx-formBuilder-CoreServices"
    "https://github.com/fmx-proptech/fmx-formBuilder-backend"
    "https://github.com/fmx-proptech/fmx-feedback-backend"
    "https://github.com/fmx-proptech/ssoLogin"
)

# Directory where repositories will be cloned
clone_dir="/path/to/clone/directory"

# Iterate through the array and clone each repository
for repo in "${repos[@]}"; do
    # Extract repository name from the URL
    repo_name=$(basename "$repo" .git)
    echo "Cloning $repo_name..."
    git clone "$repo" "$clone_dir/$repo_name"
    if [ $? -eq 0 ]; then
        echo "Cloned $repo_name successfully."
    else
        echo "Failed to clone $repo_name."
    fi
done

echo "All repositories cloned successfully."
