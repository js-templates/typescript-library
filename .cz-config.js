module.exports = {
  types: [
    { name: "🎸 feat:     A new feature", value: "feat" },
    { name: "🐛 fix:      A bug fix", value: "fix" },
    { name: "🕯 wip:      Work in progress", value: "wip" },
    { name: "🤖 chore:    Build process or auxiliary tool change", value: "chore" },
    { name: "💡 refactor: A code change that neither fixes a bug or adds a feature", value: "refactor" },
    { name: "💄 style:    Markup, white-space, formatting, missing semi-colons...", value: "style" },
    { name: "💍 test:     Adding missing tests", value: "test" },
    { name: "💪 perf:     A code change that improves performance", value: "perf" },
    { name: "✏️ docs:     Documentation only changes", value: "docs" },
    { name: "🕹️ ci:       CI related changes", value: "ci" },
    { name: "🔥 revert:   Revert to a commit", value: "revert" },
  ],
  allowCustomScopes: true,
  skipQuestions: ["footer"],
  allowBreakingChanges: ["feat", "fix", "revert", "refactor"],
}
