<p align="center">
  <img src="logo.svg" width="200" align="center" alt="Typescript Library Logo" style="max-width: 100%;" />
  <h1></h1>
  <p align="center">
    ✨ Your Library Description ✨
  </p>
</p>
<br/>
<p align="center">
  <a href="https://github.com/js-templates/typescript-library/actions?query=branch%3Amain">
    <img src="https://github.com/js-templates/typescript-library/actions/workflows/test-and-build.yml/badge.svg?event=push&branch=main" alt="@js-templates/typescript-library CI Status" />
  </a>
  <a href="https://opensource.org/licenses/MIT" rel="nofollow">
    <img src="https://img.shields.io/github/license/js-templates/typescript-library" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@js-templates/typescript-library" rel="nofollow">
    <img src="https://img.shields.io/npm/dw/@js-templates/typescript-library.svg" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/@js-templates/typescript-library" rel="nofollow">
    <img src="https://img.shields.io/github/stars/js-templates/typescript-library" alt="stars">
  </a>
</p>

## Template Features

- 🚀 Blazingly fast and easy installation
- 💡 CI workflows configured for changelogs and release/prerelease cycles
- 🧱 Perfect and easy-to-support tooling setup without any conflicts with CI environment
- 📚 Well-documented conventions for project maintaining (commits, pull-requests, branches)

## Using template

### 1. Replace everything

1. Replace all `@js-templates/typescript-library` entries with your library name
2. Replace all `js-templates/typescript-library` entries with your repo path
3. Replace all `Your Library Description` entries with your library description
4. Replace all `Your Name` entries with your library name
5. Update `logo.svg`
6. Update logo's `alt`

### 2. Add secrets

- `NPM_TOKEN`
- `FULL_ACCESS_GITHUB_TOKEN` if you plan to set up [the branch protection](#add-branch-protection)

### 3. (optional) Set up branch protection

1. Go to `Settings` > `Branches` > `Add rule`
2. Specify `main` branch
3. Enable the following options:
   - Require a pull request before merging (without approvals)
   - Require status checks to pass before merging (you need to run them at least once to appear):
     - `test-and-build`
     - `pr-labeler`
   - Include administrators
   - Allow force pushes
4. Repeat, but using `release/*` instead of `main`
5. [Create a new Personal Access Token](https://github.com/settings/tokens/new) with `repo` permissions
6. Use it as a new Secret named `FULL_ACCESS_GITHUB_TOKEN`  
   It's needed to bypass the branch protection on CI runs

### 4. The last step

Remove **Template Features** and **Using Template** sections from README

## Before you start

The README on `main` branch may contain some unreleased changes.

Go to [`release/latest`](https://github.com/js-templates/typescript-library/tree/release/latest) branch to see the actual README for the latest version from NPM.

## Navigation

- [Installation](#installation)
- [Contrubuting](#contributing)
- [Maintenance](#maintenance)
  - [Regular flow](#regular-flow)
  - [Prerelease from](#prerelease-flow)
  - [Conventions](#conventions)

## Installation

NPM:

```sh
npm install @js-templates/typescript-library
```

Yarn:

```sh
yarn add @js-templates/typescript-library
```

## Contributing

1. Fork this repo
2. Use the [Regular flow](#regular-flow)

Please follow [Conventions](#conventions)

## Maintenance

The dev branch is `main` - any developer changes is merged in there.

Also, there is a `release/latest` branch. It always contains the actual source code for release published with `latest` tag.

All changes is made using Pull Requests - push is forbidden. PR can be merged only after successfull `test-and-build` workflow checks.

When PR is merged, `release-drafter` workflow creates/updates a draft release. The changelog is built from the merged branch scope (`feat`, `fix`, etc) and PR title. When release is ready - we publish the draft.

Then, the `release` workflow handles everything:

- It runs tests, builds a package, and publishes it
- It synchronizes released tag with `release/latest` branch

### Regular flow

1. Create [feature branch](#conventions)
2. Make changes in your feature branch and [commit](#conventions)
3. Create a Pull Request from your feature branch to `main`  
   The PR is needed to test the code before pushing to release branch
4. If your PR contains breaking changes, don't forget to put a `BREAKING CHANGES` label
5. Merge the PR in `main`
6. All done! Now you have a drafted release - just publish it when ready

### Prerelease flow

1. Assume your prerelease tag is `beta`
2. Create `release/beta` branch
3. Create [feature branch](#conventions)
4. Make changes in your feature branch and [commit](#conventions)
5. Create a Pull Request from your feature branch to `release/beta`  
   The PR is needed to test the code before pushing to release branch
6. Create Github release with tag like `v1.0.0-beta`, pointing to `release/beta` branch  
   For next `beta` versions use semver build syntax: `v1.0.0-beta+1`
7. After that, the `release` workflow will publish your package with the `beta` tag
8. When the `beta` version is ready to become `latest` - create a Pull Request from `release/beta` to `main` branch
9. Continue from the [Regular flow's](#regular-flow) #5 step

### Conventions

**Feature branches**:

- Should start with `feat/`, `fix/`, `docs/`, `refactor/`, and etc., depending on the changes you want to propose (see [pr-labeler.yml](./.github/pr-labeler.yml) for a full list of scopes)

**Commits**:

- Should follow the [Conventional Commits specification](https://www.conventionalcommits.org)
- You can find supported types and scopes into `.cz-config.js`

**Pull requests**:

- Should have human-readable name, for example: "Add a TODO list feature"
- Should describe changes
- Should have correct labels (handled by PR Labeler in most cases)
