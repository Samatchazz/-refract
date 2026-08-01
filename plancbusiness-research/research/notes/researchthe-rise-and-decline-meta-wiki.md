---
title: Research:The Rise and Decline - Meta-Wiki
id: researchthe-rise-and-decline-meta-wiki
tags:
- creator-attrition-income-data-079588
- locus-attrition-telemetry-absence
- wikipedia-editor-retention
- person-level-cohort-survival
created: '2026-07-27T17:22:29.210981Z'
updated: '2026-07-27T17:52:26.770522Z'
source: https://meta.wikimedia.org/wiki/Research:The_Rise_and_Decline
source_domain: meta.wikimedia.org
fetched_at: '2026-07-27T17:22:29.128946Z'
fetch_provider: crawl4ai
status: review
type: note
tier: commentary
content_type: article
deprecated: false
summary: 'Author-written (Halfaker, Geiger, Morgan, Riedl team) open-access summary
  of the published ABS 2013 paper ''The Rise and Decline of an Open Collaboration
  System'' -- fetched because the SAGE/Springer/journals.sagepub.com hosts of the
  actual paper were Cloudflare-blocked. Unit of analysis: PERSON (individual Wikipedia
  editor), same 2100-newcomer manually-coded sample described in the companion Research:Newcomer_quality
  page. Central thesis: English Wikipedia''s active-editor count stopped growing and
  began a steady linear decline starting early 2007, driven specifically by declining
  RETENTION of new editors (not by fewer good-faith newcomers arriving, and not by
  already-experienced editors leaving). Defines the newcomer-survival metric used
  throughout as ''the proportion of desirable newcomers who edit for at least two
  months'' -- i.e., the operational definition of editor retention that downstream
  figures (in the companion Newcomer_quality page) quantify at 35.7% to 11.3% for
  good-faith newcomers between 2004 and 2010. Identifies three mechanisms behind the
  retention collapse: (1) rising rejection of good-faith newcomer contributions by
  Wikipedia''s quality-control process; (2) semi-automated tools like Huggle disproportionately
  reverting good-faith newcomers'' work and rarely engaging in the recommended Bold-Revert-Discuss
  follow-up (Huggle-based reverters discuss only ~7% of the time vs ~60% for manual
  reverts); (3) formal policy/guideline articulation processes calcifying against
  newcomer-proposed changes as editor experience becomes a stronger predictor of a
  policy edit''s survival. Scope: English Wikipedia, roughly 2001-2011 data window.
  This page and Research:Newcomer_quality (also fetched in this batch) together substitute
  for the Cloudflare-blocked primary paper and carry the load-bearing numbers.'
---

[Jump to content](https://meta.wikimedia.org/wiki/Research:The_Rise_and_Decline#bodyContent)
From Meta, a Wikimedia project coordination wiki
**Contact**
_[University of Minnesota](https://en.wikipedia.org/wiki/University_of_Minnesota "en:University of Minnesota")_
**This page documents a[completed research project](https://meta.wikimedia.org/wiki/Research:Completed_projects "Research:Completed projects").**
This is an open access summary of a peer reviewed publication:      Halfaker, A., Geiger, R. S., Morgan, J. T., & Riedl, J. (2013). The rise and decline of an open collaboration system:      How Wikipedia’s reaction to popularity is causing its decline. _American Behavioral Scientist_ , 57(5), 664-688. [PDF](http://www-users.cs.umn.edu/~halfak/publications/The_Rise_and_Decline/halfaker13rise-preprint.pdf)
## Project Overview
Open collaboration systems like Wikipedia need to maintain a pool of volunteer contributors in order to remain relevant. Despite historically garnering massive numbers of contributions, recent research has shown that the number of active contributors in Wikipedia has entered a steady decline and suggests that declining retention of newcomers is the cause. Through a data-driven approach, this paper presents evidence that several changes that the Wikipedia community made to manage quality and consistency in the face of a massive growth in participation have led to a more restrictive environment for newcomers. Specifically, the restrictiveness of the encyclopedia's primary quality control mechanism and the algorithmic tools used to reject contributions is implicated as a cause of decreased newcomer retention. Also, the community's formal mechanisms for norm articulation are shown to have calcified against changes – especially for newcomers. Recommendations are offered for Wikipedia's community organizers and the Wikimedia Foundation. 
## Methods
  * Key methodological features: Content analysis of newcomer work; data analysis and numerical modeling of logs


## Dissemination
  * Submission to American Behavioral Scientist
  * An open licensed [summary](https://www-users.cs.umn.edu/~halfaker/publications/The_Rise_and_Decline/) of the findings.


## Key findings
  1. The decline represents a change in the rate of retention of desirable, **good-faith** newcomers. 
    1. The proportion of good-faith newcomers who join Wikipedia has not changed since 2006.
    2. These good-faith newcomers are more likely to have their work rejected.
    3. This rejection predicts the observed decline in retention.
  2. Semi-autonomous tools (like [en:WP:HUGGLE](https://en.wikipedia.org/wiki/WP:HUGGLE "en:WP:HUGGLE")) are partially at fault. 
    1. Reverting tools are increasingly likely to revert the work of good-faith newcomers.
    2. These automated reverts exacerbate the negative effects of rejection on retention.
    3. Users of Huggle tend to not engage in the [best practices](https://en.wikipedia.org/wiki/WP:BRD "en:WP:BRD") for discussing reverts.
  3. New users are being pushed out of policy articulation. 
    1. The formalized process for vetting new policies and changes to policies ensures that newcomers' changes do not survive.
    2. Newcomers and other editors are moving increasingly toward [less formal spaces](https://en.wikipedia.org/wiki/WP:ESSAYS "en:WP:ESSAYS").


## Summary
It's no secret that the number of active editors in the English Wikipedia is declining. As the figure below shows, the number of active editors (editors with >= 5 edits/month) abruptly stopped growing in early 2007 and entered a steady, linear decline. Recent research has shown evidence that this transition is rooted in the declining retention of new editors, not a change in the retention of already-experienced old-timers. What is unclear, or was before this work, is **why** this sudden switch in the retention of new editors took place. 
**The English Wikipedia decline.** The number of active editors in the English Wikipedia is plotted over time.
This implicates the changes that the Wikipedia editors made to preserve the quality and consistency of the encyclopedia in causing the decline in retention of desirable newcomers. Below, the results are broken up into a description of three general findings. 
### The decline in good-faith newcomers
One of the biggest open questions about Wikipedia's newcomer decline was whether it was the result of a natural decline in the quality of newcomers (where lower-quality newcomers were "encouraged" to go elsewhere) or whether changes in how Wikipedia welcomes newcomers was at fault. In order to explore this, we [manually categorized](https://en.wikipedia.org/wiki/Coding_\(social_sciences\) "en:Coding \(social sciences\)") the work of 2100 newcomers sampled over the history of the website. With the help of Maryana Pinchuk ([User:Accedie](https://en.wikipedia.org/wiki/User:Accedie "en:User:Accedie")), Oliver Keyes ([User:Ironholds](https://meta.wikimedia.org/wiki/User:Ironholds "User:Ironholds")) and Steven Walling ([User:Steven_Walling](https://meta.wikimedia.org/wiki/User:Steven_Walling "User:Steven Walling")) we categorized these newcomers into 4 ordinal quality classes based on their first session of editing activity: 
  1. Vandals - Purposefully malicious, out to cause harm
  2. Bad-faith - Trying to be funny, not here to help or harm
  3. Good-faith - Trying to be productive, but failing
  4. Golden - Successfully contributing productively


In the analysis, we simplify these 4 categories into _desirable_ newcomers (good-faith & golden) and _undesirable_ newcomers (bad-faith & vandal). 
**Rate of desirable newcomers.** The proportion of newcomers falling into the two desirable quality classes, _good-faith_ and _golden_ , is plotted over time.
**Rejection of desirable newcomers.** The proportion of desirable newcomers who are reverted in their first session of editing is plotted over time.
**Survival of desirable newcomers.** The proportion of desirable newcomers who edit for at least two months is plotted over time. 
The three plots above make a few things apparent: 
  1. The proportion[_unclear_] of desirable newcomers entering Wikipedia has not changed since 2006
  2. These desirable good newcomers are more likely than their ancestors to have their first contributions rejected
  3. The decline in good newcomers is the result of a decline in **desirable** newcomers. Undesirable newcomers (not shown) retention rate stays constant.


### Efficient quality control -> impersonal newcomer experience
**First messages to new editors.** The proportion of first messages to new editors is plotted over time by the way in which those messages were delivered.
In order to maintain the quality of encyclopedic content in the face of exponential growth in the contributor community, Wikipedians developed automated (bots) and semi-automated (Huggle, Twinkle, etc.) tools to make the work of rejecting undesirable contributions efficient (read: take as little human effort as possible). These tools are apparently effective at their job. Recent research has shown that the time between when vandalism is posted and reverted is very short (median: ~2 minutes) and has been steadily falling. However, we suspected that the ways in which efficiency was achieved with these tools was part of the problem. 
Recent research by Geiger et al. has shown that an increasing number of newcomers' first contact with someone in Wikipedia is with the business end of an algorithmic quality control tool. _First messages to new editors_ shows the growing use of automated tools to send messages to newcomers. We suspected that the increasing rate of interactions between desirable newcomers (described in the previous section) and algorithmic tools was exacerbating the effect of rejection on retention. 
The plots below describe two analyses that support this suspicion. _Desirable newcomer reverts by tools_ shows that desirable newcomers are increasingly likely to have their work rejected by an algorithmic quality control tool and that the growth in the use of these tools to reject newcomer work coincides with the beginning of the decline (early 2007). _BRD reciprocation rate_ shows something a little more nuanced. We hypothesized that there would be a behavioral pattern explaining why reverts by algorithmic tools affect newcomers more strongly. Wikipedia's Bold, Revert, Discuss cycle (BRD) recommends a process by which editors may efficiently do work and resolve conflicts. As the figure shows, editors who revert using Huggle are much less likely to participate in a BRD discussion (~7%) than editors who revert manually (~60%). 
**Automated reverts of desirable newcomers.** The proportion of reverted newcomers who were reverted by tools is plotted over time.
**BRD reciprocation rate.** The rate at which reverting editors respond to [en:WP:BRD](https://en.wikipedia.org/wiki/WP:BRD "en:WP:BRD") initiations is plotted over time by the tool used to perform the revert.
### Formalization of norms against newcomer changes
Recent work studying Wikipedia's policies and guidelines has suggested that the process by which these rules and recommendations are vetted reflect community concerns and decentralization in governance participation. However, it's also been shown that experienced Wikipedians have more power over interpretation of the rules and that policy and guideline creation has slowed since 2006 We suspected that, although natural and generally beneficial, that this calcification of the rules of Wikipedia would bias new articulation against newcomer concerns. 
To explore this hypothesis, we built a model predicting which edits to policies and guidelines were likely to be reverted. In short, this model showed us that: 
  * Over time, editor experience has become a more important success factor
  * Unlike formal policies and guidelines, essays have not suffered such a crackdown


**Growth of rules.** The growth rate of policies, guidelines and essays is plotted over time.
While we do not suggest that the rules of Wikipedia be open to reinterpretation by newcomers, we advocate that concern should be allocated for newcomers with a legitimate interest in changing the way that Wikipedia works. We argue that the results covered in the previous two sections suggest how important it is that newcomers have a say in how they are treated. 
## Acknowledgements
Thanks to Maryana Pinchuk, Steven Walling, and Oliver Keyes for their insightful comments on the research project as it developed and for helping us to manually label newcomer activities. 
## References
  1. Bongwon Suh, Gregorio Convertino, Ed H. Chi, and Peter Pirolli. 2009. The singularity is not near: slowing growth of Wikipedia. In Proceedings of the 5th International Symposium on Wikis and Open Collaboration (WikiSym '09). ACM, New York, NY, USA, , Article 8 , 10 pages. [10.1145/1641309.1641322](http://doi.acm.org/10.1145/1641309.1641322) [[pdf](http://www.peterpirolli.com/Professional/About_Me_files/wikisym%202009.pdf)]
  2. The Wikimedia Foundation, The Editor Trends Study [http://strategy.wikimedia.org/wiki/Editor_Trends_Study](https://strategy.wikimedia.org/wiki/Editor_Trends_Study)
  3. ↑ [Jump up to: ](https://meta.wikimedia.org/wiki/Research:The_Rise_and_Decline#cite_ref-geiger21defense_3-0) Geiger, R. S., Halfaker, A., Pinchuk, M., & Walling, S. 2012. Defense Mechanism or Socialization Tactic? Improving Wikipedia's Notifications to Rejected Contributors. In Proceedings of ICWSM. IEEE <http://www.aaai.org/ocs/index.php/ICWSM/ICWSM12/paper/view/4657>
  4. Aniket Kittur, Bongwon Suh, Bryan A. Pendleton, and Ed H. Chi. 2007. He says, she says: conflict and coordination in Wikipedia. In Proceedings CHI. ACM, New York, NY, USA, 453-462. [10.1145/1240624.1240698](http://doi.acm.org/10.1145/1240624.1240698)
  5. Andrew G. West, Sampath Kannan, and Insup Lee. 2010. STiki: an anti-vandalism tool for Wikipedia using spatio-temporal analysis of revision metadata. In Proceedings of WikiSym. ACM, New York, NY, USA, , Article 32 , 2 pages. [10.1145/1832772.1832814](http://doi.acm.org/10.1145/1832772.1832814)
  6. The reader is encouraged to examine [en:WP:BRD](https://en.wikipedia.org/wiki/WP:BRD "en:WP:BRD") before continuing.
  7. Beschastnikh, I., Kriplean, T., McDonald, D. W. (2008). Wikipedia Self-Governance in Action: Motivating the Policy Lens. ICWSM.
  8. Kriplean, T., Beschastnikh, I., McDonald, D. W., & Golder, S. A., (2007) Community, consensus, coercion, control: cs*w or how policy mediates mass participation. GROUP (pp. 167-177).
  9. Forte, A., Larco, V., & Bruckman, A. (2009). Decentralization in Wikipedia Governance. Journal Manage. Info. Sys. 26(1), 49-72.
  10. See [the full description](http://www-users.cs.umn.edu/~halfak/summaries/The%20Rise%20and%20Decline/) for more details.


Retrieved from "[https://meta.wikimedia.org/w/index.php?title=Research:The_Rise_and_Decline&oldid=30101838](https://meta.wikimedia.org/w/index.php?title=Research:The_Rise_and_Decline&oldid=30101838)"
[Categories](https://meta.wikimedia.org/wiki/Special:Categories "Special:Categories"): 
  * [Completed research projects](https://meta.wikimedia.org/wiki/Category:Completed_research_projects "Category:Completed research projects")


Search
Research:The Rise and Decline
Add languages [ Add topic ](https://meta.wikimedia.org/wiki/Research:The_Rise_and_Decline)
