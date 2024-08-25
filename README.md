<p align="center">
  <img src="https://github.com/Shreykc1/Doc.IO/blob/main/public/assets/icons/logo.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">DOC.IO</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/Shreykc1/Doc.IO?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Shreykc1/Doc.IO?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Shreykc1/Doc.IO?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Shreykc1/Doc.IO?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running Doc.IO](#-running-Doc.IO)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

HTTP error 401 for prompt `overview`

---

##  Features

HTTP error 401 for prompt `features`

---

##  Repository Structure

```sh
└── Doc.IO/
    ├── README.md
    ├── app
    │   ├── (auth)
    │   │   ├── sign-in
    │   │   │   └── [[...sign-in]]
    │   │   │       └── page.tsx
    │   │   └── sign-up
    │   │       └── [[...sign-up]]
    │   │           └── page.tsx
    │   ├── (root)
    │   │   ├── documents
    │   │   │   └── [id]
    │   │   │       └── page.tsx
    │   │   └── page.tsx
    │   ├── Provider.tsx
    │   ├── api
    │   │   └── liveblocks-auth
    │   │       └── route.ts
    │   ├── favicon.ico
    │   ├── globals.css
    │   └── layout.tsx
    ├── components
    │   ├── Header.tsx
    │   ├── editor
    │   │   ├── Editor.tsx
    │   │   └── plugins
    │   │       ├── Theme.ts
    │   │       └── ToolbarPlugin.tsx
    │   └── ui
    │       ├── AddDocBtn.tsx
    │       ├── CollaborativeRoom.tsx
    │       ├── Loader.tsx
    │       └── button.tsx
    ├── components.json
    ├── lib
    │   ├── actions
    │   │   └── room.actions.ts
    │   ├── liveblocks.ts
    │   └── utils.ts
    ├── liveblocks.config.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── assets
    │   │   ├── icons
    │   │   │   ├── add.svg
    │   │   │   ├── arrow-clockwise.svg
    │   │   │   ├── arrow-counterclockwise.svg
    │   │   │   ├── bell.svg
    │   │   │   ├── close.svg
    │   │   │   ├── comment.svg
    │   │   │   ├── delete-modal.svg
    │   │   │   ├── delete.svg
    │   │   │   ├── doc.svg
    │   │   │   ├── edit.svg
    │   │   │   ├── file.svg
    │   │   │   ├── h1.svg
    │   │   │   ├── h2.svg
    │   │   │   ├── h3.svg
    │   │   │   ├── journal-text.svg
    │   │   │   ├── justify.svg
    │   │   │   ├── loader.svg
    │   │   │   ├── logo-icon.svg
    │   │   │   ├── logo.svg
    │   │   │   ├── more.svg
    │   │   │   ├── share.svg
    │   │   │   ├── text-center.svg
    │   │   │   ├── text-left.svg
    │   │   │   ├── text-paragraph.svg
    │   │   │   ├── text-right.svg
    │   │   │   ├── type-bold.svg
    │   │   │   ├── type-italic.svg
    │   │   │   ├── type-strikethrough.svg
    │   │   │   └── type-underline.svg
    │   │   └── images
    │   │       ├── doc.png
    │   │       ├── logo.png
    │   │       └── modal.png
    │   ├── next.svg
    │   └── vercel.svg
    ├── styles
    │   ├── dark-theme.css
    │   └── light-theme.css
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── index.d.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                        | Summary                                          |
| ---                                                                                         | ---                                              |
| [middleware.ts](https://github.com/Shreykc1/Doc.IO/blob/master/middleware.ts)               | HTTP error 401 for prompt `middleware.ts`        |
| [postcss.config.mjs](https://github.com/Shreykc1/Doc.IO/blob/master/postcss.config.mjs)     | HTTP error 401 for prompt `postcss.config.mjs`   |
| [tailwind.config.ts](https://github.com/Shreykc1/Doc.IO/blob/master/tailwind.config.ts)     | HTTP error 401 for prompt `tailwind.config.ts`   |
| [components.json](https://github.com/Shreykc1/Doc.IO/blob/master/components.json)           | HTTP error 401 for prompt `components.json`      |
| [tsconfig.json](https://github.com/Shreykc1/Doc.IO/blob/master/tsconfig.json)               | HTTP error 401 for prompt `tsconfig.json`        |
| [package.json](https://github.com/Shreykc1/Doc.IO/blob/master/package.json)                 | HTTP error 401 for prompt `package.json`         |
| [next.config.mjs](https://github.com/Shreykc1/Doc.IO/blob/master/next.config.mjs)           | HTTP error 401 for prompt `next.config.mjs`      |
| [package-lock.json](https://github.com/Shreykc1/Doc.IO/blob/master/package-lock.json)       | HTTP error 401 for prompt `package-lock.json`    |
| [liveblocks.config.ts](https://github.com/Shreykc1/Doc.IO/blob/master/liveblocks.config.ts) | HTTP error 401 for prompt `liveblocks.config.ts` |

</details>

<details closed><summary>styles</summary>

| File                                                                                     | Summary                                            |
| ---                                                                                      | ---                                                |
| [light-theme.css](https://github.com/Shreykc1/Doc.IO/blob/master/styles/light-theme.css) | HTTP error 401 for prompt `styles/light-theme.css` |
| [dark-theme.css](https://github.com/Shreykc1/Doc.IO/blob/master/styles/dark-theme.css)   | HTTP error 401 for prompt `styles/dark-theme.css`  |

</details>

<details closed><summary>types</summary>

| File                                                                          | Summary                                      |
| ---                                                                           | ---                                          |
| [index.d.ts](https://github.com/Shreykc1/Doc.IO/blob/master/types/index.d.ts) | HTTP error 401 for prompt `types/index.d.ts` |

</details>

<details closed><summary>components</summary>

| File                                                                               | Summary                                           |
| ---                                                                                | ---                                               |
| [Header.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/Header.tsx) | HTTP error 401 for prompt `components/Header.tsx` |

</details>

<details closed><summary>components.editor</summary>

| File                                                                                      | Summary                                                  |
| ---                                                                                       | ---                                                      |
| [Editor.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/editor/Editor.tsx) | HTTP error 401 for prompt `components/editor/Editor.tsx` |

</details>

<details closed><summary>components.editor.plugins</summary>

| File                                                                                                            | Summary                                                                 |
| ---                                                                                                             | ---                                                                     |
| [ToolbarPlugin.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/editor/plugins/ToolbarPlugin.tsx) | HTTP error 401 for prompt `components/editor/plugins/ToolbarPlugin.tsx` |
| [Theme.ts](https://github.com/Shreykc1/Doc.IO/blob/master/components/editor/plugins/Theme.ts)                   | HTTP error 401 for prompt `components/editor/plugins/Theme.ts`          |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                        | Summary                                                         |
| ---                                                                                                         | ---                                                             |
| [Loader.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/ui/Loader.tsx)                       | HTTP error 401 for prompt `components/ui/Loader.tsx`            |
| [AddDocBtn.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/ui/AddDocBtn.tsx)                 | HTTP error 401 for prompt `components/ui/AddDocBtn.tsx`         |
| [button.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/ui/button.tsx)                       | HTTP error 401 for prompt `components/ui/button.tsx`            |
| [CollaborativeRoom.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/components/ui/CollaborativeRoom.tsx) | HTTP error 401 for prompt `components/ui/CollaborativeRoom.tsx` |

</details>

<details closed><summary>lib</summary>

| File                                                                              | Summary                                       |
| ---                                                                               | ---                                           |
| [utils.ts](https://github.com/Shreykc1/Doc.IO/blob/master/lib/utils.ts)           | HTTP error 401 for prompt `lib/utils.ts`      |
| [liveblocks.ts](https://github.com/Shreykc1/Doc.IO/blob/master/lib/liveblocks.ts) | HTTP error 401 for prompt `lib/liveblocks.ts` |

</details>

<details closed><summary>lib.actions</summary>

| File                                                                                          | Summary                                                 |
| ---                                                                                           | ---                                                     |
| [room.actions.ts](https://github.com/Shreykc1/Doc.IO/blob/master/lib/actions/room.actions.ts) | HTTP error 401 for prompt `lib/actions/room.actions.ts` |

</details>

<details closed><summary>app</summary>

| File                                                                            | Summary                                      |
| ---                                                                             | ---                                          |
| [Provider.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/Provider.tsx) | HTTP error 401 for prompt `app/Provider.tsx` |
| [globals.css](https://github.com/Shreykc1/Doc.IO/blob/master/app/globals.css)   | HTTP error 401 for prompt `app/globals.css`  |
| [layout.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/layout.tsx)     | HTTP error 401 for prompt `app/layout.tsx`   |

</details>

<details closed><summary>app.api.liveblocks-auth</summary>

| File                                                                                        | Summary                                                      |
| ---                                                                                         | ---                                                          |
| [route.ts](https://github.com/Shreykc1/Doc.IO/blob/master/app/api/liveblocks-auth/route.ts) | HTTP error 401 for prompt `app/api/liveblocks-auth/route.ts` |

</details>

<details closed><summary>app.(auth).sign-in.[[...sign-in]]</summary>

| File                                                                                                  | Summary                                                                |
| ---                                                                                                   | ---                                                                    |
| [page.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/(auth)/sign-in/[[...sign-in]]/page.tsx) | HTTP error 401 for prompt `app/(auth)/sign-in/[[...sign-in]]/page.tsx` |

</details>

<details closed><summary>app.(auth).sign-up.[[...sign-up]]</summary>

| File                                                                                                  | Summary                                                                |
| ---                                                                                                   | ---                                                                    |
| [page.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/(auth)/sign-up/[[...sign-up]]/page.tsx) | HTTP error 401 for prompt `app/(auth)/sign-up/[[...sign-up]]/page.tsx` |

</details>

<details closed><summary>app.(root)</summary>

| File                                                                           | Summary                                         |
| ---                                                                            | ---                                             |
| [page.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/(root)/page.tsx) | HTTP error 401 for prompt `app/(root)/page.tsx` |

</details>

<details closed><summary>app.(root).documents.[id]</summary>

| File                                                                                          | Summary                                                        |
| ---                                                                                           | ---                                                            |
| [page.tsx](https://github.com/Shreykc1/Doc.IO/blob/master/app/(root)/documents/[id]/page.tsx) | HTTP error 401 for prompt `app/(root)/documents/[id]/page.tsx` |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

###  Installation

1. Clone the Doc.IO repository:

```sh
git clone https://github.com/Shreykc1/Doc.IO
```

2. Change to the project directory:

```sh
cd Doc.IO
```

3. Install the dependencies:

```sh
npm install
```

###  Running Doc.IO

Use the following command to run Doc.IO:

```sh
npm run build && node dist/main.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Shreykc1/Doc.IO/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Shreykc1/Doc.IO/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Shreykc1/Doc.IO/issues)**: Submit bugs found or log feature requests for Doc.io.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Shreykc1/Doc.IO
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
