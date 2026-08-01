---
title: Methodology | Pew Research Center
id: methodology-pew-research-center
tags:
- creator-attrition-income-data-079588
created: '2026-07-27T12:44:07.376476Z'
updated: '2026-07-27T17:52:26.476384Z'
source: https://www.pewresearch.org/internet/2019/07/25/popular-youtube-channels-methodology/
source_domain: www.pewresearch.org
fetched_at: '2026-07-27T12:44:07.260889Z'
fetch_provider: crawl4ai
status: review
type: note
tier: unknown
content_type: unknown
deprecated: false
summary: By Patrick van Kessel, Skye Toor and Aaron Smith
utility_score: 15.0
---

* Report


|
July 25, 2019
#### [A Week in the Life of Popular YouTube Channels](https://www.pewresearch.org/internet/2019/07/25/a-week-in-the-life-of-popular-youtube-channels/)
# Methodology
[Add Us On Google](https://www.google.com/preferences/source?q=https://www.pewresearch.org) 

By [Patrick van Kessel](https://www.pewresearch.org/staff/patrick-van-kessel/), [Skye Toor](https://www.pewresearch.org/staff/skye-toor/) and [Aaron Smith](https://www.pewresearch.org/staff/aaron-smith/)
Table of Contents
  1. [A Week in the Life of Popular YouTube Channels](https://www.pewresearch.org/internet/2019/07/25/a-week-in-the-life-of-popular-youtube-channels/)
  2. [1. Popular YouTube channels produced a vast amount of content, much of it in languages other than English](https://www.pewresearch.org/internet/2019/07/25/popular-youtube-channels-produced-a-vast-amount-of-content-much-of-it-in-languages-other-than-english/)
  3. [2. Children’s content, content featuring children and video games were among the most-viewed video genres](https://www.pewresearch.org/internet/2019/07/25/childrens-content-content-featuring-children-and-video-games-were-among-the-most-viewed-videos-genres/)
  4. [3. Certain keywords in video titles and descriptions were associated with more views](https://www.pewresearch.org/internet/2019/07/25/3-certain-keywords-in-video-titles-and-descriptions-were-associated-with-more-views/)
  5. [Appendix A: Most active popular channels by language](https://www.pewresearch.org/internet/2019/07/25/appendix-a-most-active-popular-channels-by-language/)
  6. [Appendix B: Most popular videos in first week of 2019, by category](https://www.pewresearch.org/internet/2019/07/25/appendix-b-most-popular-videos-in-first-week-of-2019-by-category/)
  7. [Appendix C: 20 title keywords associated with largest increase in median views](https://www.pewresearch.org/internet/2019/07/25/appendix-c-20-title-keywords-associated-with-largest-increase-in-median-views/)


The analysis in this report is based on an examination of videos published the first week of 2019 on YouTube channels with at least 250,000 subscribers. Because there is no exhaustive or officially sanctioned list of all videos or channels (of any size) on YouTube, Pew Research Center developed its own custom list of 43,770 channels that had at least 250,000 subscribers.
####  How we mapped channels
Starting on Jan. 1, 2019, we began scanning the 43,770 popular channels to identify all the videos that each channel had published the previous day. Because of variation in when a video was posted and when we identified it, each video was observed between 0 and 48 hours after it was first published; the average video was observed 22 hours after being uploaded. Once a video was identified, we tracked it for a week, capturing its engagement statistics every day at the same hour of its original publication.
The video data collected includes:
  * Video ID
  * Title and description
  * View count
  * Number of comments
  * Top 10 comments
  * Number of likes and dislikes
  * YouTube categories and topics
  * Duration
  * Date/time published (UTC)
  * Channel ID
  * Channel subscriber count


#### Filtering to English videos
After the video collection process was complete, we examined and classified the subset of videos that were in English. The YouTube API can provide information on the language and country associated with any given channel and/or video, but this information is often missing. Of the 24,632 channels that uploaded a video in the first week of 2019, 73% had available information on their country of origin, and 8% had information on the channel’s primary language. Across the 243,254 videos published by popular channels during the week, 61% had information on the language of their default audio track, and just 26% had information on their default language. (YouTube’s API documentation does not make clear the difference in these values, but one may be self-reported and the other automatically detected by YouTube.) Since some of these values may be self-reported, unverified and/or contradictory, we needed to develop a way to fill in the missing information and correctly determine whether a video contained content in another language or not.
First, the Center coded a sample of videos for (a) whether the video’s title was in English and (b) whether the audio was in English, had English subtitles, or had no spoken language at all. Two different Center coders viewed 102 videos and achieved a 0.94 Krippendorf’s alpha, indicating strong agreement. A single coder then classified a sample of 3,900 videos, and this larger sample was used to train a language classification model.
We trained an [XGBoost](https://xgboost.readthedocs.io/en/latest/) classifier to run through the entire database of videos to categorize each one’s language using the following parameters:
  * Maximum depth of 7
  * 250 estimators
  * Minimum child weight of 0.5
  * Balanced class weights (not used for scoring)
  * Evaluation metric: binary classification error


The classifier used a variety of features based on each video’s title, description, channel attributes, and other metadata when making predictions.
##### Language detection features
The Center used the [langdetect](https://pypi.org/project/langdetect/) Python package to predict the language of different text attributes associated with each video, with each video represented as a list of probabilities for each possible language. These probabilities were computed based on the following text attributes:
  * The channel’s title
  * The channel’s description
  * The video’s title
  * The video’s description
  * The channel and video’s titles and descriptions all combined into one document
  * The concatenated text of the video’s first 10 comments


##### Country and language codes
Videos were assigned binary dummy variables representing the following country and language codes based on metadata returned by the YouTube API:
  * The country code associated with the video’s channel
  * The language code associated with the video’s channel
  * The video’s “language” code
  * The video’s “audioLanguage” code


Additional features were added to represent the overall proportion of videos with each language code across all videos that the channel had produced in the first week of 2019. Each video’s language was represented by the video’s “audioLanguage” code where available; otherwise the “language” code was used. This was based on the hypothesis that information about the other videos produced by a given channel may help predict the language of videos from that channel with missing language information (e.g., if a channel produced 100 videos, 90 of which were labeled as being in Armenian, and 10 of which were missing language information, it is likely that those 10 videos were also in Armenian.)
##### English word features
We also computed additional language features based on whether or not words present in the text associated with each video could be found in lists of known English words. Six different text representations were used:
  * The channel’s title
  * The channel’s description
  * The video’s title
  * The video’s description
  * The channel and video’s titles and descriptions all combined into one document
  * The concatenated text of the video’s first 10 comments 


For each text representation, the text was split apart on white space (i.e., words were identified as sets of characters surrounded by white space-like spaces and tabs) and the following three features were computed:
  * Proportion of words found in WordNet’s English dictionary
  * Proportion of words found in NLTK’s words corpus
  * Proportion of words found in either WordNet or NLTK


##### Text features
Additional features were extracted in the form of TF-IDF (term frequency, inverse document frequency) matrices. Each video was represented by the concatenation of its title and description, as well as the title and description of its channel.
Two matrices were extracted, one consisting of unigrams and bigrams, and another representing 1-6 character ngrams, both using the following parameters:
  * Minimum document frequency of 5
  * Maximum document proportion of 50%
  * L2 normalization
  * 75,000 maximum features


##### Time of publication
Finally, researchers added an additional feature, an integer representing the hour in which the video was published (UTC), on the assumption that English videos may be more likely to be published during certain times of the day due to geographic differences in the distribution of English and non-English YouTube publishers.
The classifier achieved 98% accuracy, 0.96 precision and 0.92 recall on a 10% hold-out set, and an average of 97% accuracy, 0.91 precision, and 0.93 recall using 10-fold cross-validation. To achieve a better balance between precision and recall, a prediction probability threshold of 40% was used to determine whether or not a video was in English, rather than the default 50%.
#### Codebook
[LINK]
The Center then ran a pilot test of the same 250 videos on Amazon Mechanical Turk, in which three separate Mechanical Turk workers were asked to code each video. Their responses were then reconciled into a single value for each item, using a threshold that maximized agreement with the in-house coders. In-house coders resolved their disagreements to produce a single benchmark for comparison with Mechanical Turk.
Agreement thresholds varied for each item, depending on the difficulty of the task. For example, identifying videos with content in another language required close attention, since those that were missed by the automated classification were often lengthy and appeared to be in English. Coders had to search for non-English content carefully, and in-house coders were more likely to notice it than were Mechanical Turk workers. Accordingly, the Mechanical Turk results agreed most closely with the in-house results when a video was marked as containing content in another language if just one of the three Turk workers marked it as such. In contrast, identifying children’s content involves a lot of subjective judgment, and in-house researchers only marked videos that were clear and obvious. Mechanical Turk workers were less discerning, so in this case, in-house judgments were most closely approximated by marking videos as children’s content only when all three Mechanical Turk workers did so. Across all items, this process produced high rates of agreement.
After determining the thresholds that produced results that closely approximated in-house coders, we selected all videos that had been classified as English content, filtered out those that had been removed, and sent the remaining 42,558 videos to Mechanical Turk for coding. Coding took place between April 12-14, 2019.
#### Data processing
Across the full set of 243,254 videos for which data were collected, we intended to capture seven snapshots consisting of each video’s engagement statistics (and those of its authoring channel). The first of the seven snapshots was taken at the time each video was first identified, and the six additional snapshots were each taken during the hour of initial publication for the next six days. To this dataset, we also added rows representing each video’s time of publication, with engagement statistics set to zero. Altogether, we expected each video to produce eight rows of data, totaling 1,946,032 time stamps. However, due to infrequent API errors and videos being removed, 78,273 time stamps (4%) were not captured successfully. Of the 243,254 unique videos, 17% (41,883) were missing information for a single time stamp during the week, and 6% (13,704) were missing more than one day.
Fortunately, many of the missing time stamps occurred between the first and last day of the week, allowing us to interpolate the missing values. In cases where there was data available before and after a missing time stamp, missing values for continuous variables (e.g. time and view count) were interpolated using linear approximation. After this process, less than 2% of all videos (4,262) were missing any time stamps, most likely because they were removed during the week. The same method was used to fill in 354 time stamps where videos’ channel statistics were missing, and 13, 22 and 26,351 rows where the YouTube API had erroneously returned zero-value channel video, view, and subscriber counts, respectively.
#### Keyword analysis
To focus on words that represented widespread and general topics – rather than names or terms specific to particular channels – the Center examined 353 words that were mentioned in the titles of at least 100 different videos published by at least 10 different channels. To a standard set of 318 stop words, researchers added a few additional words to ignore – some pertaining to links (“YouTube”, “www”, “http”, “https”, “com”), others that ambiguously represented the names of multiple content creators and/or public figures (“James”, “Kelly”, “John”), and the word “got,” which was relatively uninformative. The remaining set of 353 words was examined across all videos, as well as within topical subsets of videos.
The Center compared the median number of views for videos that mentioned each word in their titles to the median number of views for videos that didn’t mention the word, then identified those associated with positive differences in median views. To confirm these differences, the Center ran linear regressions on the logged view count of the videos in each subset, using the presence or absence of each word in videos’ titles as independent variables. All words that appeared in the titles of at least 100 videos in each subset (and published by at least 10 unique channels) were included in this set of independent variables. All reported keyword view count differences were significant at the p <= 0.05 level.
The Center also examined words in videos’ descriptions associated with links to external social media platforms. Researchers examined several random samples of videos and developed a list of keywords related to social platforms that appeared commonly in the videos’ descriptions. This list was then used to build a regular expression designed to match any descriptions that contained one or more the keywords:
facebook|(fbW)|twitter|tweet|(twW)|instagram|(igW)|(instaW)|snapchat|(snapW)|twitch|discord|tiktok|(tik tok)|pinterest|linkedin|tumblr|(google +)|(google+)|(g+)
Two Center coders then examined a sample of 200 random video descriptions and coded them based on whether or not each video linked to one of the following social media platforms: Facebook, Twitter, Instagram, Snapchat, Twitch, Discord, TikTok, Pinterest, LinkedIn, Tumblr and Google+. The two Center coders achieved a high level of agreement between themselves (Krippendorf’s alpha of 0.85), as well as with the regular expression pattern (Krippendorf’s alphas of 0.76 and 0.92).
[ Next: Appendix A: Most active popular channels by language ](https://www.pewresearch.org/internet/2019/07/25/appendix-a-most-active-popular-channels-by-language/)
[← Prev Page](https://www.pewresearch.org/internet/2019/07/25/populaacknowledgments/) [Next Page →](https://www.pewresearch.org/internet/2019/07/25/appendix-a-most-active-popular-channels-by-language/)
  1. Furthermore, the 3,600 popular channels that were newly identified between July and December 2018 produced just 808 English-language videos in the first week of 2019. All other English-language videos analyzed in this study were produced by channels that had already been identified by July 2018. 
  2. The first 10 comments for each video were collected using the YouTube API between Feb. 7-13, 2019. 
  3. For categories that were dependent on other classifications (i.e., a video being viewable, being in English, or pertaining to news or politics), researchers compared the subset of videos where both coders agreed on the dependency. 
  4. Researchers checked the API for removed videos on April 10, 2019. 


  * [Appendix D: Content analysis codebook](https://www.pewresearch.org/internet/wp-content/uploads/sites/9/2019/07/Pages-from-DL_2019.07.25_YouTube-Channels_FINAL_codebook.pdf)


### Sign up for our weekly newsletter
Fresh data delivered Saturday mornings
Topics
  * [Digital News Landscape](https://www.pewresearch.org/topic/internet-technology/digital-news-landscape-2/)


Share This Link:


### Related
reportNov 20, 2025
## [Americans’ Social Media Use 2025](https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/)
fact sheetNov 20, 2025
## [Social Media Fact Sheet](https://www.pewresearch.org/internet/fact-sheet/social-media/)
short readsOct 15, 2025
## [In a shift, more Republicans now say calling people out on social media represents accountability](https://www.pewresearch.org/short-reads/2025/10/15/in-a-shift-more-republicans-now-say-calling-people-out-on-social-media-represents-accountability/)
short readsAug 26, 2024
## [Many Israelis say social media content about the Israel-Hamas war should be censored](https://www.pewresearch.org/short-reads/2024/08/26/many-israelis-say-social-media-content-about-the-israel-hamas-war-should-be-censored/)
short readsMar 22, 2024
## [WhatsApp and Facebook dominate the social media landscape in middle-income nations](https://www.pewresearch.org/short-reads/2024/03/22/whatsapp-and-facebook-dominate-the-social-media-landscape-in-middle-income-nations/)
### Most Popular
## Report Materials
  * [Appendix D: Content analysis codebook](https://www.pewresearch.org/internet/wp-content/uploads/sites/9/2019/07/Pages-from-DL_2019.07.25_YouTube-Channels_FINAL_codebook.pdf)


## Table of Contents
  1. [A Week in the Life of Popular YouTube Channels](https://www.pewresearch.org/internet/2019/07/25/a-week-in-the-life-of-popular-youtube-channels/)
  2. [1. Popular YouTube channels produced a vast amount of content, much of it in languages other than English](https://www.pewresearch.org/internet/2019/07/25/popular-youtube-channels-produced-a-vast-amount-of-content-much-of-it-in-languages-other-than-english/)
  3. [2. Children’s content, content featuring children and video games were among the most-viewed video genres](https://www.pewresearch.org/internet/2019/07/25/childrens-content-content-featuring-children-and-video-games-were-among-the-most-viewed-videos-genres/)
  4. [3. Certain keywords in video titles and descriptions were associated with more views](https://www.pewresearch.org/internet/2019/07/25/3-certain-keywords-in-video-titles-and-descriptions-were-associated-with-more-views/)
  5. [Appendix A: Most active popular channels by language](https://www.pewresearch.org/internet/2019/07/25/appendix-a-most-active-popular-channels-by-language/)
  6. [Appendix B: Most popular videos in first week of 2019, by category](https://www.pewresearch.org/internet/2019/07/25/appendix-b-most-popular-videos-in-first-week-of-2019-by-category/)
  7. [Appendix C: 20 title keywords associated with largest increase in median views](https://www.pewresearch.org/internet/2019/07/25/appendix-c-20-title-keywords-associated-with-largest-increase-in-median-views/)


### Help us improve our website
We’d love your feedback. Our questions take about 5-10 minutes to answer.
