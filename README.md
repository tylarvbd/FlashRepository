**Swag Labs Automation – Playwright BDD**

This project automates the Swag Labs demo e‑commerce site using Playwright and BDD (Behaviour‑Driven Development). 
It leverages the playwright-bdd package to integrate Gherkin feature files with Playwright’s native test runner.

🚀 Quick Start
1. Prerequisites - Node.js (v16 or later) 
2. Clone the Repository (https://github.com/tylarvbd/FlashRepository.git)
3. Install Dependencies - (npm install)
4. Install Playwright Browsers (npx playwright install)
5. Install only Playwright-BDD: (npm i -D playwright-bdd)


How It Works
Feature files (.feature) describe scenarios in plain English.

Step definitions (.steps.ts) contain the actual automation code.

**Generate and run the tests:** - (npx bddgen && npx playwright test) playwright-bdd automatically generates Playwright spec files (.spec.js) in the features-gen/ folder.

Playwright then executes those generated specs as native tests.

You never need to write or edit the generated spec files – they are temporary artefacts.

📊 Viewing Test Reports
After a test run, Playwright generates an HTML report.
(npx playwright show-report)
This opens a detailed report with screenshots, traces, and step‑by‑step execution for each test.
