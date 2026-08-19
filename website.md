Build a simple, professional one-page marketing website for Maysano Portfolio Studio.

The site will be published through GitHub Pages. Keep the implementation lightweight and static. Prefer plain HTML, CSS and minimal vanilla JavaScript. Do not add a backend, database, framework, build pipeline, analytics, package manager or external dependency unless needed.

The website must feel visually connected to the existing Portfolio Studio application shown in the supplied screenshots.

The design must avoid the typical AI-generated SaaS landing-page look. Clarity, contrast, structure and typography should do most of the visual work.

Brand and visual direction

Use Portfolio Studio as the primary visual reference. Project name is 10Minutes

Base the website palette on these approximate colors:

Main dark green: #1E241C
Primary green: #263722
Soft background: #F2F4EF
Secondary soft background: #F7F8F4
White: #FFFFFF
Main text: #1E221C
Secondary text: #4A5047
Border: approximately #CDD2C8
Muted olive accents where appropriate

The design should feel restrained, enterprise-focused and product-led.

Avoid:

pill-shaped buttons
pill-shaped navigation
excessive border radius
floating rounded cards
colored bands attached to the side of content blocks
gradients
glow effects
glassmorphism
oversized icon tiles
excessive shadows
abstract AI graphics
generic startup illustrations
fake customer logos
invented testimonials
decorative blobs
decorative waves
excessive use of cards
“three rounded cards in a row” as the default layout pattern
oversized startup-style hero headlines
animated gradients
floating browser mockups
decorative background noise

Visual principles

Use strong rectangular structure.

Recommended border radius:

buttons: 2px to 4px
cards: 2px to 6px
large containers: maximum 6px
many content sections should use no border radius at all

Create hierarchy through:

dark and light backgrounds
typography
whitespace
thin borders
scale
alignment
grid structure

Do not add decoration where typography and spacing already provide enough hierarchy.

Use clear section boundaries.

Prefer:

full-width background changes
horizontal rules
strong whitespace
dark sections between light sections
thin grid lines
aligned vertical edges

Do not put every section inside a rounded white container.

Typography

Typography should carry much of the visual identity.

Use a system sans-serif stack.

Example:

font-family:
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

Do not load Google Fonts.

Use:

compact headlines
moderate line height
strong headline/body contrast
small uppercase labels sparingly
bold weight only where useful
readable paragraph widths

Do not create a giant hero headline that takes most of the screen.

Layout

Use a disciplined grid.

Maximum page content width:
1180px to 1240px.

Prefer:

strong left alignment
aligned vertical edges
generous horizontal whitespace
asymmetrical layouts where useful
fewer containers
fewer decorative elements

The site should feel closer to a professional enterprise product site, design publication or product specification than a startup landing-page template.

Buttons

Primary button:

dark green background
white text
rectangular
2px to 4px corner radius
no shadow
no pill shape
no icon unless needed

Secondary button:

transparent or white
thin dark border
dark text
same geometry as primary

Hover states:

simple background change
simple border change
no movement
no glow
no scale animation

Navigation

Create a simple sticky top navigation.

Left side:

MAYSANO
Portfolio Studio

Right side:

Product
How it works
Demo
Standards
Pricing
Contact

Primary CTA:

Book a discussion

Do not place navigation items inside pills.

Use plain text links with clear spacing.

On mobile, use a simple menu.

Hero section

The hero should immediately explain what Portfolio Studio does.

Eyebrow:

MAYSANO PORTFOLIO STUDIO

Headline:

Turn business material into portfolio decisions in minutes

Supporting copy:

Turn the documents, objectives, signals and use cases your teams already have into a structured portfolio for review, prioritization and delivery. Portfolio Studio keeps the business context connected throughout the process.

Primary CTA:

Watch the demo

Secondary CTA:

See pricing

Supporting line:

Built on open data product standards developed under the Linux Foundation.

Hero layout:

Left side:

eyebrow
headline
short description
actions
standards supporting line

Right side:

real Portfolio Studio screenshot from the supplied material
simple rectangular frame
thin border
minimal or no shadow
no fake browser chrome
no floating card effect

The hero should be strong but compact enough that part of the next section remains visible on a typical laptop screen.

Product value section

Headline:

Move from scattered material to a decision-ready portfolio

Do not use three rounded cards.

Use three structured rows separated by thin horizontal rules.

Example layout:

01
Business context

Connect objectives, signals, use cases and existing documentation so each proposed data product has a clear reason to exist.

02
Structured portfolio

Generate consistent product definitions, relationships and portfolio packages from material the organization already has.

03
Decision support

Review priorities, assumptions and recommendations before moving selected products toward delivery.

On desktop, use a grid such as:

number | heading | description

On mobile, stack cleanly.

How it works

Headline:

From existing business material to a governed portfolio

Create a clear numbered sequence.

Do not use rounded cards.

Use large step numbers and horizontal separators.

Steps:

01
Add material

Documents, objectives, product needs, signals and use cases.

02
Add guidance

Define scope, language and portfolio-specific instructions.

03
Generate

Portfolio Studio structures the information into connected products and business context.

04
Review

Leadership and teams review the portfolio, assumptions and recommendations.

05
Decide and deliver

Selected products move into delivery workflows while the original business context stays attached.

On desktop, this section may use a vertical sequence or structured table-like layout.

Demo section

This is one of the most important parts of the website.

Headline:

See Portfolio Studio in action

Supporting text:

Watch a short walkthrough of the main Portfolio Studio workflow, from business inputs to a decision-ready portfolio.

Create a large responsive video area.

Use:

rectangular video frame
thin border
minimal radius
no decorative frame
no oversized play-button graphic
no gradient overlay

I will later insert a recorded demo.

Support either:

local MP4 file at assets/portfolio-studio-demo.mp4

or

iframe URL that is easy to replace

Make the video source obvious in the code.

Below the video, add a simple structured two-column list.

Heading:

The demo covers

Items:

Creating a portfolio
Adding business material and guidance
Generating structured data products
Reviewing connected business context
Portfolio versions and decision progress
Portfolio Assistant
Moving selected work toward delivery

Business context section

Headline:

The product is only part of the decision

Use a short narrative paragraph.

Portfolio Studio keeps each data product connected to the business reason behind it. Objectives, signals, needs and use cases remain connected through portfolio review and into delivery. This gives decision-makers more context than a list of technical assets.

Create a restrained vertical relationship diagram.

Business Objectives
↓
Signals + Needs
↓
Use Cases
↓
Data Products
↓
Decisions + Delivery

Use:

typography
thin lines
small markers
restrained spacing

Do not use:

colorful network diagrams
large circles
illustrated nodes
glowing lines
AI-style graph graphics

Supporting text:

This connected context makes portfolios easier to review, explain, hand over and evolve.

Workflow as Product section

Headline:

Treat the workflow around the portfolio as part of the product

Narrative:

Portfolio Studio does more than generate product definitions. It supports the workflow around them, from business material and portfolio generation through review, decisions, versioning and delivery handoff. The workflow and its context become part of the managed product lifecycle.

Show a simple process:

Business intent
→
Portfolio generation
→
Decision process
→
Delivery

Add a clear return path from Delivery back to Business intent or Portfolio generation to indicate continuous iteration and portfolio versioning.

Use straight lines and simple labels.

Do not turn this into an infographic with decorative icons.

Open standards section

Headline:

Built on an open standards foundation

Copy:

Portfolio Studio uses the Open Data Product Specification family developed under the Linux Foundation. This gives the generated portfolio a structured and portable foundation rather than locking its meaning inside the application.

Do not use four floating cards.

Use a table-like structure with thin horizontal rules.

Example:

ODPS
Data Product Specification

ODPC
Data Product Catalogs

ODPG
Data Product Graphs

ODPR
Data Product Recipes

The acronym should have strong typographic emphasis.

Add a text link:

Learn about the open standards

Set the href to an obvious placeholder.

Do not imply that the Linux Foundation endorses Maysano.

Enterprise deployment section

Headline:

Designed for enterprise deployment

Use a two-column structure.

Left side:
short narrative.

Right side:
four structured items separated by thin rules.

Customer environment

Portfolio Studio is deployed for the customer rather than offered as a public multi-tenant SaaS.

Business and technical governance

Keep decision context, data products and delivery information connected.

Integrated AI gateway

Studio includes an AI gateway layer for controlled model access, workload routing, guardrails, policies, budgeting and provider governance.

Enterprise integration

Architecture designed for identity, permissions, auditability and delivery integrations.

Do not present unfinished functionality as already production-ready.

Pricing section

Use the pricing and wording from the supplied Portfolio Studio screenshot.

Headline:

Choose the right plan for your team

Use three pricing columns.

Unlike the rest of the site, bordered pricing panels are appropriate here because the user needs direct plan comparison.

Keep the geometry rectangular.

Use:

thin borders
small radius
large whitespace
strong typography
no shadows

Design Partner

$25,000

one-time

Description:

For early customers who want a deployed solution and direct product collaboration.

Includes:

One customer-managed deployment
Basic configuration and branding
Annual software license, Year 1
Standard support and product updates
Guided setup of first portfolio

CTA:

Select plan

Enterprise Deployment

Label:

MOST POPULAR

Do not render this label as a large floating pill.

Use a simple small uppercase text label above the plan name or inside the top border area.

$53,000

one-time

Description:

For organizations that want Portfolio Studio deployed in their own environment.

Includes:

Deployment and configuration
Annual software license, Year 1
Onboarding and first portfolio
Administrator training and documentation
Standard support, updates and bug fixes

CTA:

Select plan

This should be the visually dominant pricing option using a stronger border or dark CTA. Do not add glow, shadow or oversized decoration.

Enterprise Plus

From $65,000

one-time

Description:

For large organizations that need stronger support, governance or custom needs.

Includes:

Everything in Enterprise Deployment
Enhanced support options
Named support contact
Quarterly product reviews
Advanced configuration and deployment help

CTA:

Contact sales

Below all plans:

All plans include the first year of software license.

Final CTA section

Use the dark Portfolio Studio green background.

Do not put the CTA inside a floating card.

Headline:

Turn your next data product initiative into a decision-ready portfolio

Text:

See how Portfolio Studio works with the material and processes your organization already has.

Primary CTA:

Book a discussion

Secondary CTA:

Watch the demo

Use strong contrast and simple rectangular buttons.

Footer

Use a restrained footer.

Left:

MAYSANO
Portfolio Studio

Right or below:

Product
Demo
Standards
Pricing
Contact

Bottom text:

© 2026 Maysano. All rights reserved.

Technical requirements

Create:

index.html
styles.css
script.js
README.md
assets/

Use semantic HTML.

Use CSS variables for all brand colors.

Example:

:root {
--green-dark: #1E241C;
--green-primary: #263722;
--background-soft: #F2F4EF;
--background-secondary: #F7F8F4;
--white: #FFFFFF;
--text-primary: #1E221C;
--text-secondary: #4A5047;
--border: #CDD2C8;
}

Use relative asset paths only.

Do not use absolute local filesystem paths.

Use smooth scrolling.

Respect prefers-reduced-motion.

Use visible keyboard focus states.

Maintain accessible color contrast.

Make the site responsive at:

desktop
tablet
mobile

Do not rely on JavaScript for essential content.

JavaScript should only handle things such as:

mobile navigation
optional video behavior
minor interaction

Create one obvious configuration area near the top of script.js or index.html for:

contact URL
demo URL
standards URL

Use placeholder values for now.

Metadata

Set:

Title:

Maysano Portfolio Studio | From Business Material to Portfolio Decisions

Meta description:

Maysano Portfolio Studio turns existing business material, objectives, signals and use cases into structured data product portfolios for review, prioritization and delivery.

Add Open Graph metadata.

Use placeholder image:

assets/portfolio-studio-og.png

GitHub Pages

The site must work directly from GitHub Pages.

No server-side dependencies.

No framework-specific routing.

No build step.

README.md should explain:

How to preview the site locally
How to replace the demo video
How to replace the hero screenshot
How to change CTA URLs
How to edit pricing
How to publish through GitHub Pages

Final review

Before finishing, review the whole page at desktop and mobile widths.

Check:

no horizontal overflow
no generic SaaS visual patterns
no pill-shaped controls
no excessive rounded corners
no colored side bands
no floating cards without a clear reason
navigation works
video scales correctly
pricing cards align
text stays readable
button states work
keyboard focus is visible
contrast is accessible
page works with JavaScript disabled
section spacing feels intentional
all major vertical edges align consistently

The final result should look like a serious enterprise software product website that belongs to the Portfolio Studio application shown in the supplied screenshots.

It should not look like a website generated from a generic AI landing-page template.
