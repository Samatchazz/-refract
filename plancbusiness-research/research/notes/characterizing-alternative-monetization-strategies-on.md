---
title: Characterizing Alternative Monetization Strategies on
id: characterizing-alternative-monetization-strategies-on
tags:
- creator-attrition-income-data-079588
- youtube
- creator-earnings
- monetization
- patreon
- sampling-bias
- academic-paper
created: '2026-07-27T11:26:55.254119Z'
updated: '2026-07-27T17:52:25.942671Z'
source: https://arxiv.org/abs/2203.10143
source_domain: arxiv.org
fetched_at: '2026-07-27T11:26:55.250790Z'
fetch_provider: crawl4ai
status: review
type: note
tier: institutional
content_type: paper
deprecated: false
summary: 'Hua, Horta Ribeiro, Ristenpart, West & Naaman (Cornell Tech / EPFL), ''Characterizing
  Alternative Monetization Strategies on YouTube'', arXiv:2203.10143v2 [cs.CY], 6
  Oct 2022 (CSCW). Not an attrition or income-distribution study, but supplies three
  things this research question needs: a hard number on how many creators monetize
  off-platform, a rare direct measurement of lifetime Patreon earnings, and an unusually
  clean demonstration of survivorship/sampling bias in creator datasets.\n\nSAMPLE:
  the YouNiverse dataset - 71,089,725 videos from 136,091 ENGLISH-SPEAKING YouTube
  channels, every one of which had at least 10,000 subscribers at collection time
  (late 2019). Plus 138,538 videos from 291 Alt-lite/Alt-right channels and 63,191
  videos from 279 Manosphere channels (497 ''problematic'' channels total after dedup).
  The authors flag the popularity bias explicitly: the 10,000-subscriber floor means
  the dataset systematically excludes creators who never reached that threshold, and
  the filter is harsher for older cohorts.\n\nADOPTION FINDINGS: 18.4% of videos and
  60.6% of channels used at least one alternative (off-platform) monetization strategy.
  By type - affiliate marketing 11.3% of videos / 51.2% of channels; donations 8.1%
  / 28.4%; own products 3.0% / 11.3%; cryptocurrency 0.2% / 0.7%. Patreon accounts
  for 56.3% of donation-link uses; Bitcoin and Ethereum are 68% of crypto addresses.
  Category variation is large: How To & Style 36.7% of videos / 83.5% of channels
  use affiliate links; gaming 11.3% / 47.5% affiliate but 18.1% / 49.7% donations.
  Adoption rises with subscriber decile: 12.5% of top-decile channels (>440k subs)
  post merchandise links versus 3.6% of the bottom decile (<12.7k subs), and 72% of
  the most productive decile adopt some alternative monetization versus 30% of the
  least productive decile (<=29 videos).\n\nSAMPLING-BIAS DEMONSTRATION (directly
  load-bearing for evaluating other creator statistics): the same quantity measured
  on an unbiased random-prefix sample by Mathur et al. gives 3.49% of How To & Style
  videos containing affiliate links, versus 36.7% here. A tenfold difference produced
  purely by sampling from popular channels instead of the whole platform. Any creator
  statistic drawn from a threshold-gated or self-selected population should be treated
  as inflated by roughly this order of magnitude.\n\nMATCHED-PAIR PRODUCTIVITY RESULT:
  5,730 pairs of channels matched on content category and on both view-decile and
  video-decile for three consecutive months before adoption (adoption month between
  January 2015 and September 2019). In the first month after adoption, adopters posted
  6 videos vs 3 for non-adopters; across months 1-12 adopters posted 63 videos vs
  44, an increase of over 43%. The authors explicitly refuse a causal reading.\n\nDIRECT
  EARNINGS MEASUREMENT: using Graphtreon data, of the 497 problematic channels, 97
  listed a Patreon link and had a MEDIAN LIFETIME Patreon income of USD 5,540; 58
  listed a Bitcoin/Ethereum address with a MEDIAN LIFETIME crypto income of USD 1,155
  (to November 2020). 68 of 97 channels earned over USD 1,000 lifetime on Patreon.
  One outlier, Honey Badger Radio, earned over USD 260,000 on Patreon across six years.
  Caveat stated by the authors: the linked Patreon or wallet may not belong to the
  channel owner, so these may be overestimates.\n\nGEOGRAPHY: ENGLISH-LANGUAGE CHANNELS
  ONLY. The authors note the US is under 20% of YouTube traffic but their dataset
  is entirely English-speaking, so all figures are Western/anglophone and should NOT
  be generalised to Southeast Asia. LONG SOURCE, 16,245 words - candidate for source-analyst
  delegation.'
raw_file: raw/characterizing-alternative-monetization-strategies-on.pdf
doi: arXiv:2203.10143
utility_score: 13.0
---

Characterizing Alternative Monetization Strategies on
YouTube
YIQING HUA∗, Cornell Tech, USA
MANOEL HORTA RIBEIRO∗, EPFL, Switzerland
THOMAS RISTENPART, Cornell Tech, USA
ROBERT WEST, EPFL, Switzerland
MOR NAAMAN, Cornell Tech, USA
One of the key emerging roles of the YouTube platform is providing creators the ability to generate revenue
from their content and interactions. Alongside tools provided directly by the platform, such as revenue-sharing
from advertising, creators co-opt the platform to use a variety of off-platform monetization opportunities. In
this work, we focus on studying and characterizing these alternative monetization strategies. Leveraging a
large longitudinal YouTube dataset of popular creators, we develop a taxonomy of alternative monetization
strategies and a simple methodology to detect their usage automatically. We then proceed to characterize the
adoption of these strategies. First, we find that the use of external monetization is expansive and increasingly
prevalent, used in 18% of all videos, with 61% of channels using one such strategy at least once. Second, we
show that the adoption of these strategies varies substantially among channels of different kinds and popularity,
and that channels that establish these alternative revenue streams often become more productive on the
platform. Lastly, we investigate how potentially problematic channels – those that produce Alt-lite, Alt-right,
and Manosphere content – leverage alternative monetization strategies, finding that they employ a more
diverse set of such strategies significantly more often than a carefully chosen comparison set of channels. This
finding complicates YouTube’s role as a gatekeeper, since the practice of excluding policy-violating content
from its native on-platform monetization may not be effective. Overall, this work provides an important step
toward broadening the understanding of the monetary incentives behind content creation on YouTube.
CCS Concepts: • Human-centered computing →Collaborative and social computing; Empirical stud-
ies in collaborative and social computing.
Additional Key Words and Phrases: YouTube, platform, monetization, problematic content
1
INTRODUCTION
YouTube is one of the most popular, important, and consequential technology platforms that exist
today. According to Pew [50], in the U.S., around three-quarters of adults use YouTube for diverse
reasons that include passing time, deciding whether to buy a particular product, and understanding
what is happening in the world—and the U.S. only accounts for less than 20% of the site’s traffic [2].
Despite YouTube’s influence on the global information ecosystem, the platform downplays its own
significant agency by claiming that it is an “open-armed, egalitarian facilitation of expression, not
an elitist gatekeeper with normative and technical restrictions [24].”
One of the major roles YouTube plays goes beyond providing a neutral distribution infrastructure.
Since 2008, the platform has shared ad revenues with some content creators through the “YouTube
partner program [69].” More recently, it added new monetization features such as super-chats
(allowing small one-time donations to creators during live streams) [61]. This business model
requires YouTube to navigate between the needs of content creators, end users, and advertisers,
while aiming to turn a significant profit [13]. As a result, YouTube has placed guidelines and
∗Both authors contributed equally to this research.
Authors’ addresses: Yiqing Hua, Cornell Tech, USA, yiqing@cs.cornell.edu; Manoel Horta Ribeiro, EPFL, Switzerland, manoel.
hortaribeiro@epfl.ch; Thomas Ristenpart, Cornell Tech, USA, ristenpart@cornell.edu; Robert West, EPFL, Switzerland,
robert.west@epfl.ch; Mor Naaman, Cornell Tech, USA, mor.naaman@cornell.edu.
arXiv:2203.10143v2  [cs.CY]  6 Oct 2022


---

2
Yiqing Hua et al.
Donation
Products by the Channel
Aﬃliate Marketing
(a)
Audience
Creator
Alternative Monetization 
Advertiser
Content
Ads &
Content
Attention
Monetization through Ad Revenue
Ads &
Attention
(b)
Fig. 1. Alternative monetization strategies: (a) Example video descriptions on YouTube employing alterna-
tive monetization practices, labeled (in color) with the type of strategies used in each. (b) Schema portraying
how alternative monetization strategies allow creators to repurpose YouTube’s affordances to earn money
directly from their audience.
restrictions about who and what is allowed to monetize directly on their platform [70]. Content
that violates YouTube’s policies is “demonetized,” i.e., banned from receiving ad revenue.
At the same time, platforms are often co-opted and their affordances are repurposed and exploited
by users [11, 43, 47, 59]. One such affordance is the video description, written by the creator and
shown alongside YouTube videos. The description consists of a text box under the video that
allows rich formats such as links to other websites. Using this text box, creators started including
links to alternative monetization services that help them generate revenue outside the YouTube
platform. For instance, content creators may include a link to a page on patreon.com, a website
that allows direct contributions through one-time payments or recurring subscriptions. These
practices, which we refer to as alternative monetization strategies, piggyback on YouTube’s content
distribution infrastructure to create money streams between viewers and content creators. Fig. 1(a)
illustrates two examples of video descriptions and demonstrates the use of three different alternative
monetization strategies. The diagram in Fig. 1(b) shows a schematic overview of how alternative
monetization contrasts with YouTube’s shared ad revenue as a source of the creator’s income.
Alternative monetization may have significant consequences for how YouTube plays its gate-
keeper role and for the creators who, as market players, may aim to produce content that maximizes
their profits [42]. For example, creators may no longer care about maximizing exposure, which
correlates with ad-based revenue. Instead, they may emphasize relatability [39] to a smaller but
devoted audience who are more likely to contribute. The consequences of this change in incentives
are nontrivial. On the one hand, weakening the link between exposure and earnings may allow
higher-quality content to be produced. On the other, it may also encourage creators to embrace
divisive rhetoric, as observed in Lewis’s analysis of reactionary YouTubers [36]. Even if videos are
demonetized by YouTube for breaching their policy, it could be that, due to alternative monetization
strategies, creators still have substantial financial incentives to create content espousing false,
hateful, and divisive narratives.
It is thus critical to describe and characterize the mechanisms used for alternative monetization on
YouTube. Although past research has examined YouTube’s role as a distribution platform [12, 23, 51],
less attention has been given to how its affordances are used to earn money (e.g., [40]). In that


---

Characterizing Alternative Monetization Strategies on YouTube
3
context, we argue that understanding alternative monetization practices is key to deciphering the
incentives that shape our online information ecosystem and to better understanding YouTube’s
role as a gatekeeper.
To this end, the present paper asks the following research questions:
RQ1 What is the landscape of alternative monetization strategies used by creators to profit outside
of the YouTube platform, and how did it evolve?
RQ2 What is the relationship between content production and the adoption of alternative moneti-
zation strategies?
RQ3 Are alternative monetization strategies used differently by creators of problematic content
who might not be allowed to monetize on YouTube directly?
We explore these questions on a longitudinal YouTube dataset with over 71 million videos
published by over 136,000 channels (Section 3.1). On YouTube, “channels” refer to the public
accounts managed by one or more content creators to upload video content. To analyze this data,
we carefully created a taxonomy of alternative monetization strategies, which consists of four
broad categories: 1) requests for donations through third-party platforms (e.g., PayPal, Patreon);
2) affiliate marketing; 3) sales of products and services related to the channel; and 4) requests for
cryptocurrency donations (Section 3.2). Then, we developed a semi-supervised methodology to
automatically detect the usage of such strategies in video descriptions (Section 3.3), which allows
quantitative measurements at scale. Below, we summarize our key findings.
First, content creators included in the analyzed data widely use alternative monetization strategies.
A majority (61%) of the channels in the studied data use at least one form of alternative monetization
in the aforementioned taxonomy, in a total of 18% of all videos. These practices have become
increasingly more prevalent over the years, dominated by affiliate marketing and requests for
direct donations via services like Patreon. For example, in 2018, around 20% of the channels linked
to external services to collect donations, compared to only 2.7% in 2008. The adoption of such
strategies is non-uniform: more popular YouTube channels tend to use them more often, and
channels tend to adopt strategies tailored to their content. For instance, channels producing “How
to & Style” content are more likely to use affiliate marketing (83.% vs. 51.2% among the full set of
channels), as they often review clothes, tools, and products.
Second, we show that the adoption of alternative monetization strategies is linked to channel
productivity in terms of the rate of content creation. Although we cannot draw causal conclusions,
we show that in the first year after adopting alternative monetization, a channel’s content production
increases by 43% on average. Therefore, when analyzing the content creation dynamics on YouTube,
alternative monetization strategies should be considered an important factor contributing to higher
productivity.
Third, we show that the practice of using alternative monetization strategies is widespread
among problematic content creators, who are likely to be—or at risk of being—shut out from directly
monetizing on the YouTube platform. Several high-profile incidents brought attention to creators
of problematic content making money from their YouTube videos, even when being restricted by
YouTube [5, 18, 54, 65]. We found that channels from previously studied fringe communities, i.e.,
the Alt-lite, the Alt-right [26, 35], and the Manosphere [37], are more likely to adopt monetization,
tend to advertise monetization links more frequently, and use a more diverse set of strategies to
monetize, as compared to a carefully chosen comparison set of similar channels. These fringe
channels also rely more on asking for donations through cryptocurrencies or subscription and
fundraising services, often employing particular subscription platforms such as subscribestar.com
and hatreon.net. As YouTube has taken “demonetization” actions on their platform against fringe


---

4
Yiqing Hua et al.
and other problematic content [55], the prevalence of alternative monetization may weaken or
even invalidate the effect of this type of platform gatekeeping.
Overall, our results call for more nuance in analyzing the monetary incentives on YouTube
and other content-distributing platforms. This view may help better understand the practices and
incentives of content production in the micro-celebrity age [36, 42], as well as the roles of online
platforms as curators and gatekeepers [24, 25].
2
BACKGROUND AND RELATED WORK
In this section, we review the background and previous work on YouTube as a platform, its content
creation dynamics, and its struggles with problematic content.
2.1
YouTube as a platform
Research in the area of platform studies came on the heels of the works on participatory culture [8,
28]. In studying online platforms such as YouTube, scholars are interested in the tension between
the multiple roles they play: providing “affordances that support innovation and creativity” on the
one hand, and “constrain participation and channel it into modes that profit” on the other [47]. One
of these tensions is the conflict between allowing creators to have free and flexible expression, and
platforms’ profit goals and their need to define legitimate use [58].
A significant body of research has documented YouTube as a platform [24, 47, 58, 66] and the
consequences of viewing it as such. According to Gillespie, the carefully chosen term “platform”
allows YouTube to portray itself as a neutral facilitator, instead of a gatekeeper who intervenes
in what content gets published [24]. However, as platforms grow larger and become more and
more important in our information ecosystem [11, 58], their choices of what and how content gets
published directly impact the public discourse [24, 25, 58, 60].
Indeed, YouTube heavily engages in gatekeeping and content moderation actions, determining
who can share, gain distribution, and monetize on the platform [4, 55]. YouTube has community
guidelines that, when violated, can lead to the removal of videos and the suspension of channels.
Further, YouTube moderates videos that are allowed on the platform but at the borderline of
violating policies, not recommending them to users [55]. This change in YouTube’s recommendation
mechanism is in reaction to the recent criticism that users are recommended problematic videos [57].
Beyond publishing decisions, YouTube also has the power over who and what gets monetized on
its platform [70], and often resorts to demonetization as a moderation strategy for problematic
content on the platform [65, 68].
While YouTube allows creators to profit from their content using ad revenue-share, often ignored
is how users co-opt the platform affordances to monetize via other means. To the authors’ knowledge,
as of January 2022, YouTube does not regulate the usage of alternative monetization on its platform.
In fact, YouTube sometimes partners with alternative monetization services to provide creators with
more opportunities to monetize their content [3]. Analyzing alternative monetization practices
allows us to complicate our understanding of the tension between the platform and its users,
and provides insight into profit-driven motivations for content creation on the platform. This
understanding of off-platform monetization can also shed light on YouTube’s moderation actions
as a platform, including demonetization measures (whose effectiveness is potentially limited by
alternative monetization strategies).
2.2
Content creation dynamics and motivations
Prior research has argued that the core business of YouTube is its participatory culture [11]: content
creators on the platform produce videos that attract an audience, and the audience’s attention is
then sold to advertisers [69]. The resulting revenue from this participation is generally shared by


---

Characterizing Alternative Monetization Strategies on YouTube
5
the creators and the platform on the respective platform’s terms [69, 70]. The YouTube platform
houses all kinds of creators, ranging from amateur video producers to mainstream media outlets,
who are often motivated by different needs [10, 29, 36, 42], including profit. Our work, therefore,
extends the previous literature on the motivations and practices of YouTube creators.
The development of the relationship between YouTube and content creators on the platform
was not without its hiccups. Content creators have criticized the unpredictability of the platform’s
monthly revenue and the enforcement of YouTube policies [13]. Some creators found that their
livelihoods are often threatened by copyright strikes or by changes in the rules that make their
content ineligible for monetization [17], particularly affecting content related to groups that are
already disadvantaged or underrepresented [52, 67]. These tensions have been accentuated around
incidents referred to by YouTubers as “adpocalypses” [34]: sudden changes of guidelines prompted
by legal hurdles and boycotts from advertisers and by the deployment of automated systems
on YouTube to demonetize content [17]. Aiming to address these issues, some YouTubers have
unionized [15, 56] to negotiate fair treatment.
As the influence of content creators and their dissatisfaction with the ad-based model rose,
an ecosystem of services and platforms that allowed other forms of monetization emerged [49].
Patreon (patreon.com) provides a service where fans can support creators with monthly payments
in exchange for custom perks. Teespring (teespring.com) provides the infrastructure for creators to
sell customized merchandise, such as mugs, t-shirts, and hoodies. Amazon and numerous other
e-commerce marketplaces let creators share sales revenue through sponsored links. As previously
mentioned, we refer to monetization using these off-platform services, which “piggyback” on
YouTube’s platform and distribution infrastructure, as alternative monetization strategies. We note
that these strategies are not always perceived as monetization by viewers: Mathur et al. [40] studied
endorsements on YouTube, showing that few creators disclose the endorsements and that users
often fail to understand affiliate marketing as advertising.
The alternative monetization strategies we study are intimately linked to micro-celebrity practices
on YouTube. To attract more attention and the monetary benefit that comes with it, some content
creators adopt micro-celebrity [39] and self-branding [32] practices. Creators exploit the platform’s
affordances and video-based communications to appear authentic, accessible, and intimate to their
audience [48]. The platform also hands creators who lack strong public identities the resources to
self-promote [32]. As viewers develop a strong parasocial relationship with content creators who
become “micro-celebrities,” they are willing to provide direct donations to support the creators’
work, buy a personalized mug, or even attend “real-life” (paid) events to meet the creators [1] – i.e.,
support the creator via some of the alternative monetization strategies.
2.3
Problematic content on YouTube
Researchers have long documented and studied the activities of fringe communities on YouTube,
including the distribution and attention they receive on the platform. As Tufekci argued in her 2018
New York Times article, YouTube’s central technological affordance, its recommendation system,
might recommend increasingly more “extreme” content to its audience, thus arguably making
the platform “the great radicalizer” [57]. The “radicalization pipeline” was empirically observed
by Ribeiro et al. in a large-scale quantitative study, where they showed that users consistently
migrated from contrarian communities to overtly white supremacist content [26] (the cause of this
pipeline, however, has been largely debated [42]). Although YouTube eventually adopted a more
rigid stance towards these channels and banned several of the most prominent ones [46], a recent
report published in 2021 shows that exposure to extremist content remains disturbingly high [16].
For example, approximately one in ten of that study’s participants had viewed at least one video


---

6
Yiqing Hua et al.
Table 1. Data summary: Basic statistics of the datasets used in this paper.
Dataset
Category
Videos
Channels
YouNiverse
71,089,725
136,091
Alt-lite
78,078
114
Fringe
Alt-right
17,984
86
Manosphere
63,191
279
from an extremist channel (9.2%) [16]. Beyond far-right content, previous work has also shown
other problematic content on YouTube, including harassment [38] and misogynistic videos [37, 44].
The aforementioned work on the dynamics and motivations behind content creation on YouTube
is linked to the rise of problematic content on the platform. Munger and Phillips [42] suggest
that the ease of producing, distributing, and monetizing content would lead to a more diverse
political media environment, which would include more extreme views. According to Lewis [36],
political content creators adopt micro-celebrity practices that stress relatability, authenticity, and
accountability to appear more credible than mainstream media. In this work, we show that the
content creators who may be more likely to post content that potentially violates YouTube’s policies
take advantage of alternative monetization strategies. This trend is particularly relevant since these
creators are often subjected to demonetization [55].
3
METHODS
To provide a robust view of the alternative monetization strategies used on YouTube, our methods
build on YouTube datasets with appropriate channel- and video-level metadata to 1) create a
taxonomy of alternative monetization methods on the platform; and 2) develop techniques to
automatically identify the types of alternative monetization strategies used by different YouTube
channels, extracting information from the URLs appearing in video descriptions. These methods
provide the core input for our analysis of alternative monetization schemes on YouTube.
3.1
Data
To address our research questions, we seek to acquire two types of datasets. First, we need a dataset
that is generally representative of YouTube channels/videos and that provides a large enough sample
to support broad coverage of the trends in the data. Second, to answer RQ3 about problematic
content, we require a dataset that contains data from channels known to produce such content.
Ideally, the datasets would have significant temporal overlap. To satisfy the first goal of broad
coverage, we employ data from the YouNiverse [27] dataset. To allow the analyses of problematic
content creators, we compile datasets of “Alt-right”, “Alt-lite” and “Manosphere” creators collected
by researchers in previous work [26, 37]. We summarize the data in Table 1 and describe it below.
• YouNiverse: A dataset comprised of 71,089,725 videos from 136,091 English-speaking YouTube
channels [27]. To collect the data, the researchers used websites that collect lists of YouTube
channels and the metadata related to the popularity of the channels (number of views
and of subscribers) over time. The researchers then collected video metadata directly from
YouTube (in late 2019) [27]. Channels present in YouNiverse were compared with the catalog
of socialblade.com, a prominent tracker of YouTube statistics that tracks over 23 million
YouTube channels.1 Researchers found that the YouNiverse dataset covers around 25% of
the top 100k most popular YouTube channels and around 35% of the top 10k most popular
1https://socialblade.com/info


---

Characterizing Alternative Monetization Strategies on YouTube
7
(both measured by number of subscribers) [27]. All channels in the dataset had at least 10,000
subscribers when data collection happened.
• Alt-lite and Alt-right: A dataset comprised of 138,538 videos from 291 YouTube chan-
nels [26]. Each channel was grouped into one of three categories assigned by the same
researchers: the Intellectual Dark Web, the Alt-lite (I.D.W.), and the Alt-right. The data was
collected through snowball sampling: from a set of seed channels, authors found and an-
notated other channels through YouTube’s recommendation and search functionality [26].
For our analyses here, we focus on the 200 channels in the dataset labeled by the authors as
Alt-lite or Alt-right, two categories containing far-right content creators.
• Manosphere: A dataset comprised of 63,191 videos from 279 YouTube channels related to
Manosphere content [37]. This dataset was collected with the same methodology and during
the same period as the “Alt-lite and Alt-right” dataset described above. The dataset includes
data related to a mix of anti-feminist groups broadly referred to as the “Manosphere,” an
eclectic denomination that includes communities such as Incels, Men’s Rights Activists, Men
Going Their Own Way, and Pick Up Artists [35, 37].
For simplicity, we group together the data from all Alt-lite, Alt-right, and Manosphere channels
across the two latter datasets and refer to it as the Problematic Content dataset in the rest of this
paper. In the YouNiverse dataset, we consider a channel’s content category to be the most frequent
category assigned by content creators when uploading their videos (e.g., Music, People & Blogs,
News & Politics). In the Problematic Content dataset, we consider a channel’s content category to
be the labels assigned by the annotators, categorizing channels as belonging either to the Alt-lite,
the Alt-right, or the Manosphere. Most of the videos in our datasets have view counts that were
collected at crawl time.2 For videos that did not have a view count (0.003% of the combined dataset),
we impute the average number of views for videos on the respective channel.
3.2
Developing a taxonomy of alternative monetization methods on YouTube
We devised a taxonomy of alternative monetization methods on YouTube by qualitatively coding a
random sample of our datasets. In what follows, we describe how we obtained this random sample
and the details of the coding process.
Obtaining the sample. We started by sampling videos from the YouNiverse and Problematic
Content datasets. The sample includes videos with both common and controversial content, videos
produced at different times, and videos from channels of different popularity and from different
content categories. For each video, we defined three attributes: the number of views it received,
the semester in which it was posted (first vs. last six months of the year), and its channel content
category, which is defined differently in each dataset (see above). Considering these attributes, we
first split videos into buckets according to their content category and semester. Then, inside each
bucket, we further split videos into five ranges based on the percentiles of their number of views.3
Limited by the capacity of the annotators, for each percentile range, we sampled up to one random
video, which resulted in a total of 3,373 videos to be annotated.
Iterative development of the taxonomy. In the first step of the development of the taxonomy,
these 3,373 videos were split between two annotators, both authors of this paper. Each annotator
analyzed the video descriptions to identify links (e.g., amazon.com, paypal.com, etc.) and keywords
(e.g., donate, coupon, etc.) related to monetization. The idea here was to carefully document different
2Between the 12th and the 17th of September 2019 for the YouNiverse dataset; Between 19th and 30th of May 2019 for the
Fringe dataset.
3[0, .25], [.25, .5], [.5, .75], [.75, .99], [.99, 1]. Views sorted from small to large.


---

8
Yiqing Hua et al.
off-platform monetization strategies used by content creators. After this initial inspection phase
(meant to provide general insight into alternative monetization strategies), annotators shared their
notes and developed an initial taxonomy, which was iteratively improved as they re-annotated all
3,373 examples together. The final taxonomy consists of four different labels, each corresponding
to a different alternative monetization strategy on YouTube:
[DO] Requests for donation: Direct requests for financial support. This can be done through a
link to a third-party service such as PayPal and Patreon, or to a website owned by the content
creator (e.g., https://www.contentcreator.com/donate/). Note that in this category, we also
include appeals to contribute to cause-based fundraising platforms such as GoFundMe. In
fact, some of the fundraising platforms are known to have been involved in fundraising for
far-right causes [14]. We discuss nuances related to this decision in Appendix A.
[CR] Requests for cryptocurrency: Direct donations through cryptocurrencies. For example,
creators may share their Bitcoin addresses and prompt viewers to send money to them.
[PC] Sales of products/services by the channel: Selling products and merchandise produced
or marketed directly by the creator or the channel. For example, T-shirts and mugs with the
channel’s logo on them, or health products that are sold by the creator.
[AM] Affiliate marketing: Selling products or offering a service not directly associated with the
channel or the content creator. Here, creators benefit financially by receiving a referral bonus
when a sale is made. For example, creators often link to the gears they use to film their videos
on Amazon through a special URL where they get a commission for each sale made.
Since we employ these categories in subsequent quantitative analysis, we additionally validate the
final taxonomy by assessing annotator agreement, as suggested in the general guidelines proposed
for CSCW research [41]. The same authors as earlier independently annotated 100 videos with
labels according to any of the four alternative monetization practices each video description may
contain. Considering each category as a binary variable (present/absent), Cohen’s kappa indicated
near-perfect agreement ([DO]: 95%, [CR]: 100%, [PC]: 90%, and [AM]: 89%).
3.3
Detecting alternative monetization strategies
To explore the alternative monetization ecosystem in our datasets, we need a scalable method to
identify the use of alternative monetization strategies in the videos in our datasets. For the [CR]
category, we use regular expressions to find cryptocurrency addresses. For the other alternative
monetization strategies, we adopt a similar methodology as in prior work [40]. Specifically, we
curate a set of labeled domains related to different alternative monetization strategies and use
these to guide our analyses, considering that all instances of the same domain belong to a given
monetization strategy. We detail our method for domain extraction below and release the labeled
domains at [anonymized for review].
Identifying Cryptocurrency Requests. To identify requests for donation through the use of
cryptocurrencies ([CR] category), we use a cryptocurrency address validator4 to extract valid
cryptocurrency addresses from the video descriptions. We match addresses for seven popular
coins: Bitcoin, Ethereum, Litecoin, Dash, Ripple, Dogecoin, and Neo. Additionally, for Bitcoin and
Ethereum addresses, we obtain the full transaction history of the corresponding coin addresses
using the blockchair API,5 which allows us to calculate the lifetime earning for any Bitcoin and
Ethereum addresses.
4https://github.com/k4m4/cryptaddress-validator
5https://blockchair.com/


---

Characterizing Alternative Monetization Strategies on YouTube
9
Identifying Use of Strategies Using Associated Domains. Detecting the use of other types
of alternative monetization strategies is less trivial, since there is no exact regular expression to
match a video description and tell us whether an alternative monetization strategy is being used.
Fortunately, one of the important aspects of alternative monetization strategies is that they have to
redirect the user to a third-party website, where a sale or donation will occur. Therefore, we resort
to a methodology based on label propagation that associates domains present in video descriptions
with a specific monetization strategy.
Our methodology is based upon a simple observation. Frequently, on YouTube, links are pre-
ceded by brief descriptions. For instance, to display a link selling channel-specific merchandise
([PC]), a content creator may write: “buy merch: www.teespring.com/YouTuberX.” These brief
descriptions can be abstracted as a sequence of word–domain co-occurrences: (buy, teespring),
(merch, teespring). Using this abstraction, we can find other category-related words and do-
mains in the data with this single seed example. For instance, we can look for other words
that occur with the domain teespring, and may find another video description: “mugs/t-shirts:
www.teespring.com/YouTuberY,” suggesting that the words mugs and t-shirts are also related
to the merchandise category ([PC]). In a similar fashion, to find other domains selling merchandise,
we may look for domains that co-occur with the word merch.
Leveraging this intuition, we apply the following method to extract domains related to alternative
monetization strategies. First, we build an undirected bipartite graph representing words and
domains. For each word–domain pair (𝑖, 𝑗) where the word appears before the domain for exactly
𝑘times in our datasets, we add an edge with weight 𝑘between the nodes corresponding to word 𝑖
and domain 𝑗. Next, we define a set of seeds in this graph: words and domains related to one of the
monetization categories, as well as words and domains that are not directly related to monetization.
For example, seeds for the donation category include words and domains such as donate and
patreon. The non-monetization category includes words and domains such as follow and twitter.
Last, we run a standard label propagation algorithm [72] on this graph using the aforementioned
seed words and domains as the labeled examples. The algorithm iteratively propagates the label of
the seed words and domains to other words and domains that are frequently used together. We
detail this label propagation methodology as well as how we validate its output in Appendix A.
The output of our method is a set of labeled keywords and domains, each associated with at most
one alternative-monetization label. We only use domains—and not keywords—for the following
analyses, since keywords could also appear in other contexts beyond descriptions that precede
external links, which may lead to inaccurate label inferences. We leverage this set of domains along
with the cryptocurrency addresses to infer the types of alternative monetization strategies used by
each channel and video in our dataset.
3.4
Limitations
We highlight some of the limitations of our methodology and data. First, our datasets and analyses
are limited to English content only. Second, the datasets we employ were crawled in 2019 and may
not include newer types or trends in alternative monetization strategies. Third, in this initial work,
we focus on three types of problematic content, Alt-lite, Alt-right, and Manosphere, due to their
negative impact on the audience and potentially on the society at large. We leave the exploration
on other types of problematic content to future work. Fourth, our taxonomy was developed on a
limited number of samples. It is possible that there are alternative monetization strategies which
are not included in our sample, and hence are not captured by our taxonomy. However, we did not
observe such a strategy as we analyzed more data manually for further analyses. Such a strategy
is also likely not widely adopted, therefore is out of the scope of this initial work. Fifth, for the
YouNiverse dataset, we use the content categories assigned by content creators as a proxy to estimate


---

10
Yiqing Hua et al.
Table 2. Prevalence of alternative monetization strategies: We depict the prevalence of alternative
monetization strategies in the YouNiverse dataset, relative to the number of videos (in a) and of channels
(in b). Both tables show results stratified by 8 of the 15 YouTube content categories as well as aggregated
across all 15 categories (All). Columns in both (a) and (b) show results stratified according to the different
monetization categories and aggregated across all categories (Any). We mark in bold the categories of which
the videos or the channels are 1.2 times more likely to use a certain type of alternative monetization strategy,
i.e., the percentage of the entry is 20% larger than the corresponding aggregated values in the last row.
(a) video level (%)
(b) channel level (%)
Categories
PC
AM
DO
CR
Any
n(×105 )
PC
AM
DO
CR
Any
n (×103 )
Entertainment
2.9
8.2
6.7
0.3
14.1
117
12.8
46.0
27.3
0.6
55.7
23
Films
1.7
8.8
6.4
0.1
14.3
23
8.6
37.2
27.9
0.3
51.0
7
Gaming
7.4
11.3
18.1
0.1
29.4
133
18.3
47.5
49.7
0.6
68.0
20
Howto&Style
1.5
36.7
6.0
0.2
39.6
38
10.0
83.5
23.5
0.5
85.4
12
Music
1.3
7.1
4.7
0
11.5
80
6.5
40.0
17.2
0.2
47.6
24
People&Blogs
2.7
14.4
7.3
0.3
20.2
67
10.4
50.4
23.7
0.7
56.7
18
Science&Tech
1.7
25.9
7.3
0.8
29.3
23
8.9
77.8
33.8
3.2
79.9
5
Travel
2.2
12.6
7.7
0.1
17.3
11
11.2
57.8
30.8
0.7
62.9
2
All
3.0
11.3
8.1
0.2
18.4
694
11.3
51.2
28.4
0.7
60.6
136
the content type of channels and video. However, content creators might not share a consistent
definition of categories and may mislabel their content, adding noise to our analysis and findings.
Sixth, we assumed that the video description, collected when each dataset was crawled, had been
posted together with the video. In reality, content creators may retrospectively edit previously
uploaded videos to include alternative monetization links, which may affect some of the results of
the longitudinal analyses of Section 5.
Lastly, we label monetization practices at the domain level, which may be incomplete or inaccurate
in some cases. For instance, creators may share links to merchandise of other creators, or link to
products on Amazon or other e-commerce platforms that are not affiliate links. Also, a single domain
may be associated with multiple monetization strategies. We alleviate concerns associated with
this limitation by performing an extensive set of validation experiments (described in Appendix A).
We find that our method is inaccurate in labeling donation-related domains ([DO]), returning
many false positives. This issue was resolved by manually annotating the (relatively few) domains
predicted to be donation-related. After this post-processing step, for each alternative monetization
category, we manually inspect 100 URL samples that are labeled with the category, along with
the surrounding context of the URL. We show that 91.5% of the 400 inspected URLs are correctly
labeled by our method. The category with the lowest accuracy is Affiliate Marketing ([AM]), with
75% accuracy. We note that 72% of the false positive cases for this category are due to the fact
that URLs selling channel-related products are misclassified as affiliated marketing. One typical
example is an Amazon link (a domain often used in the context of affiliate marketing) that sells
a book written by the content creator. These accuracy issues may lead to an over-estimation of
the [AM] category and an under-estimation of the [PC] category. We argue that this has minimal
impact on our main takeaways, as they do not build upon the precise differentiation between these
two categories.


---

Characterizing Alternative Monetization Strategies on YouTube
11
1
2
3
4
5
6
7
8
9 10
Subscriber Decile
5.0%
7.5%
10.0%
12.5%
Products Channel
1
2
3
4
5
6
7
8
9 10
Subscriber Decile
25.0%
30.0%
35.0%
40.0%
Aﬃliate Marketing
1
2
3
4
5
6
7
8
9 10
Subscriber Decile
16.0%
18.0%
20.0%
22.0%
Donation
1
2
3
4
5
6
7
8
9 10
Subscriber Decile
0.2%
0.3%
0.4%
0.5%
0.6%
Crypto
Fig. 2. Popularity and alternative monetization: We analyze the relationship between the popularity of
channels and the usage of alternative monetization strategies. We divide all channels that have published
any video in 2019 according to their number of subscribers in 10 deciles. Then, for each monetization strategy,
we calculate the percentage of channels that monetize in each decile. Note that the 𝑦-axis scales differ and
that error bars represent 95% CIs. We repeat the analyses done in this figure dividing channels in quintiles
and vigintiles (i.e., groups of 5 and of 20), and obtained largely the same results.
4
THE PREVALENCE OF ALTERNATIVE MONETIZATION STRATEGIES
We begin by broadly characterizing the adoption of alternative monetization strategies in the YouNi-
verse dataset, as shown in Table 2. Recall that here we are considering relatively popular channels
(10,000+ subscribers at the time of data collection). More specifically, we measure the percentage of
videos and channels in the YouNiverse dataset that contain at least one video description that has a
monetization-related domain or cryptocurrency address.
We find that, according to this criterion, 18.4% of the videos and 60.6% of the channels in the
dataset have used at least one alternative monetization strategy, as shown in the bottom row of
Table 2. The most common alternative monetization strategy is affiliate marketing [AM] (used in
11.3% of the videos and 51.2% of the channels), followed by donation [DO] (8.1%; 28.4%), products
by the channel [PC] (3.0%; 11.3%) and cryptocurrencies [CR] (0.2%; 0.7%). These results suggest
that alternative monetization practices are extremely prevalent in the YouTube content creation
ecosystem.
Additionally, we also find that different video and channel categories have different monetization
“fingerprints,” that is, their choice of alternative monetization strategies varies greatly. This can be
observed in the adoption percentages stratified per category, also in Table 2 (we depict eight out of
the 15 content categories available on YouTube, the same used by Mathur et al. [40]). For example,
How To & Style videos often review clothes, tools, and products. In that context, it is not surprising
that we find that channels and videos in this category use the affiliate marketing [AM] monetization
strategy much more than the general percentage (36.7% of videos; 83.5% of channels). Gaming
channels, on the contrary, use the affiliate marketing [AM] monetization strategy less often (11.3%;
47.5%), but are much more likely to sell merchandise (7.4%; 18.3%) and ask for donations (18.1%;
49.7%). Altogether, these results suggest that content creators tailor their alternative monetization
strategies to the content that they produce.
We compare our results with the work of Mathur et al. [40] on affiliate marketing on YouTube.
According to their measurements, for instance, 3.49% of How To & Style videos present affiliate
marketing links (compared to 36.7% in our measurement). This large difference between our
results can be explained in two ways. First, the sampling strategies used by their paper and by the
YouNiverse dataset are very different. They use a random prefix sampling, which yields a non-biased
sample of YouTube videos, whereas YouNiverse focuses on large channels with more than 10,000
subscribers. Hence, the YouNiverse dataset contains more popular channels than a non-biased
sample. As we show later in Figure 2, channels that are more popular are more likely to use


---

12
Yiqing Hua et al.
alternative monetization strategies. Second, their methodology is much more specific: tracking the
URLs of specific companies that contain some sort of affiliate identifier. Our analysis suggests that
the lack of effective disclosure of endorsements exposed previously may have been underestimated.
We further explore the relationship between channel popularity and alternative monetization
strategies in Figure 2, showing that generally speaking, popularity is positively correlated with the
adoption of alternative monetization strategies. We operationalize popularity via the number of
subscribers that the channels had at the time of the collection of the YouNiverse dataset (which,
as previously discussed, only contains channels with over 10,000 subscribers). Then, we divide
channels into 10 deciles based on their number of subscribers.6 In the figure, for each decile (𝑥-axis),
the 𝑦-axis specifies the percentage of channels in the decile that use the respective monetization
technique at least once. For the Products Channel [PC], and the Affiliate Marketing [AM] categories,
the figure shows a clear increasing trend: the more popular the channel, the more likely it is to
monetize in those ways. For example, 12.5% of channels in the 10th decile (with more than 440k
followers) have posted a link selling merchandise (category Product Channel), compared to 3.6% of
channels in the first decile (those with less than 12.7k followers). The relationship between channel
popularity and the usage of cryptocurrency-based monetization ([CR]) is much noisier. Channels
in the top and the lower deciles share cryptocurrency addresses less than channels in the middle
deciles. Interestingly, for the Donation category ([DO]), we observe a drop in the percentage of
channels that monetize for the last two deciles. This is likely because some high-profile channels, for
example, those from famous artists or late-night talk shows, do not need to rely on direct donations
from fans. We repeat the analysis on the relationship between channel popularity and alternative
monetization strategies stratified by category in Figure 8 (placed at the end of this paper). Overall,
we observe the same trend across the different categories: more popular channels use alternative
monetization more frequently.
Lastly, in Table 3, we study the prevalence of the top monetization domains in the dataset,
analyzing the top three most popular domains in each alternative monetization strategy. We report
1) the number of occurrences of each domain, i.e., the number of times that the domain is used in
any video description; 2) the channel level prevalence of each domain; and lastly, 3) the employment
rate of each domain, i.e., the chance of a specific domain being employed when a given alternative
monetization strategy is used. For cryptocurrencies, we report analogous results for the top 3
most popular coins: Bitcoin (BTC), Litecoin (LTC), and Ethereum (ETH). We find that alternative
monetization strategies are surprisingly concentrated in the hands of a few players. For example,
amazon, the most popular domain overall, is linked by 32.0% of channels and corresponds to 44.0%
of all usages of any Affiliate Marketing [AM] domain. Also, in 92% of the times content creators use
a Donation [DO] domain to monetize, they resort to one of the three top services: patreon, paypal
and streamlabs. These results show that within individual alternative monetization strategies, the
usage is heavily concentrated in the hands of a few players.
5
EVOLUTION OF ALTERNATIVE MONETIZATION STRATEGIES OVER TIME
The above analyses (Section 4) did not capture how the usage of alternative monetization strategies
changes over time. To further explore this aspect, we now perform an additional set of longitudinal
analyses on the usage of alternative monetization on the YouNiverse dataset.
Figure 3(a) depicts the usage of alternative monetization strategies across the years on the channel
level. The 𝑥-axis specifies the years, from 2008 to 2019, and the 𝑦-axis shows the percentage of
channels that used each alternative monetization strategy (shown in different colors) in a given
year. We consider that a channel has used an alternative monetization strategy if at least one of
6Deciles: 12.7k, 16.4k, 21.8k, 29.8k, 42.2k, 63k, 102k, 185k, 440k.


---

Characterizing Alternative Monetization Strategies on YouTube
13
Table 3. Prevalence of top domains/coins for each alternative monetization strategy: For the top
three most popular domains in each monetization strategy, we show their number of occurrences, the
percentage of channels that have linked to that domain, and, lastly, the employment rate of the domain (so,
for instance, of all usages of Affiliate Marketing, 44.0% of the times the creator links to Amazon). Following
the same logic, we also show the prevalence of cryptocurrency addresses for Bitcoin (BTC), Litecoin (LTC),
and Ethereum (ETH). Here, instead of calculating the number and the percentage of all URLs, we calculate
the number of addresses and the percentage of all crypto addresses.
[PC]
[AM]
teespring
spreadshirt
teepublic
amazon
ebay
etsy
# Occurrences ×104
89
107
9
1562
35
47
% Channels
5.7%
2.7%
0.4%
32.0%
5.9%
5.2%
Employment Rate
30.9%
37.1%
3.1%
44.0%
1.0%
1.3%
[DO]
[CR]
patreon
paypal
streamlabs
BTC
LTC
ETH
#Occurrences ×104
491
217
95
16.3
8.4
7.2
% Channels
16.6%
7.8%
5.3%
0.67%
0.24%
0.35%
Employment Rate
56.3%
24.9%
11.0%
46.7%
24.3%
20.6%
their videos that year contains one of the domains associated with that monetization strategy (via
our semi-supervised methodology described in Section 3.1). Note that the year 2019 is incomplete
in the dataset employed, as YouNiverse data was collected around August 2019 [27], which explains
the decline in the plot. Here, we also show the yearly fraction of channels that post at least one
video with a cryptocurrency address in its description.
We find that among the channels in the YouNiverse dataset, the usage of alternative monetization
strategies has been growing steadily. In 2019, 32.2% of channels had at least one URL linking to
a domain in the category Affiliate Marketing (vs. 12.2% in 2008), 18.7% posted at least one URL
with a Donation domain (vs. 2.7% in 2008), and 6.8% posted at least one URL linking to Product
Channels (vs. 1.1% in 2008). Cryptocurrencies are by far the least used of all alternative monetization
strategies: in 2019, only around 0.4% of channels had a video with a cryptocurrency address (vs.
0.1% in 2008). These results should be treated as an upper bound, since channels can edit their video
descriptions retrospectively to add URLs with monetization-related domains or cryptocurrency
addresses. However, regardless, we argue that the rising trend in the usage of all four alternative
monetization strategies suggests that YouTube’s content creation ecosystem is increasingly reliant
on the money brought forth by donations, affiliate marketing, and merchandising. In Figure 9 we
repeat the analysis done in Figure 3(a), but considering distinct channels categories separately. Again,
as in Section 4, we find that different categories have very different monetization “fingerprints,” but
the adoption of alternative monetization strategies is growing across all categories.
The previous analysis does not distinguish between changes in the entire pool of channels
producing content for YouTube and changes in behaviors of a fixed set of channels. To disentangle
these two components, we conduct an additional cohort-based analysis. We split channels into
four cohorts depending on the date of their first uploaded video,7 and analyze their usage of
alternative monetization strategies separately. Results are shown in Figure 3(b), where, for the
different cohorts (represented by lines), we measure the channel-level prevalence (𝑦-axis) for each
of the four alternative monetization strategies over the years (𝑥-axis).
7Cohorts: [2008, 2011), [2011, 2014), [2014, 2017), [2017, 2019))


---

14
Yiqing Hua et al.
2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019
0.0%
5.0%
10.0%
15.0%
20.0%
25.0%
30.0%
35.0%
Percentage of Channels with Monetization Across the Years
Products Channel
Aﬃliate Marketing
Donation
2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019
Year
0.20%
0.40%
Crypto
(a)
2008 2010 2012 2014 2016 2018
0.0%
4.0%
8.0%
Products Channel
2008-2011
2011-2014
2014-2017
2017-2020
2008 2010 2012 2014 2016 2018
0%
20%
40%
Aﬃliate Marketing
2008 2010 2012 2014 2016 2018
Year
0.0%
10.0%
20.0%
Donation
2008 2010 2012 2014 2016 2018
Year
0.00%
0.40%
0.80%
Crypto
(b)
Fig. 3. Channel-level usage of alternative monetization strategies: (a) We show the prevalence of
monetization strategies across the years in the YouNiverse dataset. We consider that a channel uses a
monetization strategy in a given year if its videos have at least one URL associated with the strategy or
contains a cryptocurrency address. (b) We analyze the relationship between the age of channels and the
usage of alternative monetization strategies. We divide channels into four cohorts according to their creation
date. Then, for each monetization strategy, we calculate the percentage of channels in each cohort that used
this strategy in a given year. Error bars represent 95% CIs.
We find that the usage of alternative monetization strategies is consistent throughout the different
cohorts: alternative monetization is becoming more prevalent for both older and newer channels.
For instance, in 2019, around 35% of the channels in both the [2011, 2014) and the [2014, 2017) cohort
used the Affiliate Marketing [AM] strategy. This suggests that the increase in the prevalence of
alternative monetization strategies observed in Figure 3(a) is not happening due to the replacement
of old channels (which do not use these strategies) by newer channels (which do).
Although the trend is similar for both newer and older channels, different cohorts still differ
systematically. For example, we find that younger channels start to use alternative monetization
strategies relatively faster, as evident in the higher starting points of the individual cohort curves.
For example, in 2017, the very first year of the [2017, 2019) cohort, 27.0% of the channels in
the [2017, 2019) cohort used Affiliate Marketing monetization strategy. In comparison, for the
[2014, 2017) and [2011, 2014) cohorts, only 19.2% and 14.4% used this strategy in their first years
(2014 and 2011, respectively).
One particularity of the analyses done in this section is that the data considered was collected
in late 2019 [27], and includes only channels with over 10,000 subscribers at the time of the data
collection. As YouTube has grown substantially over the period analyzed, the criteria for the
inclusion of data is stricter for earlier dates (for instance, having 10,000 subscribers in 2008 was
likely harder than in 2018). In that sense, our analysis may overlook channels that were relatively
popular in earlier years, but that never managed to reach 10,000 subscribers by 2019. Moreover,
YouNiverse data has a "popularity bias," covering YouTube channels with many subscribers more
extensively. Therefore, it could be that channels that adopt alternative monetization become more
popular and thus are more likely to be included in the dataset.


---

Characterizing Alternative Monetization Strategies on YouTube
15
(0, 29]
(29, 53]
(53, 82]
(82, 119]
(119, 169]
(169, 239]
(239, 347]
(347, 540]
(540, 1027]
(1027, 121676]
Number of videos produced
20
40
60
80
(a) Percentage of channels monetized with
diﬀerent productivity level
-3
-2
-1
1
2
3
4
5
6
7
8
9
10
11
12
Months after the ﬁrst monetized video
2
4
6
Number of videos
(b) Number of videos produced
before and after the ﬁrst monetized video
Monetized
Not Monetized
Fig. 4. Alternative monetization and channel productivity: (a) Percentage of channels that have alter-
native monetization link in at least one of their videos, with different productivity levels. The channels are
grouped into ten deciles, according to the number of videos they produced. Error bars represent 95% CIs for
binomial proportions. (b) Comparison of channel productivity between channels that adopted alternative
monetization and those that did not. Month 0 specifies the month when one of the groups started alternative
monetization. Error bars represent 95% CIs.
6
RELATION BETWEEN CONTENT CREATION AND USAGE OF ALTERNATIVE
MONETIZATION STRATEGIES
In Section 4, we have shown that more popular channels, i.e., with more subscribers, are more likely
to adopt alternative monetization strategies (cf. Figure 2). Undoubtedly, alternative monetization
adds an extra monetary incentive to create content and has the potential to impact a channel’s
growth and success. In this section, we analyze the relationship between alternative monetization
and content creation. First, we broadly characterize how the productivity of a channel relates to the
likelihood of it adopting an alternative monetization strategy. Then, we gear the second analysis
towards understanding whether the adoption of an alternative monetization strategy at a given
point in time indicates an increase in content productivity afterward.
Overall, channels that produce more content are more likely to adopt alternative monetization.
Figure 4(a) shows the percentage of channels adopting alternative monetization strategies (𝑦-axis)
stratified by productivity levels (𝑥-axis). From left to right, channels are grouped into 10 deciles,
according to the number of videos posted. For example, among the least productive 10% of the
channels (left-most bar), who produced at most 29 videos, only 30% adopt alternative monetization.
The adoption rate is much higher among more prolific channels. Over 72% of the most productive 10%
of the channels (right-most bar) include alternative monetization links in their video descriptions.
This trend remains the same when channels are grouped into quintiles or vigintiles. Note that this
trend may also be explained by the fact that channels that started earlier are more likely to adopt
alternative monetization, and they are more likely to have produced more videos.
The above result shows that a channel’s productivity correlates with the adoption of alterna-
tive monetization strategies. However, our findings do not distinguish between two competing
hypotheses. It could be that 1) channels that adopt alternative monetization strategies become more
productive, or that 2) channels that are already productive and popular are the ones who begin to
use alternative monetization strategies. To tease the two hypotheses apart, we conduct an additional
study where we compare the productivity (measured in number of videos) between matched pairs
of channels. In each pair, one channel adopted an alternative monetization strategy for the first
time in a given month 𝑥, and the other has not adopted any alternative monetization strategy until
month 𝑥, where 𝑥is a month that ranges between January 2015 to September 2019. Channels are
matched according to their content, productivity level, and the amount of attention received in the


---

16
Yiqing Hua et al.
three months leading to month 𝑥(when one of the channels adopted an alternative monetization
strategy). More specifically, for each month, we stratify channels in ten deciles according to their
number of views and ten deciles according to the number of videos they produced (yielding a
combination of 100 possible combinations per month, e.g., in month 𝑥−1 a channel may be in the
second view-related decile, and the third video-related decile). Then, we match two channels, if and
only if, they are of the same content category, and for each of the three consecutive months before
month 𝑥, they are in the same decile in terms of both number of videos produced and number of
views received from those videos. We do not consider channels that have produced no video or
received no view in a given month, and discard the top 5% of the channels that produced the most
amount of videos and received the largest number of views (to exclude outliers). In total, we obtain
5,730 pairs of matched channels.
Figure 4(b) shows the number of videos produced by two groups of channels, channels that
adopted alternative monetization strategies in month 0 (in magenta) and channels that did not (in
dark yellow). Month 0, where one group adopts monetization, is marked by a vertical line. The
𝑥-axis specifies the number of months from month 0. Negative values represent months before the
monetization happens, the period when the two groups are matched. Positive numbers represent
months after one of the matched channels adopted an alternative monetization strategy. The 𝑦-axis
specifies the average number of videos produced by the channels in each given month. Note that
the two groups are matched on their activity before 𝑥= 0 (left to the vertical line). During this
period, the two lines overlap, showing that the matching was effective. The effect is similar across
all four types of alternative monetization strategies.
We find that, for the channels studied, the adoption of alternative monetization strategies has a
significant positive correlation with the productivity of a channel, both in the short and long term.
For example, during the first month, after one of the channels adopted an alternative monetization
strategy (𝑥= 1), we already see a large difference between the productivity of channels. Channels
that adopted an alternative monetization strategy in month 𝑥= 0 on average produced six videos,
while the channels that did not, only produced three. The gap becomes narrower with time, yet
the difference remains. Over the entire year, aggregating the number of videos produced between
months 1 to 12, channels adopting alternative monetization strategies produced 63 videos on
average while those who did not produced 44 videos. This amounts to an increase in productivity
of over 43%.
We stress that these findings must be considered with nuance. The mere act of adding a
monetization-related link or a cryptocurrency address in a video description certainly does not
make a content creator more productive. However, adopting monetization strategies is likely to
motivate higher productivity due to the creation of additional income streams (or at least the
possibility of eventually creating them). Another possibility is that, at a given point in time, creators
decide to take their content production efforts more seriously, and when doing so, adopt alternative
monetization strategies. Although disentangling the exact causal structure between monetization
and content production is hard, our results show that adopting alternative monetization strategies
has a positive correlation with channel productivity.
7
PROBLEMATIC CHANNELS’ USAGE OF ALTERNATIVE MONETIZATION
STRATEGIES
Adopting alternative monetization strategies is beneficial to a channel’s productivity and growth,
as it diversifies its revenue stream and decreases the likelihood of being impacted by policy
changes from YouTube. Consequently, such strategies are of particular importance to channels
producing problematic content. As previously discussed, YouTube uses demonetization, i.e., losing
ad revenue, as a punishment for content creators producing videos that violate YouTube’s content


---

Characterizing Alternative Monetization Strategies on YouTube
17
Any
Donation
Crypto
Product
Channel
Aﬃliate
Marketing
Type of alternative monetization strategy adopted
0%
25%
50%
75%
Percentage of channels
(a)
0%
(0%,3%]
(3%,53%] (53%,100%]
Percentage of videos with monetization
(b)
[0,1]
(1,2]
(2,5]
(5, 10]
> 10
Median number of monetization per video
(c)
Problematic
Random
Fig. 5. Problematic channels and alternative monetization: Comparison between problematic channels
and random channels in terms of (a) the likelihood of adopting alternative monetization, (b) the percentage
of videos with monetization links, groups are separated according to the quartile values of the monetization
percentage. (c) the median number of monetization links in one video. In (b,c), the two distribution are
significantly different (𝑝< 10−6, Mann–Whitney 𝑈-test). Error bars in (a) represent 95% CIs.
policy [54, 55]. In that context, creators that were punished or those who expect to be punished may
leverage alternative monetization strategies to weaken the impact of demonetization. Therefore, we
conduct the following analyses using the Problematic Content dataset, comprising 479 channels (see
Section 3.1 for more details). Our analyses are focused on three types of fringe content, Alt-light, Alt-
right, and Manosphere. We first compare the adoption patterns of alternative monetization strategies
between the problematic and random channels and report on domains that are disproportionally
more popular among the problematic content creators. Additionally, we analyze the amount of
money problematic content creators earn from cryptocurrency donations, as well as from patreon,
the biggest player in the Donation ([DO]) category.
Alternative monetization practices of problematic channels. We compare monetization prac-
tices between problematic channels and channels that we select randomly from the YouNiverse
dataset (henceforth referred to as random channels). We follow a similar matching methodology as
described in Section 6, matching one problematic channel with random channels according to their
content, productivity, and the amount of attention received. For each year between 2017 to 2019,
when problematic channels were the most active, we stratify channels into ten deciles according to
the number of videos they produced and the number of views they received. Then, we consider
two channels as matching candidates if and only if they started producing content from the same
year, are of similar channel category, 8 and, for every year from 2017 to 2019, belong to the same
stratum in terms of both number of videos produced and number of views received. Below, we
report results from comparisons between how problematic and these carefully matched channels
employ alternative monetization strategies, as illustrated in Figure 5(a).
First, we find that problematic channels are more likely to adopt alternative monetization.
Figure 5(a) compares the percentage of channels (𝑦-axis) adopting different kinds of alternative
monetization (𝑥-axis). Around 68% of the problematic channels adopt alternative monetization in at
least one of their videos (vs. 56% for the counterparts). In particular, they are far more likely to ask
for a donation, either using services such as Patreon (48% vs. 28%), or using cryptocurrency (11%
vs. 2%), and to sell products associated with the channel (17% vs. 11%). There is little difference
between the two types of channels when it comes to using affiliate marketing links.
8Channels in the Problematic Content dataset don’t have the content category information that was reported by the content
creators (see Section 3.1). We thus examine the 196 channels in the Problematic Content dataset that also show up in the
YouNiverse dataset and find that 60% of them belong to one of the following three categories, News & Politics, People &
Blogs and Entertainment. Hence, to ensure that channels are of similar content, we only select channels that are from one
of these three categories in the YouNiverse dataset for the matching analysis (done with all the 479 problematic channels).


---

18
Yiqing Hua et al.
Second, problematic channels also use alternative monetization strategies in more videos. Fig-
ure 5(b) compares the percentage of videos with alternative monetization links (or cryptocurrency
addresses) in their descriptions of problematic channels and their counterparts. Again, the 𝑥-axis
splits the percentage of videos including any alternative monetization strategy into four groups, the
group boundaries are determined using the quartile values of the distribution. The 𝑦-axis specifies
the percentage of channels in each group. Over 32% of the problematic channels include alternative
monetization links in more than 53% of their videos (vs. 17% for counterparts). Also, only 32% of
problematic channels do not include alternative monetization links in any of their videos (vs. 44%
for counterparts). The results remain the same when channels are split according to the quintile
values or the decile values of the distribution.
Third, and lastly, problematic channels use a more diverse set of monetization strategies. Fig-
ure 5(c) presents the median number of distinct links and cryptocurrency addresses adopted by
a channel in their video descriptions. We divide the median number of links and cryptocurrency
addresses into five groups (𝑥-axis), and report the percentage of problematic channels and their
counterparts that fall under each group (𝑦-axis). Similar to what we observed in the previous
plots, again, we find that problematic channels use monetization strategies more aggressively.
For instance, around 7% of the problematic channels have between 6 to 10 different URLs with
monetization domains or cryptocurrency addresses per video description in median (vs. 2% for the
matched counterparts).
Donation domains for problematic channels. Recently, many platforms, including Patreon,
have taken action against producers of problematic content [9]. In expectation of being taken
down by mainstream platforms, problematic content creators might resort to a different set of
alternative monetization services as compared to random channels. For example, Figure 5(a) shows
that problematic channels are far more likely to ask for cryptocurrency donations, potentially
to avoid regulation. Alternative monetization through donation has been largely exploited by
problematic channels. Compared to alternative monetization through products sold by channels, in
which case each channel might have to host its own website to sell products, the particular domains
that are being used for donation are more likely to be platforms with multiple users, hence having
a larger impact.
In Table 4, we list the top ten donation domains that are more popular among problematic
channels. To conduct this analysis, we first exclude all problematic channels from the YouNiverse
dataset. Then, for each donation domain, we compute the ratio between channels using the specific
domain being problematic and the total number of channels that have mentioned this domain
at least once in one of its video descriptions. Each domain has to be mentioned by at least 20
different channels (0.01% of all channels), or at least 5 different problematic channels (0.8% of all
problematic channels). As a baseline, 6.15% of the channels that ask for donations are fringe. Most
of the top domains that are above this baseline, feedthebadger.com [63], wesearchr.com [14],
hatreon.net [19], makersupport.com [30], and projectveritas.com [64] are known to be used
by creators of problematic content. As of April, 2021, only feedthebadger.com and projectver-
itas.com are online. However, it is worth noting that some of the more mainstream services
subscribestar.com, venmo.com and donorbox.org are also above this baseline.
How much do problematic channels benefit from alternative monetization? For content
creators, the more money they earn from alternative monetization strategies, the less they have
to rely on YouTube’s shared ad revenue. Hence, to understand how alternative monetization
strategies may weaken the usage of demonetization as a moderation strategy, we explore how
much problematic content creators have earned outside YouTube’s partner program. We focus
on two specific alternative monetization strategies: gathering paid subscriptions on Patreon, and


---

Characterizing Alternative Monetization Strategies on YouTube
19
Table 4. Top ten donation domains with the largest percentage of channels that use them being problematic,
computed on the combined dataset with both YouNiverse and Problematic Content. We mark in bold the
domains with a higher probability of being used by problematic channels than the general distribution (first
row).
Donation domain
% of problematic channels
using the domain
All
6.15%
feedthebadger.com
85.7%
wesearchr.com
58.3%
hatreon.net
51.9%
makersupport.com
32.1%
subscribestar.com
14.9%
projectveritas.com
8.7%
venmo.com
6.7%
donorbox.org
6.6%
paypal.com
1.4%
gofundme.com
1.0%
=0
(0, 100]
(100, 1K]
(1K, 10K]
(10K, 100K]
> 100K
Total amount in USD
0
10
20
30
Number of channels
(a) Patreon income
=0
(0, 100]
(100, 1K]
(1K, 10K]
(10K, 100K]
> 100K
Total amount in USD
0
5
10
15
(b) Bitcoin and Ethereum income
Fig. 6. Problematic channel income (a) from Patreon (97 channels), median income 5540 US dollars, (b)
Bitcoin and Ethereum (58 channels), median income 1155 US dollars.
asking for Bitcoin or Ethereum donations. As shown in Table 3, patreon is the most used domain
in the Donation category. In 56.3% of the cases when Donation is used as a monetization strategy, a
patreon link was used. Likewise, Bitcoin and Ethereum are the two of the three most frequently
employed cryptocurrencies, accounting for 68% of all cryptocurrency addresses found in video
descriptions. For this analysis, we collect additional data from Graphtreon, 9 a website that tracks
YouTube content creators’ Patreon income over the years, and from the blockchain history of
Bitcoin and Ethereum.
We find that problematic channels benefit financially from alternative monetization in important
ways. Out of the 497 problematic channels in the dataset, 97 mentioned at least one Patreon link in
one of their video descriptions and 58 mentioned at least one Ethereum or Bitcoin address in one
of their video descriptions. Figure 6(a) breaks down the lifetime income from all the Patreon links
mentioned by problematic channels. Figure 6(b) breaks down the lifetime income until November
2020 from all the Bitcoin and Ethereum addresses mentioned by each channel. In both plots, the
𝑥-axis specifies a total income level, ranging from earning nothing (leftmost) to more than USD
100, 000 in total (rightmost). The 𝑦-axis specifies the number of channels with a given income level.
Most of the channels earned more than USD 1, 000 in total in both cases, 68 channels received more
than USD 1, 000 on Patreon and 30 channels (the three rightmost bars) received more than USD
1, 000 on Bitcoin and Ethereum addresses.
9https://graphtreon.com/


---

20
Yiqing Hua et al.
This analysis has some limitations. It is possible that the Bitcoin and Ethereum addresses are
used for other purposes other than receiving donations from YouTube audiences. Patreon links
in a channel’s video might not be associated with the creators themselves, but with someone else
who wants to be promoted by this channel. In both cases, we may overestimate the alternative
monetization income for a channel. Nevertheless, the analysis sheds light on how much problematic
content creators may benefit from alternative monetization financially. For example, Honey Badger
Radio, one of the channels promoting Men’s Rights Activists, is estimated to have earned over USD
260,000 on Patreon during its six-year presence on the platform. A channel like this is likely to only
receive minimal impact from a demonetization punishment, as they have another reliable source of
income that is large enough to sustain themselves.
8
DISCUSSION
Our results suggest that YouTube channels widely adopt a diverse set of alternative monetization
strategies (RQ1). These strategies include affiliate marketing, the sale of products related to channels,
and requests for donations through third-party platforms, or cryptocurrencies. In this context, we
show that these strategies must be considered as an important monetary incentive and consideration
when studying the platform. Our findings also indicate that there is a positive correlation between
the adoption of alternative monetization and content production, hinting that these strategies are
indeed associated with changes in the content creation dynamics of the platform (RQ2). Lastly,
our findings raise concerns about the ability of channels producing problematic content to exploit
alternative monetization to avoid being punished due to policy violations (RQ3), calling for more
careful policy design. In the remainder of this section, we discuss the implications of our findings
and possible future work.
Monetization and content creation. Our work shows that alternative monetization is extremely
prevalent among channels on YouTube and that it is likely to have a substantial impact on platform
dynamics. This is especially true for the creators, whose participation is essential to the platform [11].
Previous works studying the evolution of YouTube’s ad-based revenue-share program [20, 33, 62]
have pointed out that creators may optimize their content to receive more income [20] and that
industry players may try to profit from the monetized content through multi-channel network [62].
Alternative monetization strategies may change the YouTube ecosystem in a similar way. For
instance, creators may become more willing to produce content and change what kind of content
they produce.
As suggested by previous work [42], monetary incentives play an essential role in content
production on YouTube. As such, the growing prevalence of alternative monetization practices is
bound to impact the dynamics and motivations for content creation. For example, alternatives such
as Patreon, where creators can directly receive monetary contributions from their fans, weaken
the link between earnings and views. Such contributions "incentivize the creation of a devoted
fanbase and transform the revenue process into two-way communication between creator and
audience" [42]. Even if videos created by some creators receive only a few views, they can amass
substantial earnings if a small but dedicated set of fans are willing to pay for a subscription. This
idea aligns with Kelly’s 2008 essay “1,000 True Fans,” where, years before the advent of Kickstarter
and Patreon, he toys with the idea that artists, producers, inventors and makers could make a living
as long as they managed to find 1,000 true fans who are willing to pay one day’s wage per year to
support them [31].
Indeed, as pointed out by Gillespie, YouTube’s business model and the affordances of the platform
have consequences on what content creators make available [24], shaping the content that we
see. The forms of monetization allowed, "alternative" or not, can, therefore, be understood as part


---

Characterizing Alternative Monetization Strategies on YouTube
21
of the content moderation policy of the platform. As creators shift to alternative monetization
strategies, their content production goals may change. This interplay between content creation
and monetization as moderation – particularly for problematic content – is an important future
area of research that will build on existing work on platform dynamics on YouTube [21, 26, 36, 42].
YouTube as a gatekeeper. Our findings have significant implications for understanding YouTube’s
current role as a gatekeeper [7, 24], using on-platform monetization as a form of moderation. For
example, the platform prevents ads from being matched to videos containing problematic keywords
and topics [68]. In 2019, YouTube launched its new policy against content that is at the borderline of
violating the platform’s policies [55]. Videos under this category are not recommended to viewers
and cannot display ads. According to YouTube, this policy (along with other improvements to
their platform) has greatly reduced watch time on borderline content. In a 2021 interview with the
Washington Post, the company’s CTO claimed that only between 0.16% and 0.18% of views went to
content that broke the platform rules, a 70% reduction compared to 2017 [22]. However, even if
YouTube is effective at finding all the borderline content, given the sheer size of the platform—one
billion hours spent on the platform daily [71]—0.16% still amounts to millions of viewing hours.
While YouTube was likely successful in reducing exposure to problematic content, our findings
highlight that platform-based demonetization might not be an effective moderation tool. An extreme
such example is the case of Alex Jones’ YouTube channel, InfoWars. Before its ban in late 2018,
the channel featured over 30,000 videos and gathered over 2 million subscribers [18]. Jones was
not eligible to monetize his content during this period [54], but it did not matter: the core of his
revenue was centered around selling supplements and other products online, which amassed him
millions of dollars each year [65].
Our results show that many of the content creators who focus on Alt-light, Alt-right, and
Manosphere content, not only the high profile ones, benefit significantly from alternative mon-
etization, which would allow them to keep producing without ad revenue. Therefore, we argue
that moderation through demonetization is not likely to be an effective tool in disincentivizing
the production of problematic content, and may even result in a shift of content produced towards
committed audiences, as noted above. An important finding to consider here is that a few major
players of alternative monetization strategies are extremely prevalent (cf. Fig. 3). Furthermore, some
of the alternative monetization services are particularly popular among the problematic content
creators that we study (cf. Table 4). For example, around 15% of the channels in our dataset using
SubscribeStar produce content that we consider to be potentially problematic. As our study on
problematic channels was limited to three categories, it is likely that there exist more services that
are heavily exploited by creators of policy-violating content. Nevertheless, these findings suggest
that alternative monetization services should be evaluated as key platforms, and be held to public
scrutiny. We note that some of these players do not have specific anti-hate or anti-harassment
policies (e.g., Amazon’s associate program [6]), and others have such policies but seem to enforce
them inconsistently (e.g., Patreon [45]).
While content creators producing problematic content adopt alternative monetization strategies
more often than the carefully chosen comparison set of creators (cf. Fig. 5), our results show that all
creators are increasingly adopting such strategies (cf. Fig. 3). These alternative monetization strate-
gies form an important part of the growing creator economy [53]. Moreover, they allow creators to
increase their financial gains, decrease their reliance on specific money streams (e.g., YouTube’s
partner program [17]), and, as noted above, challenge the platform’s gatekeeping power [21]. These
contributions need to be considered when arguing whether to disallow or to limit such strategies
on YouTube or on other platforms. Alternative monetization and the consequence it brings should
be studied carefully to enable appropriate moderation.


---

22
Yiqing Hua et al.
Detecting alternative monetization. Although our study mainly focuses on YouTube, many
other platforms that support content distribution can be used for alternative monetization. The
affordances of YouTube, i.e., the video descriptions, make it especially easy for alternative mon-
etization strategies to thrive, as the links to alternative monetization services can be presented
alongside the content. However, this is not unique; other platforms like Facebook or the alternative
video streaming platform Bitchute have similar affordances. Further, users on Twitter, Instagram, or
Gab can still mention alternative monetization links in their profiles, encouraging their audiences
to contribute. In this paper, we developed a taxonomy of these strategies and a simple approach to
detect them at scale. We believe that this, along with the labeled set of monetization domains we
release, may help researchers characterize the usage of such strategies in other platforms, as well
as to better understand how they are employed in a way that impacts our information ecosystem.
These resources could also be helpful to social networking platforms, which ought to consider how
websites like Patreon and Amazon help to shape the content that’s fit to be created.
An interesting direction for future work is to study the interplay between "official" and "alterna-
tive" monetization strategies on YouTube itself. Researchers could build upon our work to study
changes in the adoption of alternative monetization strategies when creators join YouTube’s ad
revenue sharing program or when they are banned from it. This analysis could help to further
clarify YouTube’s role as a gatekeeper. In order to address these questions, we encourage YouTube
to share data with trusted researchers on when or whether a channel or a piece of content is part
of, or excluded from, monetization programs.
9
CONCLUSION
In this work, we studied how content creators repurpose YouTube’s affordances in order to monetize
off the platform, using datasets that include both popular and controversial channels on YouTube. We
developed a taxonomy of alternative monetization using qualitative coding. Further, we designed
a bootstrapping algorithm to identify alternative monetization related domains and measured
the usage of different alternative monetization strategies in our datasets. Our results show that
alternative monetization is extremely prevalent among popular channels on the platform, and
has a positive correlation with content production. Moreover, creators of problematic content,
such as Alt-light, Alt-right, and Manosphere content, exploit alternative monetization strategies
to a large extent. We hope these findings may help future research better understand YouTube
as a monetization platform and examine its role as a gatekeeper. Lastly, with our developed
taxonomy and methodology, platform providers including YouTube can investigate how alternative
monetization might affect their policy making.
10
ACKNOWLEDGEMENTS
We thank Steven J. Jackson for his consultation on this work. This material is based upon work
partially supported by the National Science Foundation under grants SaTC-2120651 and IIS-1840751.
Manoel Horta Ribeiro is supported by a Facebook Fellowship Award. Robert West is partly supported
by a grant from the EPFL/UNIL Collaborative Research on Science and Society (CROSS) Program,
the Swiss National Science Foundation (grant 200021_185043), and the European Union (TAILOR,
grant 952215), and gifts from Google, Facebook, and Microsoft.
REFERENCES
[1] Crystal Abidin. 2016. “Aren’t these just young, rich women doing vain things online?”: Influencer selfies as subversive
frivolity. Social media + Society (2016).
[2] Alexa. 2021. Alexa — YouTube Analysis. https://www.alexa.com/siteinfo/youtube.com. [Online; accessed 3-Apr-2021].


---

Characterizing Alternative Monetization Strategies on YouTube
23
[3] Julia Alexander. 2018.
YouTube’s alternative monetization strategy is a good step, but it ignores bigger prob-
lems. https://www.theverge.com/2019/7/12/20690311/youtube-monetization-merch-stickers-superchat-record-labels-
networks-umg. [Online; accessed 5-Oct-2021].
[4] Julia Alexander. 2019.
YouTube introducing changes to give people more control over recommended
videos.
https://www.theverge.com/2019/6/26/18759840/youtube-recommendation-videos-homepage-changes-
algorithm-harmful-content. [Online; accessed 13-Apr-2021].
[5] Julia Alexander. 2019. YouTube looks to demonetization as punishment for major creators, but it doesn’t work. https:
//www.theverge.com/2019/6/25/18744246/youtube-demonetization-steven-crowder-patreon-advertising-merch. [On-
line; accessed 23-Mar-2021].
[6] Amazon. 2018.
Associates Program Policies.
https://affiliate-program.amazon.com/help/operating/policies/
ref=amb_link_0SCmvU4qQnOltlh4q-t01g_2?pf_rd_p=f6ebaf96-904b-45de-bbf6-06eb866f07fd&ac-ms-src=ac-
nav%23Associates+Program+Participation+Requirements. [Online; accessed 3-Apr-2021].
[7] Karine Barzilai-Nahon. 2008. Toward a theory of network gatekeeping: A framework for exploring information control.
Journal of the American society for information science and technology (2008).
[8] Yochai Benkler. 2006. The wealth of networks: How social production transforms markets and freedom. Yale University
Press.
[9] Bloomberg. 2020. Patreon follows Facebook, Twitter in Qanon crackdown. https://www.latimes.com/business/
technology/story/2020-10-23/patreon-follows-facebook-twitter-in-qanon-crackdown. [Online; accessed 12-Apr-
2021].
[10] Jean Burgess. 2014. ’All your chocolate rain are belong to us’?: Viral video, YouTube and the dynamics of participatory
culture. Art in the Global Present (2014).
[11] Jean Burgess and Joshua Green. 2018. YouTube: Online video and participatory culture. John Wiley & Sons.
[12] Mathias Bärtl. 2018. YouTube channels, uploads and views: A statistical analysis of the past 10 years. In Convergence.
[13] Robyn Caplan and Tarleton Gillespie. 2020. Tiered Governance and Demonetization: The Shifting Terms of Labor and
Compensation in the Platform Economy. Social Media + Society (2020).
[14] Michelle Castillo. 2017. The far right uses this site to fund its favorite causes—and its founder hopes to build a ‘very
profitable business. https://www.cnbc.com/2017/06/24/wesearchr-charles-johnson-alt-right-causes.html. [Online;
accessed 22-Mar-2021].
[15] Angela Chen. 2019.
How YouTubers plan to take on YouTube for better working conditions.
https://www.
technologyreview.com/2019/08/01/133927/youtube-union-ig-metall-labor-gdpr-privacy-policy-creators/. [Online;
accessed 5-Oct-2021].
[16] Annie Chen Y., Brendan Nyhan, Jason Reifler, Ronald Robertson E., and Christo Wilson. 2021. Exposure to Alternative
& Extremist Content on YouTube. The Belfer Fellowship Series (2021).
[17] Angèle Christin and Rebecca Lewis. 2021. The Drama of Metrics: Status, Spectacle, and Resistance Among YouTube
Drama Creators. Social Media + Society (2021).
[18] Jane Coaston. 2018. YouTube, Facebook, and Apple’s ban on Alex Jones, explained. https://www.vox.com/2018/8/6/
17655658/alex-jones-facebook-youtube-conspiracy-theories. [Online; accessed 4-Apr-2021].
[19] Devin Coldewey. 2017. How hate speech crowdfunding outfit Hatreon crept back online. https://techcrunch.com/
2017/12/12/how-hate-speech-crowdfunding-outfit-hatreon-crept-back-online/. [Online; accessed 12-Apr-2021].
[20] Oscar Coromina, Ariadna Matamoros-Fernández, and Bernhard Rieder. 2020. Follow the Money: a Large-scale
Investigation of Monetization and Optimization on YouTube. AoIR Selected Papers of Internet Research (2020).
[21] Stuart Cunningham and David Craig. 2019. Creator governance in social media entertainment. Social Media + Society
(2019).
[22] Gerrit De Vynck. 2021. YouTube says it’s getting better at taking down videos that break its rules. They still number in
the millions. https://www.washingtonpost.com/technology/2021/04/06/youtube-video-ban-metric/. [Online; accessed
3-Apr-2021].
[23] Flavio Figueiredo, Fabrício Benevenuto, and Jussara M. Almeida. 2011. The Tube over Time: Characterizing Popularity
Growth of Youtube Videos. In Proceedings ACM International Conference on Web Search and Data Mining.
[24] Tarleton Gillespie. 2010. The politics of ‘platforms’. New media & society (2010).
[25] Tarleton Gillespie. 2018. Custodians of the Internet: Platforms, content moderation, and the hidden decisions that shape
social media. Yale University Press.
[26] Manoel Horta Ribeiro, Raphael Ottoni, Robert West, Virgílio A. F. Almeida, and Wagner Meira. 2020. Auditing
radicalization pathways on YouTube. In Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency.
[27] Manoel Horta Ribeiro and Robert West. 2021. YouNiverse: Large-Scale Channel and Video Metadata from English-
Speaking YouTube. In Proceedings of the International AAAI Conference on Web and Social Media.
[28] Henry Jenkins and Mark Deuze. 2008. Convergence culture. New York University Press.


---

24
Yiqing Hua et al.
[29] Anne Jerslev. 2016. Media times in the time of the microcelebrity: celebrification and the YouTuber Zoella. International
Journal of Communication (2016).
[30] Matt Keeley. 2018. The Last Crowdfunding Platform for White Supremacists May Have Just Shut Down. https:
//hornet.com/stories/makersupport-shutdown-alt-right-crowdfunding/. [Online; accessed 12-Apr-2021].
[31] Kevin Kelly. 2008. 1000 True Fans. https://kk.org/thetechnium/1000-true-fans/. [Online; accessed 3-Apr-2021].
[32] Susie Khamis, Lawrence Ang, and Raymond Welling. 2017. Self-branding,‘micro-celebrity’and the rise of Social Media
Influencers. Celebrity studies (2017).
[33] Susanne Kopf. 2020. "Rewarding Good Creators": Corporate Social Media Discourse on Monetization Schemes for
Content Creators. Social Media + Society (2020).
[34] Sangeet Kumar. 2019. The algorithmic dance: YouTube’s Adpocalypse and the gatekeeping of cultural content on
digital platforms. Internet Policy Review (2019).
[35] Rebecca Lewis. 2018. Alternative influence: Broadcasting the reactionary right on YouTube. Technical Report. Data and
Society.
[36] Rebecca Lewis. 2020. “This Is What the News Won’t Show You”: YouTube Creators and the Reactionary Politics of
Micro-celebrity. Television & New Media (2020).
[37] Robin Mamié, Manoel Horta Ribeiro, and Robert West. 2021. Are anti-feminist communities gateways to the far right?
evidence from reddit and youtube. In 13th ACM Web Science Conference 2021.
[38] Enrico Mariconti, Guillermo Suarez-Tangil, Jeremy Blackburn, Emiliano De Cristofaro, Nicolas Kourtellis, Ilias Leon-
tiadis, Jordi Luque Serrano, and Gianluca Stringhini. 2019. "You Know What to Do" Proactive Detection of YouTube
Videos Targeted by Coordinated Hate Attacks. Proceedings of the ACM on Human-Computer Interaction CSCW (2019).
[39] Alice Marwick. 2015. You may know me from YouTube. A companion to celebrity (2015).
[40] Arunesh Mathur, Arvind Narayanan, and Marshini Chetty. 2018. Endorsements on Social Media: An Empirical Study
of Affiliate Marketing Disclosures on YouTube and Pinterest. Proceedings of the ACM on Human-Computer Interaction
CSCW (2018).
[41] Nora McDonald, Sarita Schoenebeck, and Andrea Forte. 2019. Reliability and inter-rater reliability in qualitative
research: Norms and guidelines for CSCW and HCI practice. Proceedings of the ACM on Human-Computer Interaction
CSCW (2019).
[42] Kevin Munger and Joseph Phillips. 2020. Right-Wing YouTube: A Supply and Demand Perspective. The International
Journal of Press/Politics (2020).
[43] David B Nieborg. 2015. Crushing candy: The free-to-play game in its connective commodity form. Social Media +
Society (2015).
[44] Kostantinos Papadamou, Savvas Zannettou, Jeremy Blackburn, Emiliano De Cristofaro, Gianluca Stringhini, and
Michael Sirivianos. 2020. Understanding the incel community on youtube. arXiv preprint arXiv:2001.08293 (2020).
[45] Patreon. 2021. Community Guidelines. https://www.patreon.com/policy/guidelines. [Online; accessed 3-Apr-2021].
[46] Matt Perez. 2020.
YouTube Bans White Supremacists Stefan Molyneux, Richard Spencer, David Duke.
https://www.forbes.com/sites/mattperez/2020/06/29/youtube-bans-white-supremacists-stefan-molyneux-richard-
spencer-david-duke/. [Online; accessed 3-Apr-2021].
[47] Jean-Christophe Plantin, Carl Lagoze, Paul N Edwards, and Christian Sandvig. 2018. Infrastructure studies meet
platform studies in the age of Google and Facebook. New Media & Society (2018).
[48] Tobias Raun. 2018. Capitalizing intimacy: New subcultural forms of micro-celebrity strategies and affective labour on
YouTube. Convergence (2018).
[49] Tobias Regner. 2020. Crowdfunding a monthly income: an analysis of the membership platform Patreon. Journal of
Cultural Economics (2020).
[50] Pew Research. 2018. Many Turn to YouTube for Children’s Content, News, How-To Lessons. https://www.pewresearch.
org/internet/2018/11/07/many-turn-to-youtube-for-childrens-content-news-how-to-lessons/.
[Online; accessed
3-Apr-2021].
[51] Bernhard Rieder, Oscar Coromina, and Ariadna Matamoros-Fernández. 2020. Mapping YouTube. In First Monday.
[52] Aja Romano. 2019. A group of YouTubers is claiming the site systematically demonetizes queer content. https://www.
vox.com/culture/2019/10/10/20893258/youtube-lgbtq-censorship-demonetization-nerd-city-algorithm-report. [Online;
accessed 3-Apr-2021].
[53] Robert Shapiro and Siddharatha Aneja. 2018.
Unlocking the Gates: America’s new creative econ-
omy. https://intranet.americansforthearts.org/by-program/reports-and-data/legislation-policy/naappd/unlocking-the-
gates-americas-new-creative-economy. [Online; accessed 4-Apr-2021].
[54] Emily Steel. 2018. YouTube removes ads from InfoWars’ Alex Jones channel, says it has no plans to freeze or ban it.
https://tcrn.ch/3zDyI9t. [Online; accessed 4-Apr-2021].
[55] The YouTube Team. 2019. Our ongoing work to tackle hate. https://blog.youtube/news-and-events/our-ongoing-
work-to-tackle-hate. [Online; accessed 3-Apr-2021].


---

Characterizing Alternative Monetization Strategies on YouTube
25
[56] G Torbet. 2019. YouTubers are unionizing, and the site has 24 days to respond. https://www.engadget.com/2019-07-
29-youtube-union-ig-metall.html. [Online; accessed 5-Oct-2021].
[57] Zeynep Tufekci. 2018. YouTube, the Great Radicalizer. https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-
politics-radical.html.
[58] José Van Dijck and Thomas Poell. 2013. Understanding social media logic. Media and communication (2013).
[59] José Van Dijck and Thomas Poell. 2015. Social media and the transformation of public space. Social Media + Society
(2015).
[60] José Van Dijck, Thomas Poell, and Martijn De Waal. 2018. The platform society: Public values in a connective world.
Oxford University Press.
[61] The Vereg. 2017. YouTube launches Super Chat, a tool that lets you pay to pin comments on live streams. https:
//www.theverge.com/2017/1/12/14249630/youtube-super-chat-pay-pin-comments-live-stream. [Online; accessed
3-Apr-2021].
[62] Patrick Vonderau. 2016. The video bubble: Multichannel networks and the transformation of YouTube. Convergence
(2016).
[63] Wikipedia. 2021. Honey badger (men’s rights). https://en.wikipedia.org/wiki/Honey_badger_(men%27s_rights).
[Online; accessed 12-Apr-2021].
[64] Wikipedia. 2021. Project Veritas. https://en.wikipedia.org/wiki/Project_Veritas. [Online; accessed 12-Apr-2021].
[65] Elizabeth Williamson and Emily Steel. 2018. Conspiracy Theories Made Alex Jones Very Rich. They May Bring Him
Down. https://www.nytimes.com/2018/09/07/us/politics/alex-jones-business-infowars-conspiracy.html. [Online;
accessed 4-Apr-2021].
[66] Sally Wyatt. 2004. Danger! Metaphors at work in economics, geophysiology, and the Internet. Science, Technology, &
Human Values (2004).
[67] Leon Yin and Aaron Sankin. 2021.
Google Blocks Advertisers from Targeting Black Lives Matter YouTube
Videos. https://themarkup.org/google-the-giant/2021/04/09/google-blocks-advertisers-from-targeting-black-lives-
matter-youtube-videos. [Online; accessed 07-Oct-2021].
[68] Leon Yin and Aaron Sankin. 2021. Google Has a Secret Blocklist that Hides YouTube Hate Videos from Advertisers—But
It’s Full of Holes. https://themarkup.org/google-the-giant/2021/04/08/google-youtube-hate-videos-ad-keywords-
blocklist-failures. [Online; accessed 12-Apr-2021].
[69] YouTube. 2011. History of Monetization at YouTube. https://sites.google.com/a/pressatgoogle.com/youtube5year/
home/history-of-monetization-at-youtube. [Online; accessed 3-Apr-2021].
[70] YouTube. 2021. YouTube channel monetization policies. https://support.google.com/youtube/answer/1311392?hl=en#
zippy=. [Online; accessed 3-Apr-2021].
[71] YouTube. 2021. YouTube for Press. https://www.youtube.com/intl/en-GB/about/press/. [Online; accessed 13-Apr-2021].
[72] Xiaojin Zhu and Andrew B. Goldberg. 2009. Introduction to Semi-Supervised Learning. Synthesis Lectures on Artificial
Intelligence and Machine Learning (2009).


---

26
Yiqing Hua et al.
WVKLUWVPHUFK¬ZZZWHHVSULQJFRP$
EX\WVKLUWV¬ZZZFURZGPDGHFRP%
EX\ZZZDPD]RQFRP&"UHÀG ;
EX\QHFNODFH¬ZZZHWV\FRP'"UHI <
EX\
PHUFK
WVKLUWV
QHFNODFH
WHHVSULQJ
FURZGPDGH
DPD]RQ
HWV\







([DPSOH'DWDVHW
%XLOG
ELSDUWLWH
JUDSK
QHFNODFH¬ZZZHWV\FRP("UHI =
WVKLUWVZZZWHHVSULQJFRP)
6HWVHHGV
PHUFK >3&@
DPD]RQ ¬>$0@
EX\
PHUFK
QHFNODFH
WHHVSULQJ
FURZGPDGH
DPD]RQ
HWV\







¬
&DUU\RXW
ODEHO
SURSDJDWLRQ
WVKLUWV
2EWDLQÀQDO
ODEHOV
EX\
PHUFK
QHFNODFH
WHHVSULQJ
FURZGPDGH
DPD]RQ
HWV\







WVKLUWV






Fig. 7. Summary of label propagation. We depict the different steps in our methodology for a toy dataset
consisting of six (hypothetical) video descriptions. Note that each step (1)–(3) is explained in the main text.
A
LABEL PROPAGATION METHODOLOGY AND VALIDATION
Our method consists of three steps, illustrated in Figure 7 and described below:
(1) Build bipartite graph. First, we build a word-domain co-occurrence bipartite graph 𝐺(𝑤𝑜𝑟𝑑𝑠,
𝑑𝑜𝑚𝑎𝑖𝑛𝑠) leveraging the datasets summarized in Table 1. The 𝑤𝑜𝑟𝑑𝑠nodes correspond to all the
unigrams and bigrams that occur in at least 𝑘different channels (we use 𝑘=30), while the 𝑑𝑜𝑚𝑎𝑖𝑛𝑠
nodes correspond to all the successfully-parsed domains from the millions of video descriptions in
the datasets leveraged. Once nodes are set, we create edges between a 𝑤𝑜𝑟𝑑node and a 𝑑𝑜𝑚𝑎𝑖𝑛
node if there is an instance in our dataset such that the word occurred before an URL belonging to
the domain, either in the same line or in the line right before the URL. The weight of each edge
captures the number of times this ⟨𝑤𝑜𝑟𝑑, 𝑑𝑜𝑚𝑎𝑖𝑛⟩pair co-occurred.
(2) Set seeds. Second, we define a set of “seeds” in this graph, assigning a small set of words and
domains to one of the three categories of interest. Additionally, we also assign counter-examples:
domains and words not related to monetization (which we refer to as seeds of the category Other).
Seeds are obtained from the annotation process carried out when developing the taxonomy and
are shown in Table 5.
(3) Label propagation. Lastly, we perform label propagation following the methodology inspired
by the traditional label propagation algorithm [72]. Our method leverages the matrix 𝑀of shape
(|𝑤𝑜𝑟𝑑𝑠| × |𝑑𝑜𝑚𝑎𝑖𝑛𝑠|) derived from the bipartite graph obtained in step (1), and arrays 𝑤and 𝑑,
of shapes |𝑤𝑜𝑟𝑑𝑠| × 4 and |𝑑𝑜𝑚𝑎𝑖𝑛𝑠| × 4. For the arrays, each column corresponds to one of the
categories ([DO], [PC], [AM], and Other), and each row corresponds to either a word or a domain.
We initialize rows corresponding to the seed words and domains: assigning the value 1 to the row
corresponding to its category, and 0 for the remaining ones. Then at each iteration 𝑗we obtain
new arrays 𝑑𝑗and 𝑤𝑗by:
(1) Multiplying the previous arrays 𝑑𝑗−1 and 𝑤𝑗−1 by L1-normalized versions of 𝑀. We refer to it
as 𝑀𝑑𝑜𝑚𝑎𝑖𝑛, where each column sums to 1, and 𝑀𝑤𝑜𝑟𝑑, where each row sums to 1:
𝑑𝑗= 𝑀𝑇
𝑑𝑜𝑚𝑎𝑖𝑛· 𝑤𝑗−1
and
𝑤𝑗= 𝑀𝑤𝑜𝑟𝑑· 𝑑𝑗−1


---

Characterizing Alternative Monetization Strategies on YouTube
27
Table 5. Seed words and domains. For each category, we depict the seed words and domains used.
[DO]
[PC]
[PO]
[NM]
Word
seeds
donate,
donation,
stream labs, paypal
merch,
merchandise,
shirt,
shirts,
swag,
merch shop,
mugs, mug, coaching, course,
courses, lesson, lessons
promo code, code, dis-
count
intro, follow instagram, facebook,
soundcloud, snapchat, twitch
Domain
seeds
paypal,
sub-
scribestar,
patreon,
gofundme, ko-fi
teespring, bonfire, merchlabs,
represent, crowdmade
amazon,
etsy,
ebay,
skillshare,
squares-
pace, thegreatcourses
facebook, deviantart, twitter, cnn,
dropbox,
washingtontimes,
paste-
bin, videvo, audiomack, canva, t,
soundcloud, tiktok, freesfx, tiktok,
imgur, pinterest, wired, snapchat,
pnas, tapas, washingtonpost
(2) L1-normalizing the arrays 𝑑𝑗and 𝑤𝑗so that each column sums to 1.
(3) “Clamping” the arrays 𝑑𝑗and 𝑤𝑗: for rows corresponding to the seed words and domains: we
assign the value 1 to the row corresponding to its category, and 0 for the remaining ones.
Convergence of this method is guaranteed [72]. We repeat this process until we have a small change
between arrays 𝑑𝑗and 𝑑𝑗−1 (|𝑑𝑗−𝑑𝑗−1| < 10−15). Final arrays 𝑑and 𝑤contain the inferred labels
for all words and domains in the graph. We obtained 736 domains related to donations ([DO]),
36,958 domains related to affiliate marketing ([AM]), 1565 domains related to products sold by the
channel ([PC]) and 136,161 domains not related to monetization ([NM]).
Validation. We validated our results by manually annotating samples. We performed the task both
at the domain level as well as at the URL level:
• Domain-level validation For our first validation effort, we manually annotated three sam-
ples containing 500 domains in total. Two authors of this paper individually inspected each
domain, analyzing the top 5 words most frequently used with it, and judged whether the label
given was correct or false. To obtain final labels, the authors then discussed disagreements
individually. The first sample (rstrat) contained, for each possible class, 50 random domains
labeled by the method as the given class (totaling 200 domains). The second sample (pstrat)
contained the 50 most popular domains labeled by our method as each given class (again,
totaling 200 domains). Lastly, the third sample (random) contained 100 randomly sampled
domains. The rationale behind these different sampling mechanisms is to analyze how our
methodology performed in different scenarios. Results are reported in Table 6a-b. Additionally,
Table 7 reports random sub-samples (𝑛=10 for each category/sample).
• URL-level validation For our second validation effort, we manually annotated a sample of
400 videos. To obtain this sample, for each URL-related category,10 we sampled 100 random
videos such that at least one URL in the video description linked to the domain that is
labeled with the category. Then, two authors of this paper individually inspected each video
description and annotated whether the first URL in the video description that points to
the domain in question was aligned with the label. To obtain final labels, the authors then
discussed disagreements individually. Note that this criterion is stricter than what was used
for the domain-level validation. For example, amazon.com is a domain commonly associated
10Product Channel, Affiliate Marketing, Donation and Other; note that Cryptocurrencies were not validated this way
because matching is exact.


---

28
Yiqing Hua et al.
Table 6. Validation Results. We depict the result of our validation efforts at the domain level (in a and b)
and at the URL level (in c).
(a) Precision of our method on different random samples according to the
domain-level validation.
Sample
𝑛
[DO]
[PC]
[AM]
[NM]
rstrat
200
26%
100%
92%
68%
pstrat
200
60%
88%
100%
92%
random
100
. . . . . . . . . . . . 84% . . . . . . . . . . . .
(b) Confusion matrix for the pstrat sample showing
when and how our method makes mistakes in the
domain-level validation.
Real
Pred.
[DO]
[PC]
[AM]
[NM]
[DO]
30
0
0
3
[PC]
0
44
0
0
[AM]
0
4
50
3
[NM]
20
2
0
44
(c) Confusion matrix for the URL-level validation
showing when and how our method makes mistakes.
Real
Pred.
[DO]
[PC]
[AM]
[NM]
[DO]
98
0
0
0
[PC]
1
99
18
5
[AM]
0
0
75
1
[NM]
1
1
7
94
with Affiliate Marketing, and was annotated as such in the domain-level validation. Yet,
sometimes users can share Amazon links that are not Affiliate Marketing, for example, to
advertise for a book that they have written. The domain-level annotation does not capture
this nuance, while the URL-level annotation does. Results are reported in Table 6c.
Shortcommings and post-processing. As shown in Table 6a-b, our method performs particularly
poorly ([DO]) for donation domains in both the pstrat and the rstrat samples. Our manual
analysis reveals that our method struggles to distinguish between domains related to donations to
streamers (e.g., patreon.com) and those that are related to charity (e.g., orangutan.com). In the
pstrat sample, for instance, out of the 20 times the method wrongly assigned [DO] to a domain in
the pstrat sample, in 15 cases, the domain belongs to some charity. We speculate that this happens
because the set of words used to describe these two different kinds of domains is indistinguishable
at times (donate, support, etc). Fortunately, however, donation-related domains ([DO]) are the
category with the fewest assigned domains (731). Moreover, most of the domains assigned in this
category occur very sparsely, for example, 62% of them occur in only 1 or 2 distinct channels. Note
that the top 50 most popular donation domains cover over 95% of all usages of donation domains.
Thus, to address this issue, we manually correct the labels of the top 50 most popular domains
labeled as donations, improving the quality of annotation altogether.
After correcting for this issue, the results shown in Table 6c, show that our model is highly
accurate at the URL level. In total, our method achieves 91.5% accuracy. However, we also find that
our methodology may fail to distinguish between the Affiliate Marketing category ([AM]) and the
Products Channel category ([PC]), predicting the later as the former. False positive cases typically
occur when the channel creator promotes a product by the channel using common shopping
websites, for example, selling a book that they have written on Amazon. We find no good solution
for this issue. This bias might lead to an over-estimation of the Affiliate Marketing category ([AM])
and a under-estimation of the Products Channel category ([PC]) in our analyses.


---

Characterizing Alternative Monetization Strategies on YouTube
29
Table 7. Showcase of results. For each stratum (shown in the rows) and each category, (shown in the
columns), we depict 10 randomly sampled domains obtained through our method. Mistakes are underlined.
For the random sample, we instead show 40 randomly sampled domains (out of the 100 domains in the
sample).
[DO]
[PC]
[PO]
[NM]
rstrat
vrdonate,
muslimaid,
theintrepidfoundation,
kilmanjaromusic,
whatis36,
menageriecoffee,
freakinrad,
sportable,
beyondtype1,
jedfoundation
campuscustoms,
every-
thingcerti,
danielhowell,
youinkit,
jumpstartaffil-
iate,
contextualelectron-
ics,
bloggerworkshop,
wemakeyoulaugh-
films,
allinmerch,
starsnipemerch
supernutritionacademy,
mezeaudio,
fishinglyn,
pul-
sateathleticwear,
jerseysfc,
babybykyra,
scarletim-
print,
glamorhairlondon,
elitemetaltools, disneysprings
toskanaferien,
modjunkiez,
tes,
thedrunkentaoist,
lisajblog,
yungeldr,
frasiersterlingjew-
elry,
cascaderecords,
sennheiser, izaha
pstrat
mycause,
hatreon,
onelist,
youcaring,
duapps,
unitedwayhouston,
pitch-
inbox,
orangutan,
flattr,
matcherino
teepublic,endoapparel,
wpengine,
danand-
philshop,
eivor,
myteespring,
mrfiji-
wiji,
postmaloneshop,
shopredhare, fanfiber
elfcosmetics,
urbanoutfitters,
romwe,
forever21,
bestbuy,
magik, colourpop, nordstrom,
sephora, homedepot
steampowered,
band-
camp, github, lnk, mega,
gleam,
app,
myspace,
strawpoll, spotify
random
bloggerworkshop, tedyandreas, senreve, tactics, sfbags, primerpeak, glamorhairlondon, lorac, orbxdirect, hisonjetski, jer-
seysfc thejakartapost, sennheiser, njstreetworkout, pocoyo, yesterdayorigins, sixblindkids, viridianmusic, yungeldr, one-
tiredworkingmommy, cascaderecords, cqcbmachinery, drnikkistarr, xboxachievements, nextschool, toptiertactics, aqicn,
bootdiskrevolution, businessesforsale, shawngmusic, evilcontrollers, jwmusic, stormfreerun, puregold, khoasellsflorida,
izaha, partyideasuk, hivesforhumanity, yurptm, wt1


---

30
Yiqing Hua et al.
Fig. 8. Popularity and alternative monetization for different categories: we repeat the analysis done
in Figure 2 considering different channel categories separately.
Fig. 9. Prevalence of alternative monetization through the years for different categories: we repeat
the analysis done in Figure 3a considering different channel categories separately.
