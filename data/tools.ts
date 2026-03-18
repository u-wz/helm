export type ToolCategory =
  | "editor"
  | "cloud"
  | "design"
  | "productivity"
  | "vpn"
  | "ai"
  | "payment"
  | "student_pack"
  | "api_testing"
  | "database"
  | "version_control"
  | "terminal"
  | "testing"
  | "devops_cicd"
  | "security"
  | "browser_devtools"
  | "learning";

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ToolCategory;
  isFree: boolean;
  hasFreeStudentPlan: boolean;
  studentPlanUrl?: string;
  tags: string[];
  platforms?: string[];
  recommendedFor?: string;
  isHighlighted?: boolean;
}

export const tools: Tool[] = [
  // ─────────────────────────────────────────
  // STUDENT PACK
  // ─────────────────────────────────────────
  {
    id: "github-student-pack",
    name: "GitHub Student Developer Pack",
    description:
      "The single most valuable free resource for CS students. 100+ tools worth $200,000+ annually, all free with a student email.",
    url: "https://education.github.com/pack",
    category: "student_pack",
    isFree: true,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://education.github.com/pack",
    tags: ["github", "student", "free", "tools", "popular"],
    platforms: ["Web"],
    recommendedFor: "Every CS student — apply immediately",
    isHighlighted: true,
  },

  // ─────────────────────────────────────────
  // EDITORS
  // ─────────────────────────────────────────
  {
    id: "vscode",
    name: "VS Code",
    description:
      "The most popular code editor. Free, fast, and has extensions for everything. The default choice for web development.",
    url: "https://code.visualstudio.com/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ide", "microsoft", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Web dev, Python, JavaScript — everyone",
    isHighlighted: true,
  },
  {
    id: "zed",
    name: "Zed",
    description:
      "A modern, high-performance, and collaborative code editor built in Rust by the creators of the now-retired Atom editor.",
    url: "https://zed.dev/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "open-source", "blazing fast", "collaborative"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Everyone — literally",
    isHighlighted: true,
  },
  {
    id: "sublime",
    name: "Sublime Text",
    description:
      "Known for its speed, minimalist interface, and efficiency. A lightweight editor that opens instantly and handles large files effortlessly.",
    url: "https://www.sublimetext.com/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "lightweight", "minimal", "fast"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want a fast, no-bloat editor",
  },
  {
    id: "vim",
    name: "Vim",
    description:
      "Terminal-based modal editor with an extremely steep learning curve but unmatched efficiency once mastered. The editor that never leaves your fingers.",
    url: "https://www.vim.org/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "terminal", "keyboard-driven", "open-source", "legendary"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Power users and remote/SSH development",
  },
  {
    id: "neovim",
    name: "Neovim",
    description:
      "The modern, extensible fork of Vim. Fully scriptable in Lua, with a thriving plugin ecosystem and support for LSP, Tree-sitter, and DAP out of the box.",
    url: "https://neovim.io/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "editor",
      "terminal",
      "vim",
      "lua",
      "keyboard-driven",
      "open-source",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Power users who want Vim with modern IDE features",
  },
  {
    id: "emacs",
    name: "Emacs",
    description:
      "More than an editor — a full productivity environment. Infinitely extensible via Lisp, with built-in shell, org-mode, and decades of legacy.",
    url: "https://www.gnu.org/software/emacs/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "terminal", "extensible", "open-source", "legendary"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want total control over their environment",
  },
  {
    id: "notepadpp",
    name: "Notepad++",
    description:
      "A free, lightweight Windows-only source code editor. Trusted for over two decades for quick edits, config files, and scripting tasks.",
    url: "https://notepad-plus-plus.org/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "lightweight", "windows", "open-source"],
    platforms: ["Windows"],
    recommendedFor: "Windows users who need a fast, simple editor",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "VS Code fork rebuilt around AI from the ground up. Chat with your codebase, generate code across multiple files, and get deep context-aware completions.",
    url: "https://cursor.sh/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ai", "vscode-fork", "modern", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want the deepest AI integration",
    isHighlighted: true,
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description:
      "The first agentic IDE by Codeium. Uses its Cascade AI engine to make context-aware, multi-file edits across your codebase with minimal prompting.",
    url: "https://codeium.com/windsurf",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ai", "agentic", "vscode-fork", "codeium"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want agentic AI assistance",
  },
  {
    id: "antigravity",
    name: "Antigravity",
    description:
      "Google's agentic IDE and development platform that evolves the coding environment with autonomous agents across the editor, terminal, and browser.",
    url: "https://antigravity.google/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ai", "google", "agentic", "ide"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers wanting the next generation of AI-assisted engineering",
    isHighlighted: true,
  },
  {
    id: "visualstudio",
    name: "Visual Studio",
    description:
      "Microsoft's full-featured editor for .NET, C++, and Windows development. Comprehensive debugging, profiling, and testing tools for complex applications.",
    url: "https://visualstudio.microsoft.com/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "microsoft", "dotnet", "csharp", "cpp", "windows"],
    platforms: ["Windows", "Mac"],
    recommendedFor: ".NET, C#, C++, and Windows application developers",
  },
  {
    id: "xcode",
    name: "Xcode",
    description:
      "Apple's official editor for macOS, iOS, watchOS, and tvOS development. Required for building and publishing to the App Store.",
    url: "https://developer.apple.com/xcode/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "apple", "swift", "ios", "macos", "official"],
    platforms: ["Mac"],
    recommendedFor: "iOS and macOS app developers",
  },
  {
    id: "androidstudio",
    name: "Android Studio",
    description:
      "Google's official editor for Android development, built on IntelliJ IDEA. Includes an emulator, layout editor, and deep Android SDK integration.",
    url: "https://developer.android.com/studio",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "editor",
      "google",
      "android",
      "kotlin",
      "java",
      "mobile",
      "official",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Android app developers",
  },
  {
    id: "jetbrains",
    name: "JetBrains IDEs",
    description:
      "IntelliJ IDEA, PyCharm, WebStorm, and more. The gold standard for language-specific deep tooling, refactoring, and code analysis. Free for students.",
    url: "https://www.jetbrains.com/",
    category: "editor",
    isFree: false,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://www.jetbrains.com/student/",
    tags: ["editor", "java", "python", "javascript", "student", "professional"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Java, Python, web dev professionals",
  },
  {
    id: "eclipse",
    name: "Eclipse",
    description:
      "A veteran open-source editor primarily known for Java enterprise development. Heavyweight but incredibly capable with a massive plugin ecosystem.",
    url: "https://eclipseide.org/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "java", "open-source", "enterprise"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Java enterprise developers and legacy projects",
  },
  {
    id: "replit",
    name: "Replit",
    description:
      "An all-in-one browser-based editor with built-in hosting, AI, and collaboration. Great for learning and prototyping without any local setup.",
    url: "https://replit.com/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "editor",
      "cloud",
      "browser",
      "collaborative",
      "ai",
      "beginner-friendly",
    ],
    platforms: ["Web"],
    recommendedFor: "Students, beginners, and rapid prototyping",
  },
  {
    id: "codesandbox",
    name: "CodeSandbox",
    description:
      "Free, instant, collaborative sandboxes for rapid web development. Spin up a full dev environment in seconds without installing anything.",
    url: "https://codesandbox.io/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "cloud", "browser", "collaborative", "web", "sandbox"],
    platforms: ["Web"],
    recommendedFor: "Front-end developers and quick web experiments",
  },
  {
    id: "stackblitz",
    name: "StackBlitz",
    description:
      "An instant full-stack web editor running entirely in the browser via WebContainers. Runs Node.js natively — no server required.",
    url: "https://stackblitz.com/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "cloud", "browser", "nodejs", "fullstack"],
    platforms: ["Web"],
    recommendedFor:
      "JavaScript/Node.js developers who want zero-install environments",
  },
  {
    id: "gitpod",
    name: "Gitpod",
    description:
      "Automated cloud dev environments that spin up instantly from any GitHub, GitLab, or Bitbucket repo. No more 'works on my machine'.",
    url: "https://www.gitpod.io/",
    category: "editor",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "cloud", "devenv", "github", "remote"],
    platforms: ["Web"],
    recommendedFor: "Teams who want reproducible dev environments",
  },

  // ─────────────────────────────────────────
  // VERSION CONTROL
  // ─────────────────────────────────────────
  {
    id: "github",
    name: "GitHub",
    description:
      "The world's largest code hosting platform. Free public and private repos, GitHub Actions CI/CD, GitHub Pages hosting, Issues, and a massive open-source community.",
    url: "https://github.com/",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://education.github.com/pack",
    tags: ["git", "hosting", "open-source", "ci/cd", "popular"],
    platforms: ["Web", "Windows", "Mac", "Linux"],
    recommendedFor: "Every developer — your online portfolio lives here",
    isHighlighted: true,
  },
  {
    id: "gitlab",
    name: "GitLab",
    description:
      "GitHub alternative with more built-in DevOps features. Free tier includes private repos, built-in CI/CD pipelines, container registry, and issue tracking.",
    url: "https://gitlab.com/",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["git", "hosting", "ci/cd", "devops", "self-hostable"],
    platforms: ["Web"],
    recommendedFor: "Teams who want everything in one platform",
  },
  {
    id: "github-desktop",
    name: "GitHub Desktop",
    description:
      "A clean, visual Git client that removes the intimidation of the command line. Perfect for learning Git concepts with visual feedback.",
    url: "https://desktop.github.com/",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["git", "gui", "beginner-friendly", "github"],
    platforms: ["Windows", "Mac"],
    recommendedFor: "Git beginners and developers who prefer GUI over CLI",
  },
  {
    id: "sourcetree",
    name: "Sourcetree",
    description:
      "Free visual Git client by Atlassian. Full branching, merging, and history visualization. Supports GitHub, GitLab, and Bitbucket.",
    url: "https://www.sourcetreeapp.com/",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["git", "gui", "atlassian", "visual"],
    platforms: ["Windows", "Mac"],
    recommendedFor: "Developers who want a feature-rich visual Git client",
  },
  {
    id: "lazygit",
    name: "LazyGit",
    description:
      "A blazing-fast terminal UI for Git. Cherry-pick, stash, rebase, diff, and resolve conflicts without remembering a single Git command. Loved by keyboard users.",
    url: "https://github.com/jesseduffield/lazygit",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["git", "terminal", "tui", "keyboard", "open-source"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Terminal users who want Git power without memorizing flags",
  },
  {
    id: "gitlens",
    name: "GitLens",
    description:
      "The most popular VS Code extension for Git. Inline blame, file history, branch comparison, and deep Git visualization — all inside your editor.",
    url: "https://gitlens.amod.io/",
    category: "version_control",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["git", "vscode", "extension", "blame", "history"],
    platforms: ["VS Code"],
    recommendedFor: "VS Code users who want Git superpowers inline",
  },

  // ─────────────────────────────────────────
  // API TESTING
  // ─────────────────────────────────────────
  {
    id: "postman",
    name: "Postman",
    description:
      "The most popular API platform for designing, testing, and documenting APIs. Free tier is now limited (1 user, 25 collection runs/month) but still great for learning.",
    url: "https://www.postman.com/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "testing", "rest", "graphql", "popular"],
    platforms: ["Web", "Windows", "Mac", "Linux"],
    recommendedFor: "API development, testing, and documentation",
    isHighlighted: true,
  },
  {
    id: "hoppscotch",
    name: "Hoppscotch",
    description:
      "Open-source, browser-based API testing tool. Fast, minimal, and beautiful UI. Supports REST, GraphQL, WebSockets, gRPC. Completely free — the best Postman alternative.",
    url: "https://hoppscotch.io/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "api",
      "testing",
      "open-source",
      "rest",
      "graphql",
      "websocket",
      "browser",
    ],
    platforms: ["Web"],
    recommendedFor: "Quick API testing with zero setup",
    isHighlighted: true,
  },
  {
    id: "bruno",
    name: "Bruno",
    description:
      "Open-source API client that stores collections as plain files in your repo — not the cloud. Git-friendly by design. Completely free, no account needed.",
    url: "https://www.usebruno.com/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "testing", "open-source", "git", "local", "privacy"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Developers who want API collections version-controlled with their code",
  },
  {
    id: "insomnia",
    name: "Insomnia",
    description:
      "Clean, fast API client with excellent support for REST, GraphQL, gRPC, and WebSockets. Easier to use than Postman with a more modern interface.",
    url: "https://insomnia.rest/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "testing", "rest", "graphql", "grpc", "modern"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want a cleaner Postman alternative",
  },
  {
    id: "thunder-client",
    name: "Thunder Client",
    description:
      "Lightweight REST API testing extension for VS Code. Test your APIs without leaving your editor. Free, fast, and zero overhead.",
    url: "https://www.thunderclient.com/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "testing", "vscode", "extension", "lightweight"],
    platforms: ["VS Code"],
    recommendedFor: "VS Code developers who want inline API testing",
  },
  {
    id: "apidog",
    name: "Apidog",
    description:
      "All-in-one API platform: design, document, debug, mock, and test. Generous free tier (4 users, unlimited runs) — the best full-featured Postman alternative.",
    url: "https://apidog.com/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "testing", "design", "mock", "documentation", "free-tier"],
    platforms: ["Web", "Windows", "Mac", "Linux"],
    recommendedFor: "Teams building APIs who need design + test in one place",
  },
  {
    id: "swagger",
    name: "Swagger / OpenAPI",
    description:
      "Industry standard for API design and documentation. Swagger UI generates interactive API docs automatically from your OpenAPI spec. Free and open-source.",
    url: "https://swagger.io/",
    category: "api_testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["api", "documentation", "openapi", "design", "standard"],
    platforms: ["Web"],
    recommendedFor: "Teams building and documenting REST APIs",
  },

  // ─────────────────────────────────────────
  // DATABASE TOOLS
  // ─────────────────────────────────────────
  {
    id: "dbeaver",
    name: "DBeaver",
    description:
      "The most powerful free database management tool. Supports 80+ databases: PostgreSQL, MySQL, SQLite, MongoDB, Redis, Oracle, and more. Free community edition.",
    url: "https://dbeaver.io/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "database",
      "sql",
      "gui",
      "postgres",
      "mysql",
      "open-source",
      "popular",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Anyone who works with databases — supports everything",
    isHighlighted: true,
  },
  {
    id: "tableplus",
    name: "TablePlus",
    description:
      "Beautiful, native database client with a clean interface. Free tier allows 2 open tabs and 2 connections. Supports PostgreSQL, MySQL, SQLite, Redis, and more.",
    url: "https://tableplus.com/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "sql", "gui", "native", "clean"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want a beautiful database client",
  },
  {
    id: "beekeeper-studio",
    name: "Beekeeper Studio",
    description:
      "Free, open-source SQL editor and database manager with a clean, modern interface. Supports Postgres, MySQL, SQLite, SQL Server, and more.",
    url: "https://www.beekeeperstudio.io/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "sql", "gui", "open-source", "modern"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers wanting a modern, free DBeaver alternative",
  },
  {
    id: "pgadmin",
    name: "pgAdmin",
    description:
      "The official management tool for PostgreSQL. Feature-rich, free, and open-source. Query editor, backup, restore, monitoring — everything for Postgres.",
    url: "https://www.pgadmin.org/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "postgresql", "postgres", "official", "open-source"],
    platforms: ["Web", "Windows", "Mac", "Linux"],
    recommendedFor: "PostgreSQL developers and database administrators",
  },
  {
    id: "mysql-workbench",
    name: "MySQL Workbench",
    description:
      "Official GUI tool for MySQL — schema design, SQL development, query analysis, and server administration all in one place. Free.",
    url: "https://www.mysql.com/products/workbench/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "mysql", "official", "schema-design", "gui"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "MySQL developers and DBAs",
  },
  {
    id: "redis-insight",
    name: "RedisInsight",
    description:
      "Official free GUI for Redis by Redis Labs. Browse keys, visualize data structures, run commands, and monitor performance. Makes Redis intuitive.",
    url: "https://redis.io/insight/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "redis", "nosql", "cache", "official", "gui"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers working with Redis caching and pub/sub",
  },
  {
    id: "neon",
    name: "Neon",
    description:
      "Serverless PostgreSQL with a generous free tier. Branches your database like Git — create a branch for each feature or PR. Perfect for modern development workflows.",
    url: "https://neon.tech/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "database",
      "postgresql",
      "serverless",
      "cloud",
      "branching",
      "free-tier",
    ],
    platforms: ["Web"],
    recommendedFor:
      "Developers who want serverless Postgres with Git-style branching",
  },
  {
    id: "turso",
    name: "Turso",
    description:
      "Edge-hosted SQLite. Free tier includes 500 databases and 9GB of storage. Blazing fast globally, perfect for hobby projects and Next.js apps.",
    url: "https://turso.tech/",
    category: "database",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "sqlite", "edge", "cloud", "free-tier", "fast"],
    platforms: ["Web"],
    recommendedFor: "Developers building edge-deployed apps with SQLite",
  },

  // ─────────────────────────────────────────
  // TERMINAL
  // ─────────────────────────────────────────
  {
    id: "warp",
    name: "Warp",
    description:
      "A modern, AI-powered terminal. Editable command blocks, autocomplete, history search, and an AI agent that explains errors and suggests commands. Free tier.",
    url: "https://www.warp.dev/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "ai", "modern", "autocomplete", "productivity"],
    platforms: ["Mac", "Linux"],
    recommendedFor: "Developers who want the smartest modern terminal",
    isHighlighted: true,
  },
  {
    id: "iterm2",
    name: "iTerm2",
    description:
      "The gold standard terminal for Mac developers. Split panes, search, profiles, triggers, and deeply customizable. Free and massively popular.",
    url: "https://iterm2.com/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "macos", "split-panes", "customizable", "popular"],
    platforms: ["Mac"],
    recommendedFor: "Mac developers who want a feature-rich terminal",
  },
  {
    id: "windows-terminal",
    name: "Windows Terminal",
    description:
      "Microsoft's modern terminal for Windows. Supports multiple tabs, panes, PowerShell, CMD, WSL, and SSH. Free, open-source, highly customizable.",
    url: "https://apps.microsoft.com/store/detail/windows-terminal/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "windows", "wsl", "powershell", "tabs", "microsoft"],
    platforms: ["Windows"],
    recommendedFor: "Windows developers using PowerShell or WSL",
  },
  {
    id: "oh-my-zsh",
    name: "Oh My Zsh",
    description:
      "The most popular framework for managing your Zsh configuration. 300+ plugins, 140+ themes, and community-driven tweaks that make your terminal actually enjoyable.",
    url: "https://ohmyz.sh/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "zsh", "shell", "plugins", "themes", "open-source"],
    platforms: ["Mac", "Linux"],
    recommendedFor:
      "Mac/Linux developers who want a beautiful productive terminal",
  },
  {
    id: "tmux",
    name: "tmux",
    description:
      "Terminal multiplexer — split one terminal window into multiple panes, create sessions that survive disconnections, and switch between projects instantly.",
    url: "https://github.com/tmux/tmux",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "multiplexer", "sessions", "ssh", "linux", "power-user"],
    platforms: ["Mac", "Linux"],
    recommendedFor: "SSH users and power users who live in the terminal",
  },
  {
    id: "zellij",
    name: "Zellij",
    description:
      "A modern tmux alternative written in Rust. Beautiful by default, easier to learn, with floating panes, plugins, and a fantastic UI. Free and open-source.",
    url: "https://zellij.dev/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["terminal", "multiplexer", "rust", "modern", "tmux-alternative"],
    platforms: ["Mac", "Linux"],
    recommendedFor:
      "Developers who want tmux power with a friendlier experience",
  },
  {
    id: "ngrok",
    name: "ngrok",
    description:
      "Expose your localhost to the internet in one command. Free tier gets you a public HTTPS URL for your local server — perfect for testing webhooks and sharing demos.",
    url: "https://ngrok.com/",
    category: "terminal",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["tunnel", "localhost", "webhooks", "sharing", "https", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Testing webhooks, sharing local apps, demo presentations",
    isHighlighted: true,
  },

  // ─────────────────────────────────────────
  // CLOUD & HOSTING
  // ─────────────────────────────────────────
  {
    id: "vercel",
    name: "Vercel",
    description:
      "Best free hosting for Next.js, React, and static sites. Deploy in seconds from GitHub. Free tier is generous.",
    url: "https://vercel.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["hosting", "nextjs", "react", "deployment", "popular"],
    platforms: ["Web"],
    recommendedFor: "Frontend and Next.js developers",
    isHighlighted: true,
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "Open-source Firebase alternative. Free PostgreSQL database + authentication + file storage + real-time subscriptions.",
    url: "https://supabase.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "postgres", "auth", "realtime", "popular"],
    platforms: ["Web"],
    recommendedFor: "Full-stack apps that need a backend quickly",
    isHighlighted: true,
  },
  {
    id: "firebase",
    name: "Firebase",
    description:
      "Google's all-in-one mobile/web backend. Free Spark plan includes Firestore, Authentication, Hosting, Cloud Functions, and Realtime Database. Great for MVPs.",
    url: "https://firebase.google.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "database",
      "auth",
      "hosting",
      "realtime",
      "google",
      "mobile",
      "popular",
    ],
    platforms: ["Web"],
    recommendedFor: "Mobile apps and MVPs that need a quick backend",
  },
  {
    id: "convex",
    name: "Convex",
    description:
      "A reactive backend-as-a-service with a real-time database, serverless functions, and fully synced state across all users.",
    url: "https://www.convex.dev/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "backend", "realtime", "typescript", "serverless"],
    platforms: ["Web"],
    recommendedFor: "Full-stack developers and Next.js applications",
    isHighlighted: true,
  },
  {
    id: "aws-free",
    name: "AWS Free Tier",
    description:
      "12 months of free AWS services + always-free tier. EC2, S3, Lambda, RDS. Essential for cloud learning.",
    url: "https://aws.amazon.com/free/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["aws", "cloud", "ec2", "s3", "lambda"],
    platforms: ["Web"],
    recommendedFor: "Cloud/DevOps learners and backend developers",
  },
  {
    id: "azure-students",
    name: "Azure for Students",
    description:
      "$100 Azure credit, no credit card required. Access to 25+ free services. Apply with your university email.",
    url: "https://azure.microsoft.com/en-us/free/students/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://azure.microsoft.com/en-us/free/students/",
    tags: ["azure", "microsoft", "cloud", "student", "credit"],
    platforms: ["Web"],
    recommendedFor: ".NET developers and cloud learners",
  },
  {
    id: "netlify",
    name: "Netlify",
    description:
      "Free static site hosting with CI/CD from GitHub. Also has serverless functions. Great alternative to Vercel.",
    url: "https://netlify.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["hosting", "static", "cicd", "serverless"],
    platforms: ["Web"],
    recommendedFor: "Static sites and JAMstack apps",
  },
  {
    id: "railway",
    name: "Railway",
    description:
      "Simple cloud platform for deploying backends. Free tier available. Deploy Node.js, Python, Docker apps easily.",
    url: "https://railway.app/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["hosting", "backend", "nodejs", "python", "docker"],
    platforms: ["Web"],
    recommendedFor: "Backend developers deploying APIs",
  },
  {
    id: "render",
    name: "Render",
    description:
      "Simple, generous free cloud platform. Deploy web services, static sites, cron jobs, and PostgreSQL databases for free. Zero DevOps required.",
    url: "https://render.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["hosting", "backend", "postgres", "static", "cron", "free-tier"],
    platforms: ["Web"],
    recommendedFor: "Developers who want Heroku-like simplicity for free",
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages + Workers",
    description:
      "Unlimited free hosting for static sites and edge functions. Cloudflare Workers is a powerful serverless platform on the edge. Extremely generous free tier.",
    url: "https://pages.cloudflare.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "hosting",
      "edge",
      "serverless",
      "static",
      "cloudflare",
      "free-tier",
    ],
    platforms: ["Web"],
    recommendedFor: "Developers who want free, globally fast edge hosting",
  },
  {
    id: "mongodb-atlas",
    name: "MongoDB Atlas",
    description:
      "Free 512MB MongoDB cluster hosted in the cloud. Good for quick prototypes and small apps.",
    url: "https://www.mongodb.com/cloud/atlas/register",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "mongodb", "nosql", "free"],
    platforms: ["Web"],
    recommendedFor: "Node.js developers and quick prototypes",
  },
  {
    id: "planetscale",
    name: "PlanetScale",
    description:
      "Serverless MySQL platform with a branching workflow like Git. Hobby free tier. Zero-downtime schema migrations built in.",
    url: "https://planetscale.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["database", "mysql", "serverless", "cloud", "branching"],
    platforms: ["Web"],
    recommendedFor: "Developers building scalable MySQL-backed applications",
  },
  {
    id: "upstash",
    name: "Upstash",
    description:
      "Serverless Redis and Kafka with a generous free tier. Perfect for caching, rate-limiting, and message queues in serverless Next.js apps.",
    url: "https://upstash.com/",
    category: "cloud",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["redis", "kafka", "serverless", "cache", "free-tier"],
    platforms: ["Web"],
    recommendedFor:
      "Serverless apps needing Redis without managing infrastructure",
  },

  // ─────────────────────────────────────────
  // CI/CD & DEVOPS
  // ─────────────────────────────────────────
  {
    id: "github-actions",
    name: "GitHub Actions",
    description:
      "CI/CD built directly into GitHub. Automate tests, builds, deployments, and any workflow on push, PR, or schedule. Free for public repos, 2,000 min/month for private.",
    url: "https://github.com/features/actions",
    category: "devops_cicd",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ci/cd", "automation", "github", "workflow", "docker", "popular"],
    platforms: ["Web"],
    recommendedFor: "Any project hosted on GitHub — set it up immediately",
    isHighlighted: true,
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "Containerize your applications so they run identically everywhere. Docker Desktop is free for personal use. The foundation of modern DevOps.",
    url: "https://www.docker.com/",
    category: "devops_cicd",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["containers", "devops", "deployment", "docker-compose", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Every developer — containers solve environment issues forever",
    isHighlighted: true,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    description:
      "The most popular open-source CI/CD automation server. Highly extensible with 1,800+ plugins. Self-hosted and completely free.",
    url: "https://www.jenkins.io/",
    category: "devops_cicd",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ci/cd", "automation", "open-source", "self-hosted", "enterprise"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Teams who want full control over their CI/CD pipeline",
  },
  {
    id: "act",
    name: "Act",
    description:
      "Run your GitHub Actions locally. Debug your CI pipelines without pushing commits. Free and open-source — essential for GitHub Actions power users.",
    url: "https://github.com/nektos/act",
    category: "devops_cicd",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ci/cd", "github-actions", "local", "debugging", "open-source"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want to test GitHub Actions locally",
  },
  {
    id: "coolify",
    name: "Coolify",
    description:
      "Open-source self-hosted Heroku/Vercel alternative. Deploy any app on your own VPS with one click. PostgreSQL, Redis, Docker, Git — all free to self-host.",
    url: "https://coolify.io/",
    category: "devops_cicd",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "self-hosted",
      "deployment",
      "heroku-alternative",
      "vps",
      "open-source",
    ],
    platforms: ["Linux"],
    recommendedFor:
      "Developers with a VPS who want free Heroku-like deployments",
  },

  // ─────────────────────────────────────────
  // TESTING
  // ─────────────────────────────────────────
  {
    id: "jest",
    name: "Jest",
    description:
      "The most popular JavaScript testing framework. Unit tests, mocking, code coverage out of the box. Works with React, Node.js, TypeScript, and more.",
    url: "https://jestjs.io/",
    category: "testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "testing",
      "javascript",
      "unit-testing",
      "mocking",
      "react",
      "popular",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "JavaScript/TypeScript developers — the default testing choice",
  },
  {
    id: "vitest",
    name: "Vitest",
    description:
      "Next-generation testing framework built on Vite. Blazing fast, native ESM support, Jest-compatible API. The modern replacement for Jest in Vite projects.",
    url: "https://vitest.dev/",
    category: "testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["testing", "javascript", "vite", "fast", "unit-testing", "modern"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Vite/React developers who want faster tests than Jest",
  },
  {
    id: "playwright",
    name: "Playwright",
    description:
      "Microsoft's end-to-end testing framework. Test web apps in Chromium, Firefox, and WebKit. The most reliable E2E tool available, completely free.",
    url: "https://playwright.dev/",
    category: "testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["testing", "e2e", "browser", "automation", "microsoft", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Web developers who need reliable end-to-end testing",
    isHighlighted: true,
  },
  {
    id: "cypress",
    name: "Cypress",
    description:
      "Developer-friendly E2E testing with live browser preview. Watch your tests run in real time, time-travel through steps, and debug visually. Free open-source tier.",
    url: "https://www.cypress.io/",
    category: "testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["testing", "e2e", "browser", "visual", "javascript", "popular"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Frontend developers who want visual, interactive E2E testing",
  },
  {
    id: "pytest",
    name: "pytest",
    description:
      "The standard Python testing framework. Simple, powerful, with fixtures, parameterization, and a massive plugin ecosystem. Free and open-source.",
    url: "https://pytest.org/",
    category: "testing",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["testing", "python", "unit-testing", "fixtures", "open-source"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Python developers — the only testing framework you need",
  },

  // ─────────────────────────────────────────
  // SECURITY
  // ─────────────────────────────────────────
  {
    id: "snyk",
    name: "Snyk",
    description:
      "Finds and fixes security vulnerabilities in your code, dependencies, and Docker images. Free tier scans unlimited public repos. Integrates with GitHub and VS Code.",
    url: "https://snyk.io/",
    category: "security",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["security", "vulnerabilities", "dependencies", "docker", "sca"],
    platforms: ["Web", "VS Code"],
    recommendedFor: "Every developer — scan your dependencies before you ship",
    isHighlighted: true,
  },
  {
    id: "burpsuite-community",
    name: "Burp Suite Community",
    description:
      "The industry standard for web app penetration testing. Free community edition includes the intercepting proxy, scanner basics, and essential hacking tools.",
    url: "https://portswigger.net/burp/communitydownload",
    category: "security",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "security",
      "penetration-testing",
      "proxy",
      "hacking",
      "web-security",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Cybersecurity students and web app penetration testers",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    description:
      "The world's most popular network protocol analyzer. Capture and inspect every packet on a network. Essential for networking and cybersecurity courses.",
    url: "https://www.wireshark.org/",
    category: "security",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "security",
      "networking",
      "packet-analysis",
      "protocol",
      "open-source",
    ],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Networking students and security researchers",
  },
  {
    id: "nmap",
    name: "Nmap",
    description:
      "The definitive network scanning tool. Discover hosts, open ports, running services, and OS details. Free, open-source, and used by every security professional.",
    url: "https://nmap.org/",
    category: "security",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["security", "networking", "port-scanning", "recon", "open-source"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Cybersecurity students learning network reconnaissance",
  },
  {
    id: "hashicorp-vault",
    name: "HashiCorp Vault",
    description:
      "Securely manage secrets, API keys, passwords, and certificates. Industry-standard secrets management tool. Free open-source version available.",
    url: "https://www.vaultproject.io/",
    category: "security",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["secrets", "security", "devops", "api-keys", "open-source"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Developers who need to manage secrets and credentials in production",
  },

  // ─────────────────────────────────────────
  // BROWSER DEVTOOLS & EXTENSIONS
  // ─────────────────────────────────────────
  {
    id: "chrome-devtools",
    name: "Chrome DevTools",
    description:
      "Built into every Chrome and Edge browser. Inspect HTML/CSS, debug JavaScript, monitor network requests, analyze performance, and profile memory. Always free.",
    url: "https://developer.chrome.com/docs/devtools/",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "browser",
      "debugging",
      "javascript",
      "network",
      "performance",
      "built-in",
    ],
    platforms: ["Web"],
    recommendedFor: "Every web developer — it's already in your browser",
    isHighlighted: true,
  },
  {
    id: "react-devtools",
    name: "React Developer Tools",
    description:
      "Official browser extension for debugging React apps. Inspect the component tree, view props and state, profile rendering performance. Essential for React devs.",
    url: "https://react.dev/learn/react-developer-tools",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["browser", "extension", "react", "debugging", "official"],
    platforms: ["Web"],
    recommendedFor:
      "Every React developer — install it before writing your first component",
  },
  {
    id: "wappalyzer",
    name: "Wappalyzer",
    description:
      "Instantly detects what technologies any website is built with — frameworks, databases, CDNs, analytics, CMS, and more. Great for learning and competitive research.",
    url: "https://www.wappalyzer.com/",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["browser", "extension", "research", "tech-stack", "detection"],
    platforms: ["Web"],
    recommendedFor:
      "Developers who want to see what tech stack any website uses",
  },
  {
    id: "json-viewer",
    name: "JSON Viewer",
    description:
      "Browser extension that formats and colorizes raw JSON in the browser. Makes API responses and JSON files readable. Free and essential for API work.",
    url: "https://github.com/tulios/json-viewer",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["browser", "extension", "json", "api", "formatting"],
    platforms: ["Web"],
    recommendedFor: "Every developer working with APIs and JSON data",
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    description:
      "Google's built-in web performance auditing tool. Scores your site on performance, accessibility, SEO, and best practices. Available in Chrome DevTools.",
    url: "https://developer.chrome.com/docs/lighthouse/",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "browser",
      "performance",
      "accessibility",
      "seo",
      "auditing",
      "google",
    ],
    platforms: ["Web"],
    recommendedFor: "Web developers optimizing performance and accessibility",
  },
  {
    id: "axe-devtools",
    name: "axe DevTools",
    description:
      "Browser extension that automatically finds accessibility issues on any web page. Identifies WCAG violations with clear explanations and fix guidance.",
    url: "https://www.deque.com/axe/devtools/",
    category: "browser_devtools",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["browser", "accessibility", "wcag", "a11y", "testing"],
    platforms: ["Web"],
    recommendedFor: "Web developers building accessible applications",
  },

  // ─────────────────────────────────────────
  // AI TOOLS
  // ─────────────────────────────────────────
  {
    id: "claude",
    name: "Claude (Anthropic)",
    description:
      "Excellent AI assistant for code explanation, debugging, and learning concepts. One of the most capable coding models available. Free tier available.",
    url: "https://claude.ai/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "code", "debugging", "learning", "popular"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor:
      "Code explanation, debugging, understanding complex concepts",
    isHighlighted: true,
  },
  {
    id: "claude-code",
    name: "Claude Code",
    description:
      "Anthropic's agentic CLI coding tool. Run it in your terminal and it reads your entire codebase, writes code, runs tests, and makes multi-file changes autonomously.",
    url: "https://claude.ai/code",
    category: "ai",
    isFree: false,
    hasFreeStudentPlan: false,
    tags: ["ai", "agentic", "cli", "terminal", "coding-agent", "anthropic"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor: "Developers who want a powerful autonomous coding agent",
    isHighlighted: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "AI code completion built into VS Code and JetBrains. Suggests whole functions, writes tests, and explains code inline. Free for verified students.",
    url: "https://github.com/features/copilot",
    category: "ai",
    isFree: false,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://education.github.com/pack",
    tags: ["ai", "code-completion", "vscode", "jetbrains", "github", "popular"],
    platforms: ["VS Code", "JetBrains", "Visual Studio"],
    recommendedFor:
      "Students get it free via GitHub Student Pack — get it immediately",
    isHighlighted: true,
  },
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    description:
      "The AI that started the revolution. Free tier with GPT-4o mini. Excellent for brainstorming, explaining concepts, debugging, and writing boilerplate code.",
    url: "https://chat.openai.com/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "chatbot", "code", "brainstorming", "popular"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor:
      "General coding help, concept explanations, and brainstorming",
  },
  {
    id: "gemini",
    name: "Gemini (Google)",
    description:
      "Google's free AI assistant. Deep integration with Google Search, Docs, and Drive. Gemini 2.0 Flash is free and highly capable for coding tasks.",
    url: "https://gemini.google.com/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "google", "chatbot", "code", "multimodal"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor:
      "Developers in the Google ecosystem and those wanting free AI",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description:
      "AI-powered search engine that gives cited answers. Find documentation, Stack Overflow-style answers, and technical explanations with sources. Free tier available.",
    url: "https://www.perplexity.ai/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "search", "research", "citations", "documentation"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "Technical research and finding documentation quickly",
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    description:
      "Generate React UI components from descriptions. Free tier available. Huge time saver for frontend work.",
    url: "https://v0.dev/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "ui generation", "react", "vercel"],
    platforms: ["Web"],
    recommendedFor: "Frontend developers generating UI components quickly",
  },
  {
    id: "codeium",
    name: "Codeium",
    description:
      "Free AI code completion for VS Code and JetBrains. Good alternative to Copilot if you don't have the Student Pack.",
    url: "https://codeium.com/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "code completion", "free", "alternative"],
    platforms: ["VS Code", "JetBrains", "Neovim"],
    recommendedFor: "Free Copilot alternative",
  },
  {
    id: "continue-dev",
    name: "Continue.dev",
    description:
      "Free, open-source AI coding assistant for VS Code and JetBrains. Bring your own API key (works with Claude, GPT-4, local models via Ollama). 20k+ GitHub stars.",
    url: "https://continue.dev/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "open-source", "vscode", "bring-your-own-key", "local-models"],
    platforms: ["VS Code", "JetBrains"],
    recommendedFor: "Developers who want AI coding help without vendor lock-in",
  },
  {
    id: "cline",
    name: "Cline",
    description:
      "Open-source autonomous coding agent for VS Code. Plan mode + act mode, can read files, run terminal commands, and make large multi-file changes. BYOK.",
    url: "https://cline.bot/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "ai",
      "agentic",
      "open-source",
      "vscode",
      "autonomous",
      "bring-your-own-key",
    ],
    platforms: ["VS Code"],
    recommendedFor:
      "Developers who want Claude Code-like power as a free VS Code extension",
  },
  {
    id: "aider",
    name: "Aider",
    description:
      "Open-source AI pair programming in your terminal. Works with any git repo, auto-commits every change with a descriptive message, supports all major LLMs. BYOK.",
    url: "https://aider.chat/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "terminal", "cli", "git", "open-source", "pair-programming"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Terminal developers who want AI coding with full git integration",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description:
      "AI code completion that learns your codebase and team patterns. Supports 30+ languages. Basic free tier available. Can run locally for full privacy.",
    url: "https://www.tabnine.com/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "code-completion", "privacy", "local", "team-patterns"],
    platforms: ["VS Code", "JetBrains", "Neovim", "Vim"],
    recommendedFor: "Teams who want AI completion with privacy controls",
  },
  {
    id: "ollama",
    name: "Ollama",
    description:
      "Run AI models locally on your own machine — completely free and private. Llama 3, DeepSeek, Mistral, CodeLlama, and more. No API key, no internet needed.",
    url: "https://ollama.com/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["ai", "local", "open-source", "privacy", "llm", "offline"],
    platforms: ["Windows", "Mac", "Linux"],
    recommendedFor:
      "Developers who want AI coding without sending data to the cloud",
    isHighlighted: true,
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description:
      "Browser-based AI coding environment by StackBlitz. Describe an app in plain English and Bolt builds, runs, and deploys it — no local setup whatsoever.",
    url: "https://bolt.new/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ai", "browser", "vibe-coding", "deployment", "popular"],
    platforms: ["Web"],
    recommendedFor: "Rapid prototyping and AI-first web app building",
    isHighlighted: true,
  },
  {
    id: "lovable",
    name: "Lovable",
    description:
      "AI-powered web app builder. Describe what you want in chat and Lovable generates a full React app with Supabase backend. Free tier available.",
    url: "https://lovable.dev/",
    category: "ai",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["editor", "ai", "no-code", "react", "supabase", "vibe-coding"],
    platforms: ["Web"],
    recommendedFor: "Non-developers and rapid idea validation",
  },

  // ─────────────────────────────────────────
  // DESIGN
  // ─────────────────────────────────────────
  {
    id: "figma",
    name: "Figma",
    description:
      "Professional UI design tool. Free education plan for students. The industry standard for UI/UX design.",
    url: "https://figma.com/",
    category: "design",
    isFree: false,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://www.figma.com/education/",
    tags: ["design", "ui", "ux", "prototyping", "popular"],
    platforms: ["Web", "Windows", "Mac"],
    recommendedFor: "UI/UX design, wireframing, prototyping",
    isHighlighted: true,
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    description:
      "Free online whiteboard for sketching UI ideas, system diagrams, and architecture. Hand-drawn feel.",
    url: "https://excalidraw.com/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["whiteboard", "diagrams", "architecture", "free"],
    platforms: ["Web"],
    recommendedFor: "System design interviews and architecture planning",
  },
  {
    id: "drawio",
    name: "diagrams.net (draw.io)",
    description:
      "Free online diagramming tool. Database schemas, flowcharts, system designs. Works offline too.",
    url: "https://app.diagrams.net/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["diagrams", "flowcharts", "er-diagram", "free"],
    platforms: ["Web", "Windows", "Mac", "Linux"],
    recommendedFor: "Database design, system design, project planning",
  },
  {
    id: "sketch",
    name: "Sketch",
    description:
      "Mac-only vector design tool beloved by UI/UX professionals before Figma took over. Still widely used in Apple-ecosystem teams.",
    url: "https://www.sketch.com/",
    category: "design",
    isFree: false,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://www.sketch.com/store/education/",
    tags: ["design", "ui", "ux", "vector", "macos"],
    platforms: ["Mac"],
    recommendedFor: "Mac-based UI/UX designers",
  },
  {
    id: "penpot",
    name: "Penpot",
    description:
      "The open-source alternative to Figma. Self-hostable, browser-based, and built on open standards like SVG. Fully free.",
    url: "https://penpot.app/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "design",
      "ui",
      "ux",
      "open-source",
      "self-hosted",
      "figma-alternative",
    ],
    platforms: ["Web"],
    recommendedFor: "Designers who want a free, open-source Figma alternative",
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Beginner-friendly graphic design platform. Great for social media graphics, presentations, and marketing materials — not for UI/UX work.",
    url: "https://www.canva.com/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["design", "graphics", "presentations", "beginner-friendly"],
    platforms: ["Web", "Windows", "Mac"],
    recommendedFor: "Non-designers and quick graphic creation",
  },
  {
    id: "miro",
    name: "Miro",
    description:
      "Collaborative online whiteboard for brainstorming, user journey mapping, and team workshops. Infinite canvas with tons of templates.",
    url: "https://miro.com/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["whiteboard", "collaborative", "brainstorming", "diagrams"],
    platforms: ["Web", "Windows", "Mac"],
    recommendedFor: "Team collaboration, user story mapping, brainstorming",
  },
  {
    id: "framer",
    name: "Framer",
    description:
      "Design and publish production-ready websites directly — no code needed. Bridges the gap between design and real web development.",
    url: "https://www.framer.com/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["design", "no-code", "website", "prototyping", "publishing"],
    platforms: ["Web"],
    recommendedFor: "Designers who want to ship real websites without code",
  },
  {
    id: "coolors",
    name: "Coolors",
    description:
      "Free color palette generator. Hit spacebar and it generates beautiful color schemes instantly. Export palettes, check contrast ratios, and explore trending palettes.",
    url: "https://coolors.co/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["design", "colors", "palette", "accessibility", "free"],
    platforms: ["Web"],
    recommendedFor:
      "Developers who struggle with picking cohesive color schemes",
  },
  {
    id: "undraw",
    name: "unDraw",
    description:
      "Free, open-source illustrations for any project. Change the accent color to match your brand. MIT licensed — use in commercial projects with no attribution required.",
    url: "https://undraw.co/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["design", "illustrations", "free", "open-source", "svg"],
    platforms: ["Web"],
    recommendedFor:
      "Developers who want high-quality free illustrations for their apps",
  },
  {
    id: "fontawesome",
    name: "Font Awesome",
    description:
      "The most popular icon library. 2,000+ free icons in multiple styles. Used on millions of websites. Free tier covers 99% of use cases.",
    url: "https://fontawesome.com/",
    category: "design",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["design", "icons", "free", "popular", "web"],
    platforms: ["Web"],
    recommendedFor: "Every web developer who needs icons",
  },

  // ─────────────────────────────────────────
  // PRODUCTIVITY
  // ─────────────────────────────────────────
  {
    id: "notion",
    name: "Notion",
    description:
      "All-in-one notes, project management, and documentation. Free for students with university email.",
    url: "https://notion.so/students",
    category: "productivity",
    isFree: false,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://notion.so/students",
    tags: ["notes", "productivity", "project management", "student"],
    platforms: ["Web", "Windows", "Mac", "iOS", "Android"],
    recommendedFor: "Note-taking, project planning, study guides",
    isHighlighted: true,
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description:
      "Free local-first note taking app with linked notes. Great for building a personal knowledge base for CS topics.",
    url: "https://obsidian.md/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["notes", "knowledge base", "markdown", "free"],
    platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Building CS study notes and personal documentation",
  },
  {
    id: "loom",
    name: "Loom",
    description:
      "Free screen recording with instant sharing link. Essential for remote work async communication.",
    url: "https://loom.com/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: true,
    studentPlanUrl: "https://www.loom.com/education",
    tags: ["screen recording", "remote work", "async", "communication"],
    platforms: ["Web", "Windows", "Mac"],
    recommendedFor: "Remote work async communication",
  },
  {
    id: "linear",
    name: "Linear",
    description:
      "Blazing fast issue tracker built for modern software teams. Keyboard-first, minimal, and opinionated — the tool serious devs actually enjoy using.",
    url: "https://linear.app/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["project management", "issue tracker", "teams", "dev"],
    platforms: ["Web", "Windows", "Mac"],
    recommendedFor: "Dev teams managing sprints, bugs, and feature work",
  },
  {
    id: "trello",
    name: "Trello",
    description:
      "Simple kanban-style board for visual project management. Drag-and-drop cards across columns to track tasks and workflows.",
    url: "https://trello.com/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["kanban", "project management", "tasks", "visual"],
    platforms: ["Web", "Windows", "Mac", "iOS", "Android"],
    recommendedFor: "Visual project tracking and team workflows",
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "The go-to messaging platform for dev teams. Channels, threads, integrations with GitHub, Jira, and everything else your team uses.",
    url: "https://slack.com/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["communication", "messaging", "teams", "integrations"],
    platforms: ["Web", "Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Team communication and dev workflow integrations",
  },
  {
    id: "discord",
    name: "Discord",
    description:
      "Originally for gamers, now a massive hub for developer communities, open-source projects, and study groups. Free forever.",
    url: "https://discord.com/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["communication", "community", "voice", "free"],
    platforms: ["Web", "Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor:
      "Developer communities, study groups, and open-source projects",
  },
  {
    id: "todoist",
    name: "Todoist",
    description:
      "Clean, powerful task manager with natural language input, recurring tasks, and priority levels. Great for managing study schedules and project deadlines.",
    url: "https://todoist.com/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["tasks", "todo", "productivity", "planning"],
    platforms: ["Web", "Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Personal task management and deadline tracking",
  },
  {
    id: "toggl",
    name: "Toggl Track",
    description:
      "Free time tracking tool. Start a timer, tag what you're working on, and get reports on where your hours actually go.",
    url: "https://toggl.com/track/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["time tracking", "productivity", "focus", "reports"],
    platforms: ["Web", "Windows", "Mac", "iOS", "Android"],
    recommendedFor: "Tracking study sessions and freelance work hours",
  },
  {
    id: "raindrop",
    name: "Raindrop.io",
    description:
      "Beautiful bookmark manager to organize articles, docs, repos, and resources into collections. Never lose a useful link again.",
    url: "https://raindrop.io/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["bookmarks", "organization", "resources", "research"],
    platforms: ["Web", "Windows", "Mac", "iOS", "Android"],
    recommendedFor: "Organizing learning resources, docs, and references",
  },
  {
    id: "readwise",
    name: "Readwise Reader",
    description:
      "Read-it-later app with AI summaries, highlighting, and daily review. Save articles, docs, PDFs, and YouTube transcripts. Great for keeping up with tech content.",
    url: "https://read.readwise.io/",
    category: "productivity",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["reading", "articles", "highlights", "ai-summaries", "learning"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "Developers who want to stay up to date with tech articles",
  },

  // ─────────────────────────────────────────
  // LEARNING
  // ─────────────────────────────────────────
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    description:
      "The single most important developer resource on the internet. Every bug you'll ever hit has probably been answered here. Free forever.",
    url: "https://stackoverflow.com/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["q&a", "community", "debugging", "answers", "popular"],
    platforms: ["Web"],
    recommendedFor: "Every developer — bookmark it, it's your second brain",
    isHighlighted: true,
  },
  {
    id: "devdocs",
    name: "DevDocs",
    description:
      "All developer documentation in one searchable place — offline capable. JavaScript, Python, React, Node, CSS, and 100+ more. Completely free.",
    url: "https://devdocs.io/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["documentation", "reference", "offline", "search", "free"],
    platforms: ["Web"],
    recommendedFor: "Developers who need fast access to multiple docs at once",
  },
  {
    id: "roadmapsh",
    name: "roadmap.sh",
    description:
      "Community-built visual roadmaps for every developer path: frontend, backend, DevOps, AI/ML, cybersecurity, and more. See exactly what to learn and in what order.",
    url: "https://roadmap.sh/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["roadmap", "learning path", "career", "visual", "community"],
    platforms: ["Web"],
    recommendedFor: "Students figuring out what to learn and in what order",
    isHighlighted: true,
  },
  {
    id: "codepen",
    name: "CodePen",
    description:
      "Online sandbox for HTML, CSS, and JavaScript. Write code and see the result instantly. Great for experimenting, showcasing work, and learning from others.",
    url: "https://codepen.io/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["sandbox", "html", "css", "javascript", "community", "showcase"],
    platforms: ["Web"],
    recommendedFor: "Frontend developers experimenting and building demos",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    description:
      "The most popular platform for interview prep and competitive programming. 2,500+ problems, company-specific question lists, and mock interviews. Free tier is sufficient.",
    url: "https://leetcode.com/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "competitive programming",
      "interview prep",
      "algorithms",
      "data structures",
    ],
    platforms: ["Web"],
    recommendedFor:
      "Students preparing for FAANG and top Egyptian company interviews",
    isHighlighted: true,
  },
  {
    id: "codeforces",
    name: "Codeforces",
    description:
      "The biggest competitive programming platform with daily contests. Popular in Egyptian universities. Your rating becomes a hiring signal for top companies.",
    url: "https://codeforces.com/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "competitive programming",
      "contests",
      "algorithms",
      "egypt-popular",
    ],
    platforms: ["Web"],
    recommendedFor:
      "Egyptian CS students — very popular in Egyptian universities",
    isHighlighted: true,
  },
  {
    id: "icpc",
    name: "ICPC / ECPC",
    description:
      "The International/Egyptian Collegiate Programming Contest. The most prestigious competitive programming competition. Trains you in algorithms at an extreme level.",
    url: "https://icpc.global/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["competitive programming", "egypt", "icpc", "ecpc", "competition"],
    platforms: ["Web"],
    recommendedFor:
      "Egyptian students who want the most impressive CS achievement possible",
  },
  {
    id: "exercism",
    name: "Exercism",
    description:
      "Free code practice with human mentorship. 74+ language tracks, each with structured exercises reviewed by experienced developers. 100% free.",
    url: "https://exercism.org/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["practice", "mentorship", "exercises", "languages", "free"],
    platforms: ["Web"],
    recommendedFor:
      "Developers learning a new programming language with feedback",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    description:
      "Coding challenge platform used by companies for technical screening. Free certificates in Python, SQL, JavaScript, and more that carry weight with Egyptian employers.",
    url: "https://www.hackerrank.com/",
    category: "learning",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: [
      "coding challenges",
      "certificates",
      "interview prep",
      "sql",
      "python",
    ],
    platforms: ["Web"],
    recommendedFor:
      "Students building a verifiable skills profile for job applications",
  },

  // ─────────────────────────────────────────
  // VPN
  // ─────────────────────────────────────────
  {
    id: "protonvpn",
    name: "ProtonVPN",
    description:
      "The most trustworthy free VPN. Swiss-based, strict no-logs policy, open source. Free tier with no data limit.",
    url: "https://protonvpn.com/",
    category: "vpn",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["vpn", "privacy", "security", "free", "trusted"],
    platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Secure browsing, accessing geo-restricted content",
    isHighlighted: true,
  },
  {
    id: "windscribe",
    name: "Windscribe",
    description:
      "Free VPN with 10GB/month. Good privacy policy. Useful when ProtonVPN is slow.",
    url: "https://windscribe.com/",
    category: "vpn",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["vpn", "free", "10gb"],
    platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Supplementary VPN when main VPN is slow",
  },
  {
    id: "cloudflare-warp",
    name: "Cloudflare WARP (1.1.1.1)",
    description:
      "Cloudflare's free VPN/DNS accelerator. Faster and more reliable than most free VPNs. Protects DNS queries and improves connection speed. Completely free.",
    url: "https://1.1.1.1/",
    category: "vpn",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["vpn", "dns", "cloudflare", "free", "fast"],
    platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
    recommendedFor: "Faster browsing and DNS privacy — lighter than a full VPN",
  },

  // ─────────────────────────────────────────
  // PAYMENT (EGYPT-SPECIFIC)
  // ─────────────────────────────────────────
  {
    id: "payoneer",
    name: "Payoneer",
    description:
      "Most popular way for Egyptian freelancers to receive international payments. Links to Egyptian bank accounts.",
    url: "https://payoneer.com/",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "freelance", "international", "egypt", "popular"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "Receiving payments from international clients",
    isHighlighted: true,
  },
  {
    id: "wise",
    name: "Wise (formerly TransferWise)",
    description:
      "Cheaper international transfers than banks. Good for sending money or receiving from some clients.",
    url: "https://wise.com/",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "transfer", "international", "cheap"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "International money transfers at lower fees",
  },
  {
    id: "instapay",
    name: "InstaPay Egypt",
    description:
      "Egypt's instant domestic payment system. Free transfers between Egyptian banks. Used for local payments.",
    url: "https://www.instapay.eg/",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "egypt", "local", "instant", "free"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "Local Egyptian payments and transfers",
  },
  {
    id: "fawry",
    name: "Fawry",
    description:
      "Egypt's most popular payment network. Used to pay for Vodafone, internet bills, and online services at 200,000+ locations. The payment backbone of Egypt.",
    url: "https://www.fawry.com/",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "egypt", "local", "bills", "popular"],
    platforms: ["Web", "iOS", "Android"],
    recommendedFor: "Paying Egyptian service bills and local transactions",
  },
  {
    id: "vodafone-cash",
    name: "Vodafone Cash",
    description:
      "Mobile wallet for Egyptian Vodafone subscribers. Send money, receive payments, pay bills. Useful for receiving small local freelance payments from Egyptian clients.",
    url: "https://web.vodafone.com.eg/ar/vodafone-cash",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "egypt", "mobile-wallet", "vodafone", "local"],
    platforms: ["iOS", "Android"],
    recommendedFor: "Receiving local payments from Egyptian clients quickly",
  },
  {
    id: "orange-money",
    name: "Orange Money Egypt",
    description:
      "Orange Egypt's mobile wallet. Similar to Vodafone Cash — send money, pay bills, receive local payments. Pairs well with Orange internet packages.",
    url: "https://www.orange.eg/en/services/orange-financial-services",
    category: "payment",
    isFree: true,
    hasFreeStudentPlan: false,
    tags: ["payment", "egypt", "mobile-wallet", "orange", "local"],
    platforms: ["iOS", "Android"],
    recommendedFor: "Orange subscribers handling local transactions",
  },
];
