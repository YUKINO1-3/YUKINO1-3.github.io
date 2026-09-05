---
title: Sorting algorithm visualiser
summary: An interactive comparison of how common sorting algorithms move data.
slug: sorting-algorithm-visualiser
date: 2026-09-05
lifecycle: published
subject: Computer Science
category: Interactive systems
media: [Web experience, Interactive application]
capabilities: [Builds a computational model]
contribution: I designed the comparison, implemented the visualiser, and tested its behaviour.
interaction: sorting-bars
evidence:
  problem: Sorting algorithms are often taught as finished code, hiding how their operations differ.
  hypothesis: Showing the same input moving through each algorithm will make those differences easier to inspect.
  process: I modelled each comparison and swap as a recorded step, then rendered those steps at a readable pace.
  decisions: I used deterministic sample data so readers can compare algorithms under the same conditions.
  outcome: The finished visualiser demonstrates how an ordered sequence differs from its starting state.
  validation: I checked the displayed values against hand-worked examples and tested the control at narrow and wide layouts.
  limitations: The demonstration uses small arrays and does not represent real-world runtime performance.
---

The visualiser turns an algorithm trace into something a reader can pause and inspect.
