---
title: Research:Newcomer quality - Meta-Wiki
id: researchnewcomer-quality-meta-wiki
tags:
- creator-attrition-income-data-079588
- locus-attrition-telemetry-absence
- wikipedia-editor-retention
- person-level-cohort-survival
created: '2026-07-27T17:25:10.529372Z'
updated: '2026-07-27T17:52:26.797363Z'
source: https://meta.wikimedia.org/wiki/Research:Newcomer_quality
source_domain: meta.wikimedia.org
fetched_at: '2026-07-27T17:25:10.433073Z'
fetch_provider: crawl4ai
status: review
type: note
tier: commentary
content_type: article
deprecated: false
summary: 'Wikimedia Foundation-hosted open-access summary (2011 Wikimedia Summer of
  Research, WSOR11) of the newcomer-quality/survival analysis underlying Halfaker,
  Geiger, Morgan & Riedl (2013) ABS ''Rise and Decline'' paper -- same research team,
  same dataset, describing the actual retention percentages that the published paper''s
  figures show only as plots. Unit of analysis: PERSON (individual English Wikipedia
  editor), sampled by cohort. Sample: 100 randomly sampled newcomers per 6-month period
  from 2001 to 2011 (so roughly 2,000 newcomers total across ~20 half-year cohorts),
  each newcomer''s first ''edit session'' (edits within 1 hour of each other, average
  3.67 edits/session) manually rated by 5 coders into 4 quality classes (vandal, bad-faith,
  good-faith, golden); lumped inter-rater concordance 93.6%, Kendall''s W=0.413 (p=0.002).
  Survival metric defined explicitly: an editor ''survives'' if they make at least
  one edit 2-6 months after their first edit session (a 2-6-month-post-first-session
  retention window, functionally a short-horizon editor-retention rate). Concrete
  cohort-survival figures (English Wikipedia, by half-year cohort): good-faith-newcomer
  survival declined steadily from 35.7% (H1 2004) to 11.3% (H2 2010); golden-newcomer
  survival cratered from 40.0% to 13.2% specifically between H2 2006 and H1 2007,
  coinciding with Wikipedia''s exponential-growth-to-decline inflection point. Rejection
  (revert/deletion in first session) for good-faith newcomers jumped from 15.7% to
  48.6% between 2005 and 2006. Newcomer quality composition itself stayed roughly
  flat post-2006 (good-faith ~38.4% and golden ~36.3% of newcomers on average) --
  ruling out ''declining newcomer quality'' as the cause and pointing instead to rising
  rejection as the driver of falling survival. Scope: English Wikipedia only, explicitly
  flagged as possibly non-generalizable to other-language wikis.'
---

*Suggested by [[researchthe-rise-and-decline-meta-wiki]] — related Wikimedia research page on newcomer quality classification used in the Rise and Decline study*

[Jump to content](https://meta.wikimedia.org/wiki/Research:Newcomer_quality#bodyContent)
From Meta, a Wikimedia project coordination wiki  
|  This page in a nutshell: The quality of newcomers has remained relatively consistent since 2006, however, good-faith newcomer contributions have been being rejected at an increased rate since 2006. The decreasing survival of good-faith newcomers is shown to be a major source of the "decline".  |  
| --- |  
**Contact**
_[University of Minnesota](https://en.wikipedia.org/wiki/University_of_Minnesota "en:University of Minnesota")_
**This page documents a[completed research project](https://meta.wikimedia.org/wiki/Research:Completed_projects "Research:Completed projects").**
Recent research suggests that Wikipedia has been experiencing a decline in active editors since 2007 and implicates the decline on a dramatically reduced rate of newcomer retention . This decline is concerning because active editors are the life-blood of Wikipedia. Without contributors, the encyclopedia would fall stagnant, or worse, the articles might lose value by succumbing to vandals. 
In order to determine the cause of the decline and identify possible solutions, the Wikimedia foundation organized the [2011 Wikimedia summer of research](https://meta.wikimedia.org/wiki/Research:WSOR11 "Research:WSOR11") (WSOR11), a series of research "sprints" conducted by 8 visiting researchers and the Community Dept. staff. WSOR11 identified several organizational barriers to newcomers' entry into Wikipedia. These barriers include: 
  * A lack of clear instructions about where to ask for help. 
  * The increasing difficulty for newcomers to successfully contribute to the encyclopedia as it becomes more complete. 
  * Rejection of newcomer contributions which was shown to be a strong predictor of retention 
  * The growing rate of bot/tool/template based communication to newcomers. 


Together, these results and others were taken to suggest that the decrease in newcomer retention was caused by the hostility and helplessness experienced by newcomers. However, one important confound was not explored: What if the decline was caused by a decrease in the proportion of worthwhile newcomers? The growth in the rate of rejection for newcomer contribution during the exponential growth period of the encyclopedia could be the result of the decreasing quality of newcomers contributions. If this is true, the decreasing retention rate could be explained as an efficient culling of bad editors. This research project is designed to address this possible confound by directly measuring the quality of newcomers to the encyclopedia over time and relating their quality to the rate at which their first contributions to articles are rejected. 
## Methods
In order to determine how the quality of new users has changed over time, the quality of editors first contributions needed to be evaluated. Users from Wikipedia were randomly sampled such that each 6 month period between 2001 and 2011 contained 100 newcomers who performed their first article edit during that 6 month period. This method allows for comparison between the users of one time period to another and the observation of long-term trends. 
To sample the quality of new editors upon entrance to Wikipedia, their first set of contributions was captured in the form of an _edit session_. An edit session is defined as a sequence of edits perfomed via a single user account where no two edits differ by more than one hour. We use this metric under the assumption that, if an editor stops editing for over on hour, they have either left Wikipedia or transitioned to reading from editing. Through the use of this metric, newcomers were observed to have performed an average of 3.67 edits in their first edit session. 
A screenshot of the newcomer quality evaluation tool. Newcomer editors are fed into the coding tool along with their first edit session. A coder could save a category for an editor by selecting 1 of 4 category buttons: vandal, bad-faith, good-faith or golden.
To quickly evaluate the first session quality of users, a qualitative evaluation tool (pictured on right) was built that streamlined the process of viewing an editor's contributions and saving an evaluation. The tool was designed to hide any information about when the edits were made to reduce the possibility of temporal bias among volunteer coders. 
5 coders (3 Wikipedian WMF fellows and 2 Academic Wikipedians) categorized newcomers into four levels of quality based on what they saw in their first edit sessions: 
  * **Vandal** : Editors who are trying to harm other editors, Wikipedia or the subject of BLPs. e.g.: 
    * Racial slurs
    * Blatant spam
    * Libel
    * Blatant spam
  * **Bad-faith** : Editors who are not trying to hurt anyone, but not being helpful either. e.g.: 
    * Glamour article
    * Making fun of friends
    * Trying to be funny
    * Additions of nonsense
  * **Good-faith** : Editors who are trying to be some version of productive but not being successful. e.g.: 
    * Test edits that explicitly say "test" or are self-reverted
    * Contributions of opinion
    * Creation of non-notable articles
  * **Golden** : Editors who are already contributing productively. e.g.: 
    * Edits that make a valuable contribution to Wikipedia


A random sample of 100 newcomers were assessed by all coders to determine inter-rater reliability. Using [Kendall's coefficient of concordance](https://en.wikipedia.org/wiki/Kendall%27s_W "en:Kendall's W"), the reliability between raters was found to be significantly concordant (W=0.413, p=0.002), but the concordance was lower than expected. 
The edit ratings were therefore retroactively lumped together, and the two desirable categories (golden & other good-faith) compared to the two undesirable categories (vandal & other bad-faith). The concordance between these lumped categories was much higher: 
  * 93.6% of new editors were rated consistently by all five established editors
  * 4.6% of new editors were rated more highly by one (or two?[_unclear_]) established editors
  * 1.8% of new editors were rated more poorly by one (or two?[_unclear_]) established editors


Some of this improvement in concordance is due to a mere reduction in the number of categories. 
## Results and Discussion
### The quality of newcomers
The **Newcomer quality over time** plot shows that, as expected, nearly all editors in Wikipedia were doing productive work when they first started editing until 2005. Between the first semester of 2005 and the first semester of 2006, we observe a substantial decline (61.2% to 40.9%) in the number of golden contributors, but also a smaller increase in the amount of good-faith contributors (24.3% to 42.0%). However, from the first semester of 2006 forward, the proportion of good-faith & golden editors appears to remain relatively consistent. Good-faith and golden newcomers represent 38.4% and 36.3% on average from 2006 forward respectively. This result suggests that any increase in rejection or decline in participation from the middle of the exponential growth period forward could not be attributed to a decrease in the quality of new editors. 
The results suggest that established editors (n=5) generally agree on the intentions of a new editor towards the encyclopedia, but often disagree on whether they are actually succeeding in improving it. Semi-automated revert tools were brought in to deal with exponentially-increasing numbers of undesirable newcomers; the results suggest that using these tools to reject undesirable newcomers may have little effect on the desirable ones, but that using them to reject the undesirable _edits_ of good-faith newcomers may decrease retention. 
### Increasing rate of rejection
To explore whether Wikipedia was becoming a more hostile environment to newcomers, we plot the proportion of newcomers with at least one edit rejected (reverted or deleted) in their first edit session. The **Newcomer rejection over time** plot shows that good-faith editors experienced a significant jump in the rate of rejection (15.7% to 48.6%) between 2005 and 2006 (the middle of the exponential growth period of Wikipedia). This result suggests that good-faith newcomers (editors who are trying, but not succeeding at being productive) who joined Wikipedia during and after the exponential growth period were more likely to have their work rejected than editors who joined the project earlier. 
### The source of the decline
Regardless of the cause of the editor decline, it's interesting to know which editors are most substantially affected. After all, if the declining survival of editors could be accounted for by deviant editors, there shouldn't be concern. To explore the retention of the categorized groups of editors, we applied the "survival" metric used in : an editor is considered to be surviving if they makes at least one edit between two and 6 months after their their session. The 6 month cutoff is used to discount a sunset effect on the data for more recent datapoints. The **Newcomer survival over time** figure plots the proportion of surviving editors over time for each of the four editor classes. While there appear to be no substantial changes in the survival of "vandal" and "bad-faith" editors, we observe a steady decline in the survival of "good-faith" from 35.7% in the first semester of 2004 to 11.3% in the second semester of 2010. "Golden" editors saw the most dramatic decrease in retention between the last semester of 2006 and the first semester of 2007 where the rate of survival went from 40.0% to 13.2% of newcomers. 
**Newcomer quality over time** - The proportion of new users falling into each of the four quality categories is plotted over time. Error bars represent standard error based on the [binomial approximation to a normal distribution](https://en.wikipedia.org/wiki/Binomial_distribution "en:Binomial distribution"). The proportion of new editors entering Wikipedia as good-faith or golden has remained relatively consistent since 2006.
**Newcomer rejection over time** - The proportion of new users with at least one first session edit rejected (reverted or deleted) is plotted over time for each of the four quality categories. Error bars represent standard error based on the [binomial approximation to a normal distribution](https://en.wikipedia.org/wiki/Binomial_distribution "en:Binomial distribution"). The rate at which good-faith and golden editors are rejected increased substantially between the 2004-2007 growth period.
**Newcomer survival over time** - The proportion of new users that "survive" (make at least one edit 2-6 months after the first edit session). Error bars represent standard error based on the [binomial approximation to a normal distribution](https://en.wikipedia.org/wiki/Binomial_distribution "en:Binomial distribution"). Between the end of 2006 and the beginning of 2007, the retention of golden editors sharply declined (40.0% to 13.2%).
## Conclusion
This study refutes the hypothesis that the declining retention of new editors can be explained by a decline in the quality of newcomer contributions. The results show that, since the beginning of 2006 (middle of exponential growth) the proportion of new editors who are trying to edit productively has not decreased, but that the rate of rejection has increased, and the rate of survival among good faith editors has decreased. 
Given the predictive power of rejection on retention of new editors , the increased rate of rejection observed in this analysis for good editors supports the hypothesis that the decline in editors could be at least partially due to a change in how good-faith newcomers are received by the community. The increased rate of rejection appears to mainly affect those newcomers that are editing in good-faith, but are not productive the first time they edit using their registered account. However, the most pronounced decrease in survival has affected editors who were already productive in their first edit session. This result suggest that, during the decline, the Wikipedia community has been failing to retain productive editors are the pre-exponential growth levels. 
## Limitations
This analysis was performed over the English Language Wikipedia. The results may not be generalizable to other language encyclopedias. 
## References
  1. Bongwon Suh, Gregorio Convertino, Ed H. Chi, and Peter Pirolli. 2009. The singularity is not near: slowing growth of Wikipedia. In Proceedings of the 5th International Symposium on Wikis and Open Collaboration (WikiSym '09). ACM, New York, NY, USA, , Article 8 , 10 pages. [DOI=10.1145/1641309.1641322](http://doi.acm.org/10.1145/1641309.1641322)
  2. [http://strategy.wikimedia.org/wiki/Editor_Trends_Study](https://strategy.wikimedia.org/wiki/Editor_Trends_Study)
  3. [Research:New_user_help_requests](https://meta.wikimedia.org/wiki/Research:New_user_help_requests "Research:New user help requests")
  4. [Research:New_User_Participation_in_Help_Spaces](https://meta.wikimedia.org/wiki/Research:New_User_Participation_in_Help_Spaces "Research:New User Participation in Help Spaces")
  5. [Research:Newbie_reverts_and_article_length](https://meta.wikimedia.org/wiki/Research:Newbie_reverts_and_article_length "Research:Newbie reverts and article length")
  6. ↑ [Jump up to: ](https://meta.wikimedia.org/wiki/Research:Newcomer_quality#cite_ref-first_session_6-0)
  7. ["Aaron Halfaker"](https://www-users.cs.umn.edu/~halfak/publications/The_Rise_and_Decline/). _www-users.cs.umn.edu_. Retrieved 2016-05-04.
  8. Halfaker, Aaron; Geiger, R. Stuart; Morgan, Jonathan; Riedl, John. ["The Rise and Decline of an Open Collaboration System: How Wikipedia’s reaction to popularity is causing its decline"](https://www-users.cs.umn.edu/~halfaker/publications/The_Rise_and_Decline/halfaker13rise-preprint.pdf) (PDF).
  9. ["Creating, Destroying, and Restoring Value in Wikipedia"](http://reidster.net/pubs/group282-priedhorsky.pdf) (PDF). [doi](https://en.wikipedia.org/wiki/Digital_object_identifier "w:Digital object identifier"):[10.1145/1316624.1316663](https://dx.doi.org/10.1145%2F1316624.1316663).


Retrieved from "[https://meta.wikimedia.org/w/index.php?title=Research:Newcomer_quality&oldid=23757940](https://meta.wikimedia.org/w/index.php?title=Research:Newcomer_quality&oldid=23757940)"
[Category](https://meta.wikimedia.org/wiki/Special:Categories "Special:Categories"): 
  * [Completed research projects](https://meta.wikimedia.org/wiki/Category:Completed_research_projects "Category:Completed research projects")


Search
Research:Newcomer quality
Add languages [ Add topic ](https://meta.wikimedia.org/wiki/Research:Newcomer_quality)
