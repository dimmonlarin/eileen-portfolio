# Eileen Yu, Portfolio Design (v2, Reference-Driven)

The user provided a reference HTML (`portfolio_v2.html`) and asked to match it. Per the replication rule, this reference is the GROUND-TRUTH SPEC and overrides earlier "AI slop" guidance. Below documents the spec extracted from the reference so all files stay consistent.

## Design Movement
Restrained Swiss/editorial product-design portfolio (the genre used by senior designers from Meta, Stripe, Linear). Function-first, grid-and-border driven, near-monochrome.

## Core Principles
1. **Bordered editorial grids.** Content lives in cells separated by 1px hairline borders (case grid, stat rows, goal cards, impact cells). Borders are the primary structural device, not shadows.
2. **Light, airy canvas with dark inversion.** Warm off-white `#F8F7F4` base; dark `#0F0F0F` sections to spotlight strategy/process and the about strip.
3. **Type hierarchy via weight, not color.** Inter. Light (300) for large headings and body, 600 bold for emphasized words and labels. Tiny uppercase mono-ish labels with wide tracking (0.12em).
4. **Outcome-first storytelling.** Each case study leads with a stat band, then narrates situation → approach → discovery → strategic bet → validation → outcomes → lasting infrastructure → reflection.

## Color Philosophy
Quiet, professional, content-forward. Neutral greys do all the work so the writing and the numbers carry the story. No decorative accent color, restraint signals seniority. (Optional: a single subtle accent only if needed for links; default to ink.)
- `--ink #111`, `--ink-2 #555`, `--ink-3 #999`
- `--bg #F8F7F4`, `--bg-2 #EFEDE8`, `--white #FFF`
- `--dark #0F0F0F`, `--dark-2 #1A1A1A`, `--border #E2E0DB`

## Layout Paradigm
Max-width ~1100–1200px centered columns. Two-column asymmetric splits (1.1fr / 0.9fr). Bordered card grids for work, goals, stats, impact. Generous section padding (80px) with hairline dividers between sections.

## Signature Elements
1. **Numbered section labels**, `01, The situation`, uppercase, wide tracking, grey.
2. **Bordered stat/impact cells**, large light-weight numbers over tiny uppercase labels.
3. **Dark process panels**, inverted sections housing the operating model / process steps.

## Interaction Philosophy
Subtle and quiet. Card hover: faint bg change + image scale 1.02 + arrow nudge. Links: color shift only. Smooth scroll. Nothing flashy.

## Animation
Minimal. Gentle fade/translate reveal on scroll (optional, <=300ms ease). Respect reduced-motion. No bounce, no parallax.

## Typography System
- **Inter** throughout. Headings 300 weight, large, tight tracking (-0.025em); `<strong>` = 600 for the emphasized phrase.
- Body 300/400, line-height ~1.7.
- Labels: 10–11px, 600, uppercase, tracking 0.12em, grey.

## Brand Essence
Senior product designer working at the intersection of product strategy, customer insight, and business impact, thrives in ambiguous, high-stakes problems. Personality: strategic, rigorous, candid.

## Brand Voice
Plain, confident, evidence-led. Headlines name the move; body is scannable. Example: "Designing for retention in a down market." / "What shipped, what it moved."

## Content Note (IMPORTANT)
The reference reframes the portfolio at a more senior level (Meta + Bake + OCBC + Storms). I will use the reference's content and structure as ground truth, integrate the richer Bake case study verbatim-in-spirit, and keep OCBC/Storms/Meta as structured case studies. Every case study follows: outcome-first, ONE core problem, 2–3 key decisions, plain scannable language, strategy & business emphasis. Placeholder personal details (location, contact, testimonial attribution) are flagged for the user to confirm.
