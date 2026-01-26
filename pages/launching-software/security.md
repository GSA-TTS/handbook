---
title: Security
cSpell: ignore Kaplan,Bennetts,scanjs
---

## General Security Standards

In the Federal government, the principal law governing the security of
information systems is the Federal Information Security Modernization Act
(FISMA). For more information on FISMA, check out the
[FISMA Implementation Project ](https://csrc.nist.gov/projects/risk-management),
which will help you stay up to date and in the know about all things FISMA. If
you're inclined to see TTS' interpretation of FISMA from a user-center approach,
take a look at a previous project from the TTS Tech Portfolio and cloud.gov
known as [FISMA Ready](https://github.com/fisma-ready/introduction).

Most of the security practices have been integrated into the
[ATO]({% page "/launching-software/lifecycle/#atos" %}) portion of this guide
and summarized in this
[slide deck](https://docs.google.com/presentation/d/1IJurX7Jc5XAQqmJSZtGZeJ8pk3IMfEIMRh1frmCpHlA/edit#slide=id.g601ed6ebc1_0_496)
from one of the 18F engineers. Here are a few pointers to get you started:

- DevOps isn't a team at TTS, but a skillset. We are all responsible for the
  security and operations of our systems.
- The security of our users' information is paramount, even moreso when it is
  personally identifiable information (PII). The types of information your
  system may process helps determine the type of ATOs available to you and
  [whether or not you will need to conduct a Privacy Impact Assessment
  (PIA)]({% page "/launching-software/privacy/" %}).
- Be wary of systems that:
  - trust un-sanitized information from the internet
  - do not encrypt data, both at rest and in transit
  - may be subject to privilege escalation
  - other items from the
    [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)

## Security Scanning

Security scanning is separated into a few categories:

- [Static](#static-analysis): Static Code Analysis (SCA) is similar to the
  [linters](<https://en.wikipedia.org/wiki/Lint_(software)>) that many
  developers use on a day-to-day basis. While many linters focus on stylistic
  concerns, we are interested in those tools that target security flaws.
- [Dynamic](#dynamic-scanning)
  - Active
    - Antivirus and malware scanning
    - Infrastructure-level scan (done at the cloud.gov level)
    - Penetration test
  - Passive: Monitors network traffic, but does not generate its own traffic.

### Alerts

Alerts come in one of four categorizations:

- **Low** and **Medium** can be resolved after the ATO is granted.
- **High** and **Critical** must be resolved before the ATO is granted.

Any false positives should be documented as such, through an "ignore" file (e.g.
with a `note` in
[Brakeman](http://brakemanscanner.org/docs/ignoring_false_positives/)) or with
your ATO-related documentation.

### ATO Scanning

**Getting ready to scan**

The system's technical stack needs to be relatively stable before authorization.

If, during testing, the system performs:

- user authentication or authorization
- back-end administrative functions
- encryption

...then those features must be _complete_ before an authorization will be given.
Note that the use of common web frameworks and HTTPS resolves these issues in
almost every case.

Ensure that your site is scannable by automated tools. For example, if you have
a single-page app use the pushState to make site URLs friendly to automated
tools.

Lastly, make sure the `README` file in your repo is fully up to date and clearly
explains what the system does and why at a high level. You should also include
the above information in your `README`.

**Greybox testing**

Once you are ready, the
[GSA OCISO](https://insite.gsa.gov/portal/content/527517) team will start both
automated and manual scanning and testing. This includes:

- [web vulnerability scanning](#dynamic-scanning) on the front-end
- [static code analysis](#static-analysis) on the default branch of your repo
- for higher FISMA levels, penetration testing by third party security
  consultants.

For greybox testing, the testing team has significant (but not necessarily
complete) knowledge of how the system works, as opposed to black box testing,
where they have zero knowledge, or white box testing, where they have complete
knowledge.

All of these tests must be conducted on an environment that is _identical to
production_ and ideally is set up specifically for this scanning process. This
also requires creating a stable `release` branch. You can continue working on
`main` and deploy builds from `main` to a development environment.

**Expectation management**

Overall, if _no_ vulnerabilities are found, this process has been taking
approximately 2 weeks for test preparation and [System Security
Plan]({% page "/launching-software/lifecycle/#system-security-plan" %}) writing
and 2 weeks for greybox testing and
[signature](https://atos.open-control.org/steps/#step-5-authorize-information-system).
FISMA Moderate and FISMA High will require additional time.

Since the time it would take to resolve vulnerabilities is not known until a
vulnerability is identified, it is **strongly recommended** that no expectations
are set with Federal partners or GSA stakeholders when public testing will
begin. Instead, we recommend that the authorization process is seen as part of
the delivery process and your definition of "done".

After the system has been authorized, you can then begin planning a public roll
out of your system.

## Static Analysis

Static analysis is an important part of the development process, and is required
for ATO. There are two main types of static security testing that needs to be
done:

- [**Dependency analysis**](#dependency-analysis), where the Ruby gems, Python
  modules, and JavaScript packages your app uses are checked against a list of
  known vulnerabilities.
- [**Code security analysis**](#code-analysis), in which your code is checked
  against a list of antipatterns.

There are tools for JS, Ruby, and Python, and you are encouraged to set up this
scanning early on in the development cycle to prevent unexpected delays when
it's time to get your ATO. Note that there are _many_ tools out there for doing
code style linting - see the
[Development Guide](https://engineering.18f.gov/language-selection/) for
recommendations. This page is specifically security-focused.

### Recommendations by language

| Language   | Dependency analysis                          | Code security analysis                                                                                                                                                                                                                                                      |
| ---------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Go         | [Snyk](https://snyk.io/docs/snyk-for-golang) | [Go Meta Linter](https://github.com/alecthomas/gometalinter), with the security-related [linters](https://github.com/alecthomas/gometalinter#supported-linters) (like [SafeSQL](https://github.com/stripe/safesql), if you're doing SQL queries) enabled / [CodeQL][codeql] |
| JavaScript | [GitHub][github-alerts]<sup>\*</sup>         | [eslint-config-scanjs](https://www.npmjs.com/package/eslint-config-scanjs) / [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) / [CodeQL][codeql]                                                                                              |
| Python     | [GitHub][github-alerts]<sup>\*</sup>         | [Bandit](https://github.com/PyCQA/bandit) with the provided [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.bandit); [engine for Code Climate](https://docs.codeclimate.com/docs/bandit) / [CodeQL][codeql]                             |
| Ruby       | [GitHub][github-alerts]<sup>\*</sup>         | [Code Climate](https://docs.codeclimate.com/v1.0/docs/brakeman) or [Hakiri](https://hakiri.io/) - _Rails only_                                                                                                                                                              |

\* Enabled automatically for repositories in
[TTS GitHub organizations]({% page "/github/#organizations" %})
through [`ghad`](https://github.com/18F/ghad).

### Dependency analysis

Use one of the services above, which should support adding public repositories
yourself. If you need scanning on a private repository,
[file an issue in the Infrastructure repo](https://github.com/18F/Infrastructure/issues/new).

**Snyk**

When starting a new project for an agency partner, consider
[creating a new Snyk organization](https://snyk.io/docs/orgs#creating-a-new-organisation)
for your project and
[invite the agency partners (in addition to the TTS team)](https://snyk.io/docs/orgs#collaborating-with-team-members).
This will facilitate the project's hand-off in the future.

For repositories which include multiple dependency manifests (e.g. due to
multiple sub-projects or crossing languages), be sure to configure Snyk to track
each dependency file. By default, Snyk's import will stop after finding the
first dependency manifest.

### Code analysis

This is commonly referred to as "static analysis". Code analysis can be done by
a [service](#recommendations-by-language) (recommended), or within your existing
continuous integration tool. Additional configuration information available
below.

**Config files**

Basic config files for some static analysis tools can be found in the
[compliance-toolkit repo](https://github.com/18F/compliance-toolkit). These
currently are little more than the default settings, but the recommendations may
change. If you find a test that you believe is invalid, file an issue in the
repo.

We are especially interested to know if you get lots of false positives. We
believe the default config files will grow and evolve, but the most up-to-date
versions will always be found in the repo.

More advanced configuration options for all the tools can be found in their
respective docs.

[github-alerts]: https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies#alerts-and-automated-security-fixes-for-vulnerable-dependencies
[codeql]: https://docs.github.com/en/free-pro-team@latest/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository#enabling-code-scanning-using-actions

## Dynamic Scanning

In order for an application to get ATO, it needs to meet more than a minimum
level of application security, so the application team needs to run
[both static and dynamic security scans](#scanning) and document good results.
Running a "dynamic" scan means running a program that analyzes a live running
application for common vulnerabilities.

As part of the process of getting an ATO at TTS, **your application team will
need to set up
[OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) to
do dynamic vulnerability scanning of your application**. ZAP can function as
either an active (Spider & Attack options) or a passive
(man-in-the-middle/proxy) scanner, but is usually used as a combination of both.
If you (or another person on your application team) has questions about setting
this up, ask #infrastructure for help.

{% image "_img/before-you-ship/zap_home.png" "ZAP home screen" %}

### Preface

You will need a running application to test, which you will want to be as
production-like as possible—ideally a staging environment. Running a scan can
cause a spike in requests and errors, so **inform your team and
{% slack_channel "infrastructure" %} if you are going to run it on a production
site.**

We gave an introduction to ZAP talk as part of our engineering tech talks series
Slides and additional information available
[here](https://github.com/18F/tech-talks/tree/main/talk-materials/vuln-scanning).

Using the
[Quick Start](https://www.zaproxy.org/docs/desktop/addons/quick-start/) is a
good way to get a basic idea of what ZAP does.

### Scanning

1. [Set up ZAP as a proxy.](https://www.zaproxy.org/docs/desktop/start/proxies/)
   - Unfortunately, the "Plug-n-Hack" extension mentioned on the Quick Start
     page is
     [currently non-functional](https://github.com/zaproxy/zaproxy/issues/2069).
   - If the browser gives you a certificate error (e.g.
     `"This site uses HTTP Strict Transport Security (HSTS) to specify that Firefox may only connect to it securely."`),
     you will need to install ZAP's root certificate.
     - In ZAP, go to `Tools`->`Options`->`Dynamic SSL Certificate` and click the
       `Save` button to save the certificate to your computer.
     - You will then need to install the certificate. For Firefox, go to
       `Preferences`->`Advanced`>`Certificates`->`View Certificates`->`Import`
       to import the certificate you saved from ZAP.
     - For additional information see ZAP's
       [documentation on Dynamic SSL Certificates](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/dynsslcert/).
1. Seed the scanner.
   1. Navigate through the various types of pages/interactions on your site,
      including signing in. You should see domain name(s) start to show up under
      the `Sites` list.
   1. For each of the domains in the `Sites` list that you control (i.e. not
      `https://fonts.googleapis.com`):
      1. Right-click the domain to bring up the context menu.
      1. Select `Include in Context`->`Default Context`.
      1. In the `Session Properties` window that pops up, click `OK`.
1. Run the spider.
   1. In the menu bar, click `Tools`->`Spider...`.
   1. Click `New Scan`.
   1. Next to `Starting point`, click `Select...`.
   1. In the `Select Node` window, click `Default Context`, the `Select`.
   1. Click `Start Scan`.
   1. You should see the `Spider` table fill up with results, but the domains
      you don't control should say `OUT_OF_CONTEXT`.
1. If your site uses AJAX, run the
   [AJAX Spider](https://www.zaproxy.org/docs/desktop/addons/ajax-spider/).
1. Run the actual scan.
   1. In the menu bar, click `Tools`->`Active Scan...`.
   1. In the `Active Scan` window, follow the same `Starting point` steps as
      above.
1. View the alerts.
   1. Click the `Alerts` tab.
   1. Above the `Alerts` list, click the
      {% image "_img/before-you-ship/zap_target.png" "target icon" %} (so that
      it turns red) to `Show only URLs in scope`.
1. [Investigate the listed alerts.](#alerts)
1. Export the results.
   1. In the menu bar, go to `Report` -> `Generate HTML Report`.

### Examining the Results

**The Spider**

{% image "_img/before-you-ship/spider_results.png" "spider results" %}

As configured, the Spider does not follow links to other domains or subdomains.
If your project uses either (for example, you use S3 for assets, or the api is
at a different sub domain), you will want to click the options icon (shaped like
a gear ⚙️) and update the options to include the domains & subdomains within the
scope. There is a guide available for those options
[here](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/spider/).

**Alerts**

{% image "_img/before-you-ship/alert_results.png" "alert results" %}

The Alerts pane lists all alerts discovered while scanning the site. As
described on the [alerts page](#alerts), the red and orange-flagged alerts must
be taken care of before the application can be ATO'd. You have a little more
flexibility when dealing with the yellow and blue flags, but all of them must be
either corrected or, in the case of false positives, documented.

Optional: When you get false positives, you can
[file issues with the ZAP project](https://github.com/zaproxy/zaproxy/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+false+positive)
to help them improve the alerting rules to prevent false positives.

If you're running the attack against a local server you may see some alerts that
you wouldn't see on cloud.gov. Debugging web servers are more 'chatty' about
errors than production servers.

### Other Tools Within ZAP

**Fuzzing**

["Fuzzing"](https://en.wikipedia.org/wiki/Fuzz_testing) refers to feeding a
large amount of random (and/or potentially malicious) data to an application
with the intention of finding vulnerabilities related to poor error handling or
incomplete input validation. Typically, fuzzing is used on query parameters and
form fields.

Any request in ZAP can be fuzzed. Simply right click on it, select Attack ->
Fuzzer. Read more about ZAP's Fuzzing capabilities
[here](https://www.zaproxy.org/docs/desktop/addons/fuzzer/).

### More Information

The lead engineer for OWASP ZAP, Simon Bennetts, has recorded a number of
[useful YouTube videos](https://www.youtube.com/channel/UCD3gULJ53AgTHniwATxwdgg),
and that's probably the best place to start learning ZAP.

The [ZAP User Guide](https://www.zaproxy.org/docs/desktop/) is phenomenal. If
you run into an issue, this should be the first place you check.

The
[OWASP Vulnerable Web Applications Directory](https://www.owasp.org/index.php/OWASP_Vulnerable_Web_Applications_Directory_Project#tab=Main)
has a great list of (intentionally) vulnerable targets that are useful for
testing the capability of ZAP.

We are currently collecting best practices for using ZAP. If you have a
particular approach, extension, or option that you find effective,
[open an issue](https://github.com/18f/before-you-ship/issues/new)!

## Frameworks

Organized by language.

### [Node.js](https://nodejs.org/)

- See info on JavaScript
  [static security analysis](#recommendations-by-language)

**[Express](https://expressjs.com/)**

- [Express Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)

**[Sails](http://sailsjs.org/)**

- [Sails Security](http://sailsjs.org/documentation/concepts/security)

### [Python](https://www.python.org/)

**[Django](https://www.djangoproject.com/)**

- Set up [static security analysis](#recommendations-by-language).
- Read through the official
  [deployment checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/).

See also:

- [OWASP Django Secure Configuration Guide](https://www.owasp.org/index.php/SCG_WF_Django)
- Search
  [this deck](https://speakerdeck.com/mpirnat/shiny-lets-be-bad-guys-exploiting-and-mitigating-the-top-10-web-app-vulnerabilities-oscon-2016-edition)
  (click "Download PDF") for "Django"
- Jacob Kaplan-Moss' talk:
  [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU)
  ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))
- [Security in Django](https://docs.djangoproject.com/en/1.10/topics/security/)

**[Flask](http://flask.pocoo.org/)**

- Set up [static security analysis](#recommendations-by-language)
- Read through the
  [official security docs](http://flask.pocoo.org/docs/security/)
- Consider using [Flask-Security](https://pythonhosted.org/Flask-Security/)

See also:

- Search
  [this deck](https://speakerdeck.com/mpirnat/shiny-lets-be-bad-guys-exploiting-and-mitigating-the-top-10-web-app-vulnerabilities-oscon-2016-edition)
  (click "Download PDF") for "Flask"
- Jacob Kaplan-Moss' talk:
  [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU)
  ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))

### [Ruby](https://www.ruby-lang.org/)

**[Rails](http://rubyonrails.org/)**

- Set up [static security analysis](#recommendations-by-language).
- Read through [Secure Rails](https://github.com/ankane/secure_rails).
- If you need authorization, consider using the gems listed below. Use the
  linked instructions to ensure you have authorization applied to all
  appropriate controller actions.
  - [CanCanCan](https://github.com/CanCanCommunity/cancancan#4-lock-it-down)
  - [Pundit](https://github.com/elabs/pundit#ensuring-policies-and-scopes-are-used)

More info:

- [Rails Security Guide](http://guides.rubyonrails.org/security.html)
- [OWASP Rails Cheatsheet](https://www.owasp.org/index.php/Ruby_on_Rails_Cheatsheet)

**[Sinatra](http://www.sinatrarb.com/)/[Padrino](http://padrinorb.com/)**

- Set up [static security analysis](#recommendations-by-language). We are
  currently seeking recommendations for this configuration.
- Ensure that [rack-protection](https://github.com/sinatra/rack-protection)
  and/or [SecureHeaders](https://github.com/twitter/secureheaders) is enabled
  and configured.

More info:

- [Rails Security Guide](http://guides.rubyonrails.org/security.html) is not
  directly related, but contains pertinent information and descriptions of
  common vulnerabilities.

---

Are we missing guidelines for the framework you're using, or think our
guidelines could be improved?
[Open an issue!](https://github.com/18F/before-you-ship/issues/new)

## Multi-Factor Authentication

All TTS systems requiring authentication **must** use multiple factors. Examples
of multi-factor authentication (MFA) include, but are not limited to:

- [**cloud.gov identity provider**](https://cloud.gov/docs/services/cloud-gov-identity-provider/)
- [**GSA SecureAuth**](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/telework-technology/secureauth) -
  only an option when your users have GSA ENT accounts
- [**OMB Max**](https://max.gov/) - requires an Inter-Agency Agreement
- [**Login.gov**](https://login.gov) - requires an Memorandum of Understanding
  for new agencies

Systems in the
[pre-assessment]({% page "/launching-software/lifecycle/#conditions-for-pre-assessment" %})
phase do not require MFA.
