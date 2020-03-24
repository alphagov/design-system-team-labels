repos=(
  alphagov/design-system-team-internal
)

args=(
  --allow-added-labels # Keep any existing labels that are not in the config
  --labels labels.js
)

# Unless the APPLY environment variable is provided, just do a dry run and show
# the changes that we would make.
if [[ -z "$APPLY" ]]; then
  args+=(--dry-run)
fi

for repo in ${repos[*]}; do
  echo
  echo "---"
  echo "$repo"
  echo "---"

  npx github-label-sync "${args[@]}" "$repo"
done
