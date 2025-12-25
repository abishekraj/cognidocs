# Security Policy

We take security seriously and follow coordinated disclosure practices.

## Supported Versions
We support the latest stable releases using semver:
| Version | Supported |
|--------|-----------|
| 1.x    | ✅        |
| <1.0   | ❌        |

Only the latest minor of 1.x receives security updates. Node.js LTS versions are supported.

## Reporting a Vulnerability
Please use GitHub’s Private Vulnerability Reporting from the repository’s Security tab to contact maintainers privately. Include:
- A clear description, impact, and affected versions
- Steps to reproduce (PoC), logs, and configuration details
- Suggested remediation if known

If private reporting is unavailable, open a draft Security Advisory from the Security tab. Do not file public issues for sensitive reports.

## Coordinated Disclosure
- Acknowledgement: within 3 business days
- Triage & initial assessment: within 7 days
- Fix target (may vary by complexity):
  - Critical: 14 days
  - High: 30 days
  - Medium: 60 days
  - Low: Best effort
We will publish a security advisory and release notes once a fix is available. We may request an embargo until patched.

## Scope
In scope:
- CLI and packages under the @cognidocs scope
- Documentation generation logic, parsers, and build output

Out of scope (unless they cause security impact):
- Demo examples, themes, and sample content
- Third‑party dependencies’ own vulnerabilities (we track and patch via updates)
- Misconfigurations outside default settings

## Severity & IDs
We classify severity using CVSS v3+ guidelines. If appropriate, we will request a CVE via GitHub Security Advisories.

## Secure Development & Updates
- Dependabot alerts and security updates are enabled; grouped updates reduce PR noise
- Code scanning with CodeQL on push, PRs to protected branches, and weekly schedules
- Secret scanning alerts enabled to catch leaked credentials

## Best Practices for Reporters
- Provide minimal, reproducible PoC without damaging data
- Avoid exploitation beyond confirmation
- Do not test against systems you don’t own or have permission to assess

## Credit
We credit reporters in advisories and release notes (unless anonymity is requested). No bug bounty program is currently offered.

## Contact & Follow‑ups
We will communicate remediation status and timelines via the private report thread in GitHub’s Security tab. After fix release, we’ll share mitigation details and upgrade guidance.
