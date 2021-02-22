---
aliases: /feeds/causality-and-transparency-next-steps-in-deep-learning-in-healthcare
archetype: external-bookmark-feed
author:
- Admin
breadcrumbLinks:
- /
- /feed/latest/
- /feed/latest/
breadcrumbs:
- Home
- Feeds
- Latest
categories: []
date: '2019-10-03T15:00:30+00:00'
feed:
  feed_url: https://www.chilmarkresearch.com/feed/
  id: 81
  site_url: https://www.chilmarkresearch.com
  source: miniflux
  title: Chilmark Research
feedSource:
- chilmark-research
icon:
  format: ICO
  href: chilmark-research-feed-icon.ico
  mime_type: image/x-icon
  size:
  - 44
  - 44
link:
  brand: chilmarkresearch.com
  href: https://www.chilmarkresearch.com/causality-and-transparency-next-steps-in-deep-learning-in-healthcare/
mdName: chilmarkresearch.com-causality-and-transparency-next-steps-in-deep-learning-in-healthcare
pubDate: 2019-10-03 15:00:30+00:00
searchCategory: Feeds
slug: chilmarkresearch.com-causality-and-transparency-next-steps-in-deep-learning-in-healthcare
sub: feeds
tags:
- Feeds
title: 'Causality and Transparency: Next Steps in Deep Learning in Healthcare'
---

<p><img src="https://www.chilmarkresearch.com/wp-content/uploads/2019/09/Robot-and-doctor-shake-hands-300x199.jpg" alt="" loading="lazy"/></p>
<p>As the hype cycle for AI continues it is going to be increasingly important for users to ask more questions about the limitations of these systems as well as ask what types of problems will machine learning models such as Deep Learning be best suited. The market is filled with claims of both miracle cures and the dangers of AI and we need to start asking more targeted questions to cut through the clutter and avoid decisions that could have a negative impact on health outcomes. One often-cited case below illustrates the need to understand more about causal inference in AI/ML so that better assessments can be made.</p>
<p>A study from the 1990s illustrates how AI can go wrong and become potentially dangerous in healthcare.  In the 1990s researchers sought to create a pneumonia risk model that would classify patients in either “high risk” or “low risk” categories. Low-risk patients were to be treated with antibiotics, chicken soup, and told to call back in three days if they were not significantly better. High-risk patients were to be hospitalized. Researchers trained a neural network on the data and an early version of the model suggested sending asthmatic patients home. A graduate student at the time, Rich Caruana, picked up on the fact that this recommendation was likely flawed. The algorithms “learned” that asthma patients presented earlier and the hospitals hospitalized them in intensive care and improved their outcomes faster. The AI/ML algorithm saw the improved outcome earlier in the progression and interpreted this as cause for lower risk and less likely to die, when in fact, they are at greater risk of death.</p>
<p>This example, albeit on less sophisticated neural networks than now in use, is still extremely relevant. With an aging population with co-morbidities, there is a lot of room for confounding variables to trip up algorithms and make poor recommendations. The vast majority of AI/ML tools in the marketplace are based on regression analyses. Regression analysis is great for understanding associations, but less powerful in helping understand causal mechanisms. Whether it is a policy issue or a clinical issue, causal mechanisms are essential to most cases in understanding where and how to intervene. The failure of many AI/ML applications will likely be found in the murk of causality. Furthermore, many of our most complex health policy challenges can be described as wicked problems lacking clear solutions and we should only expect Deep Learning to provide a tool for analyzing components of the problems rather than some sort of magic wand.</p>
<p><a href="https://www.chilmarkresearch.com/wp-content/uploads/2019/09/AdobeStock_127692477.jpeg" rel="noopener noreferrer" target="_blank" referrerpolicy="no-referrer"><img src="https://www.chilmarkresearch.com/wp-content/uploads/2019/09/AdobeStock_127692477-300x200.jpeg" alt="" loading="lazy"/></a>We need to stay focused on the issue of causal inference and work with data scientists who are developing AI/ML approaches to health and medicine that incorporate this into their work and what comes after the current craze for Deep Learning.  We may also need to find mechanisms to open up black-box algorithms for greater transparency and analysis, or alternatively use white box algorithms where models can be assessed more transparently for patient safety reasons.  For example, if we use historical data to train algorithms used to predict or prescribe an individual patient journey from data based on treatments up to 2017 and learned that those past treatments were <strong>not the optimal</strong> treatments and that clinical practices had changed, this ML model may expose patients to sub-optimal treatment or harm. Sub-optimal protocols can be easily integrated into AI applications without clinician or even the developer’s knowledge. This is where causal inference and transparency become tools to ensure patient safety as well.</p>
<p>Health data are rife with missing data, different time scales, and heterogeneous types of data that can be exceedingly difficult to ingest in AI engines. The amount of work required to render data useful to AI/ML developers is substantial. Biostatisticians are often concerned with the issue of <em>distribution shifts</em> and the methods used to re-weight some cases to account for shifts in statistical distributions. It is here where we can see the issue of small propensities leading with high variance that can lead to major errors in a machine learning model. This will demand a great deal of vigilance from users and regulatory authorities who have been caught in a game of catch up with the rapid rate of innovation in machine learning.</p>
<p>Judea Pearl and Dana Mackenzie’s <em>The Book of Why. The New Science of Cause and Effect</em> highlights the main shortcoming of contemporary machine learning and the causal inference challenge. They note that the hype that big data will solve many of the big challenges we face is misplaced. Causal questions are never solved by data alone. They demand that we formulate models that delineate processes that generate the data in the first place. Any study that analyzes data without a model will only summarize and transform the data, but not offer an interpretation, they argue.  ML that bakes in causal models will be much more valuable in many clinical applications of AI.</p>
<p>When perusing the websites of many AI vendors or listening to pitches we hear the claim that they are using “Real-World Data.” This is an important step forward but we still need to evaluate models. I want to see how you are addressing confounding variables that could offer potential explanations of the observed real-world data. Clinicians may need to know how your convolutional neural network addresses uncertainties and how error rates change, if at all, over time. If the analytics provided get us to the place where we can create a hypothesis about what is being observed, this is an important first step but not necessarily the endpoint for a clinician prescribing a medication and treatment plan.</p>
<blockquote><p>Clinicians will need to have a grasp of what is inside of the black boxes so they can judge or evaluate these tools in a manner that patients understand.</p></blockquote>
<p>Clinicians and patients often inhabit a world of ambiguity where subjective data points are critically important as well. This is where we need to think about the future of AI/ML that will be more in the <a href="https://www.chilmarkresearch.com/ai-ml-in-healthcare-part-of-the-toolkit-for-administrators-and-clinicians/" rel="noopener noreferrer" target="_blank" referrerpolicy="no-referrer">realm of augmenting human intelligence</a>. That same human intelligence will need to have a grasp of what is inside of the black boxes so they can judge or evaluate these tools in a manner that patients understand. Finally, <a href="https://blog.fastforwardlabs.com/2019/02/28/causality-in-machine-learning.html" rel="noopener noreferrer" target="_blank" referrerpolicy="no-referrer">more focus on causal inference in machine learning</a> will also help address the issues of fairness and bias as well as make more generalizable models that scale across a wider population in many cases. Gary Marcus and Ernest Davis in their book <em>Rebooting AI. Building Artificial Intelligence We Can Trust</em> emphasize that the future of AI will need to build a cognitive model and tools for reasoning that reflects our own common sense. In the meantime, they argue, we are left with “<em>narrow but networked intelligences with autonomy, but too little genuine intelligence to be able to reason about the consequences of that power</em>.” As we dive deeper into the offerings in this rapidly growing market we look forward to more discussions about the next generation of machine learning and the developers who might be leading the way in healthcare.</p>
<p>The post <a href="https://www.chilmarkresearch.com/causality-and-transparency-next-steps-in-deep-learning-in-healthcare/" rel="noopener noreferrer" target="_blank" referrerpolicy="no-referrer">Causality and Transparency: Next Steps in Deep Learning in Healthcare</a> appeared first on <a href="https://www.chilmarkresearch.com" rel="noopener noreferrer" target="_blank" referrerpolicy="no-referrer">Chilmark Research</a>.</p>