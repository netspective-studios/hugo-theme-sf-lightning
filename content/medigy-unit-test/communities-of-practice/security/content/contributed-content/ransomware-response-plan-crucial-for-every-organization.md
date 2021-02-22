---
aliases: /contributed-content/ransomware-response-plan-crucial-for-every-organization
archetype: contributor-center
mastHead: "Security CoP"
metaTitle: "Ransomware Response Plan – Crucial for Every Organization"
metaDesc: "It is crucial to decide beforehand what the organization would do if it has contractual agreements to deliver vendor or client data, but it cannot do so because that data is encrypted. Some additional force majeure type clauses may have to be inserted in all the contracts if possible stating that if the organization is under Ransomware attack and the data is still encrypted; it will not be able to provide it. This scenario has to be looked at from the legal point of view and also should be compliant with the company incorporation rules and laws." 
ogUrl: "/communities/security/contributed-content/ransomware-response-plan-crucial-for-every-organization/"
ogImage: "/communities/security/contributed-content/Managing-contractual-obligations.jpg"
categories:
  - Cybersecurity
  - Ransomware
date: 2017-03-01 11:41:39
author: Shaikh Adil Gul
featuredImage:
  format: JPEG
  href: Managing-contractual-obligations.jpg
  size:
    - 1000
    - 600
  wpAttachment:
    fileName:
    link:
description: 'It is crucial to decide beforehand what the organization would do if it has contractual agreements to deliver vendor or client data, but it cannot do so because that data is encrypted. Some additional force majeure type clauses may have to be inserted in all the contracts if possible stating that if the organization is under Ransomware attack and the data is still encrypted; it will not be able to provide it. This scenario has to be looked at from the legal point of view and also should be compliant with the company incorporation rules and laws.'
twitterdescription: Ransomware Response Plan – Crucial for Every Organization
twittertitle: Ransomware Response Plan – Crucial for Every Organization
link:
  brand:
  herf:
  original:
openProjectCustomFields:
  cleanUrl:
  sourceUrl:
searchCategory: News
slug: ransomware-response-plan-crucial-for-every-organization
source: Opsfolio-curations
sub: Contributor center
title: Ransomware Response Plan – Crucial for Every Organization
contentCategories: medigy-security-contributed-content
type: communities/medigy-security
breadcrumbs:
 - Home
 - Communities
 - Security
 - Contributed Content
 - 'Ransomware Response Plan – Crucial for Every Organization'
breadcrumbLinks:
 - "/"
 - "/communities/"
 - "/communities/security/"
 - "/communities/security/contributed-content/"


---
![Ransomware Response Plan - Crucial for Every Organization](/images/Managing-contractual-obligations.jpg)

It is crucial to decide beforehand what the organization would do if it has contractual agreements to deliver vendor or client data, but it cannot do so because that data is encrypted. Some additional force majeure type clauses may have to be inserted in all the contracts if possible stating that if the organization is under Ransomware attack and the data is still encrypted; it will not be able to provide it.

This scenario has to be looked at from the legal point of view and also should be compliant with the company incorporation rules and laws. All contracts should be modified appropriately after consulting with the organization’s lawyer, and an external law firm. This process should be part of the RRP.

**Cost of downtime, value of data, future financial impact**

The cost of downtime, the value of data and future financial impact due to degradation of organization’s reputation should be calculated by the RTC. The cost of downtime and the value of data also depends on if some or all critical assets became encrypted/inaccessible.

How many employees are affected?

What is the average employee’s earning (per hour)?

What are the average overhead costs of affected employees?

How much revenue loss would the organization suffer every hour if employees do not work since they cannot access their data?

Calculations such as Single-Loss Expectancy (SLE) can be used to determine the damage done to organization’s profits.

Estimation of the value of data itself is possible from the black market rate, for credit cards, it is $1 per record, and for healthcare, just a portion of PHI is $50 per record.

The future financial impact is dependent on the organization’s image and reputation in the market, client goodwill, and brand value. If these are affected, there could be a drop in the number of customers and transactions in the future.

Additional costs could include fines and penalties for violating confidentiality and privacy agreements by having possible disclosure of sensitive information during Ransomware attack. HIPAA-covered entities may be subject to steep penalties for violating regulations and wrongful disclosure of PHI.

The RRP should have a worksheet/model/simulation with formulas/algorithms for calculating the cost of downtime, the value of data and the future financial impact. It estimates these costs in dollar per hours or days by plugging in the amount/type of data, and the number of employees and the departments affected. This worksheet gives the total financial impact (TFI) to the organization.

**Evaluate data restore from backup**

RTC should also evaluate restoring from backup and submit a report to the RRC in a pre-defined time. For this purpose, the backup should be analyzed to determine its current state:

1.  When was the backup taken last?
2.  Is everything backed up, including user/directory information, machine state information, and other required data?
3.  How often are backups done? Every day? Every hour? Every week?
4.  Was there a monthly or quarterly testing schedule for backup/restore?
5.  Has testing been done on recovering from backup in different scenarios to see how long it takes and make sure it works reliably?
6.  Have reports of the last restore test analyzed for success/failure rates.
7.  Is there a 3-2-1 backup strategy that requires three copies of the data in two different locations, one of them at an offsite location?
8.  Was there a mechanism to ensure that some of the backups were offline to reduce the risk of these getting encrypted as well by Ransomware? New variants encrypt unmapped shares as well. Does the backup system use proprietary format on the media that is not assessable by Ransomware?
9.  Is all the data on a SAN/NAS and does it have recovery option?
10.  Is Cloud backup used and does it have recovery option?

All these should be part of RRP.

**Restore from backup**

After the current state of the backup is known, the RRC should immediately meet and decide to restore data from backup considering the time required to do this. The RRM should make the final decision. If data is restorable from the backup completely and the time to restore is reasonable, then it should be done. The maximum duration to make this decision should be in the RRP.

**Pre-allocation of funds for payment of ransom**

Getting approvals and authorization for ransom payment may take considerable time depending on the authority required and payment approval process. It is recommended that organizations pre-approve and keep few thousands of dollars in a separate account for ransom payment only.

**Buying digital currency in advance**

The Ransom has to be paid using digital currency like Bitcoins. An organization can set up its Bitcoin account, or it could use a third-party service. Setting up a Bitcoin or other digital currency account, transferring funds to it and making payment to the attacker can be time-consuming and can take up to a week. Can use a Bitcoin ATM if available but it only accepts cash.

Some companies have already purchased Bitcoins to use in case of a ransomware attack. In the UK thirty-three percent of the companies have a ready stockpile of digital currency. All over the world, seven percent of organizations keep bitcoins in hand.

However, buying and holding bitcoins is also a risk, some Bitcoin exchanges have got hacked, and establishments have lost thousands of dollars.

Some hackers ask you to pay a certain number of dollars in equivalent digital currency. However, Bitcoins fluctuate a lot so you may want to buy additional bitcoins if their price goes down.

The decision to purchase digital currency in advance has to be decided by the RRC and specified in RRP.

**Test decryption keys**

The RTC should also test decryption of data by paying ransom for one system only and making sure that the decryption key provided works. Also, evaluate the decryption time.

The lead of the RTC should have access to emergency funds and the authority to buy the Bitcoins or other digital currency to get the decryption key for this system only. It would be better to pre-purchase a few bitcoins.

This process also checks if the hackers are sincere, and the keys that they will provide for decryption of the other systems will be legitimate. However, it has happened that the hackers have refused to give the keys on payment of a small amount.

Some hackers are sophisticated enough to offer customer support if required.

The RTC should submit a report to the RRC giving details of the decryption process and the time needed to decrypt a portion of the data.

This SOP should be part of the RRP.

**Make the decision; restore or pay ransom**

The TFI and the total ransom payable is compared bearing in mind that there could be a reduction in the ransom as much as one-tenth of the original amount after negotiation. Compare the data restoration time with the time required to decrypt all the data. This process can help in making a choice to restore from backup or pay the ransom and decrypt the data. The RRC should meet and decide; RRM should make the final decision. This procedure should be part of the RRP.

**Restore from backup**

If RRM decides to restore the data from the backup:

1.  The RRP should have all the SOPs to do this process. The recovery is executed in phases unless the backup system is very sophisticated that restores all the data in one go quickly. If done in segments, essential data and directory information required for operation of the system followed by Emergency Room (ER) data of a hospital, for example, could be restored then data of other departments.
2.  RTC should meet and finalize the restoration from backup as a project specifying timelines, completion time, also allocate appropriate resources which would do this project.
3.  Work on data restoration project should start as soon as possible and get completed within the specified time.
4.  There should be a monitoring mechanism to report the status at predefined intervals to the RTC and the RRC, also to the top management.

This process should be part of the RRP.

**Pay ransom and get decryption keys**

Paying the ransom to retrieve files should be the last resort for anyone. It is important to note at least that by paying a hacker, an organization reinforces the profitability of ransomware to cyber criminals. As more organizations affected by ransomware pay to receive their decryption key, more individuals will distribute ransomware to get easy ransom money.

However, Ransomware has become so sophisticated that FBI advises people to pay the ransom. Only fifty percent of hospitals polled by Healthcare IT News and HIMSS Analytics said that they would not pay the ransom. Sixty-four percent of end users in the US who got ransomware paid the ransom.

Even if the organization does not have any non-encrypted backups of the data, double-check the following options before proceeding further:

1.  Is there any way you can recreate the encrypted data?
2.  Do you have an older version of the data that can be updated quickly?
3.  Does non-encrypted data exist somewhere else, such as on a system at another location or in your DR site?

If RRM decides to pay the ransom and get the decryption keys, the RRP should have all details:

1.  Who is going to negotiate the final price for all the keys? Someone from purchase department who has excellent negotiation skills could be nominated.
2.  Will the keys to all the data be obtained by paying total ransom or for each system one by one? Buying for each system ensures that each key is verified and decrypts the data. If the key does not work, there won’t be a significant loss, but the total payment may be higher as compared to when paying to get the keys for all the data. However, the risks are greater in the latter if keys do not work and nothing can be done to recover the amount already paid for non-working keys. Some hackers may only agree to give the keys on full payment. Another risk is that particular type of ransomware gets shut down by authorities, in this case, it is impossible to get the keys.
3.  Does the organization already have sufficient Bitcoins or other required digital currency?
4.  If not, funds are pre-allocated and available?
5.  If not, who in Finance will authorize the purchase and how long will it take?
6.  If Bitcoins have not been pre-purchased, who will buy them and from where?
7.  Who is going to lead the decryption as a project from the RTC?
8.  RTC should meet and finalize this decryption as a project specifying timelines, completion time, also allocate appropriate resources which would do this project.
9.  Work on decryption project should start as soon as possible and get completed within the completion time.
10.  There should be a monitoring mechanism to report the status at predefined intervals to the RTC and the RRC, also to the top management.

This process should be part of the RRP.

**Ransomware attack post-incident review**

The RRC/RTC should do a post-attack analysis sharing the report with management and relevant stakeholders:

1.  How well did RRC, RTC, IT department, incident response team, other staff, and management perform in dealing with the incident?
2.  Were the documented procedures followed? Were they adequate?
3.  If the data got restored from backup, did it complete within the estimated time?
4.  Were there any files that did not restore from backup due to any reason?
5.  If the ransom got paid and the data got decrypted, was the decryption done within the estimated time?
6.  Did all the decryption keys work and were able to decrypt the data?
7.  Were there any files that did not decrypt for any reason?
8.  Was there any information that was not available?
9.  Were any steps or actions taken that might have delayed the recovery?
10.  Could any unforeseen events be prevented?
11.  What would the RRC, RTC, IT, other staff, and management do differently the next time a Ransomware attack occurs?
12.  How could information sharing with other organizations be improved?
13.  How can corrective actions prevent similar attacks in the future?
14.  What indicators should be monitored in the future to detect attacks?
15.  Should other new cybersecurity products/services be deployed to prevent Ransomware attacks?
16.  What lessons were learned?
17.  How can these results improve the procedures further?
18.  All critical discussions and decisions conducted were recorded during the recovery?

**References**

-   U.S. Department of Justice, “How to protect your Networks from Ransomware”.
-   David Fitzpatrick and Drew Griffin, CNN-Money, “Cyber-extortion losses skyrocket, says FBI”, April 15, 2016, http://money.cnn.com/2016/04/15/technology/ransomware-cyber-security.
-   Intermedia’s “2016 Crypto-Ransomware Study”, February 16, 2016.
-   Radware’s “Global Application and Network Security Report 2016-2017”, January 2017,[https://www.radware.com/ert-report-2016](https://www.radware.com/ert-report-2016)
-   Jack Danahy, Barkly, Venture Beat, “Next wave of ransomware could demand millions”, March 26, 2016.  [http://venturebeat.com/2016/03/26/next-wave-of-ransomware-could-demand-millions](http://venturebeat.com/2016/03/26/next-wave-of-ransomware-could-demand-millions)
-   Analyst Insight, Aberdeen Group “Downtime and Data Loss, How Much Can you Afford?”, August 2013,  [http://resources.idgenterprise.com/original/AST-0113606_Analyst_Insight_Downtime_and_Data_Loss_How_Much_Can_you_Afford.pdf](http://resources.idgenterprise.com/original/AST-0113606_Analyst_Insight_Downtime_and_Data_Loss_How_Much_Can_you_Afford.pdf)
-   Robert Lowes, Medscape Medical News, “Stolen EHR Charts Sell for $50 Each on Black Market”, April 28, 2014,  [http://www.medscape.com/viewarticle/824192](http://www.medscape.com/viewarticle/824192)
-   Mimecast Blog, “It’s Not Just The Ransom You’re Losing: Quantifying the Real Cost of Malware Attacks”, October 2016,  [https://www.mimecast.com/blog/2016/10/its-not-just-the-ransom-youre-losing-quantifying-the-real-cost-of-malware-attacks](https://www.mimecast.com/blog/2016/10/its-not-just-the-ransom-youre-losing-quantifying-the-real-cost-of-malware-attacks)
-   Danny Palmer, ZDNet, “$500 zero-day ransomware attack takes council offline for nearly a week”, February 2, 2016,  [http://www.zdnet.com/article/zero-day-ransomware-attack-takes-council-offline-for-a-nearly-week](http://www.zdnet.com/article/zero-day-ransomware-attack-takes-council-offline-for-a-nearly-week)
-   Jon Toiga, “Disaster Recovery Planning: Managing Risk and Catastrophe in Information Systems,” (Yourdon Press, 1989).
-   Tripwire “Infosecurity Europe 2016 Survey – Ransomware”,  [http://www.tripwire.com/company/research/infosecurity-europe-2016-survey-ransomware](http://www.tripwire.com/company/research/infosecurity-europe-2016-survey-ransomware)
-   Trevor Mogg, Digital Trends “Ransomware attack: A college in Los Angeles just paid $28,000 to hackers”, January 11, 2017,  [http://www.digitaltrends.com/web/la-college-ransomware](http://www.digitaltrends.com/web/la-college-ransomware)
-   Laura Donnelly, The Telegraph “Largest NHS trust hit by cyber attack,” 13 January 2017,  [http://www.telegraph.co.uk/news/2017/01/13/largest-nhs-trust-hit-cyber-attack](http://www.telegraph.co.uk/news/2017/01/13/largest-nhs-trust-hit-cyber-attack)
-   Single Loss Expectancy (Definition)  [http://www.riskythinking.com/glossary/single_loss_expectancy.php](http://www.riskythinking.com/glossary/single_loss_expectancy.php)
-   Security Week News, ‘”Locky” Ransomware Encrypts Unmapped Network Shares’, February 18, 2016,  [http://www.securityweek.com/locky-ransomware-encrypts-unmapped-network-shares](http://www.securityweek.com/locky-ransomware-encrypts-unmapped-network-shares)
-   Mary Chavez, Slait Consulting, “Ransomware: Why Backups Can’t Wait,” October 14, 2016,  [http://www.slaitconsulting.com/blog/ransomware-why-backups-cant-wait](http://www.slaitconsulting.com/blog/ransomware-why-backups-cant-wait)
-   Lawrence Abrams, Bleeping Computer “With the looming threat of Ransomware, should companies stockpile Bitcoins?”, August 11, 2016,  [https://www.bleepingcomputer.com/editorial/security/with-the-looming-threat-of-ransomware-should-companies-stockpile-bitcoins](https://www.bleepingcomputer.com/editorial/security/with-the-looming-threat-of-ransomware-should-companies-stockpile-bitcoins)
-   Tom Simonite, MIT Technology Review, “Companies Are Stockpiling Bitcoin to Pay Off Cybercriminals,” June 7, 2016,  [https://www.technologyreview.com/s/601643/companies-are-stockpiling-bitcoin-to-pay-off-cybercriminals](https://www.technologyreview.com/s/601643/companies-are-stockpiling-bitcoin-to-pay-off-cybercriminals)
-   James Cook, Business Insider UK, “Banks are stockpiling bitcoins in case they get hit with ransomware,” August 11, 2016,  [http://uk.businessinsider.com/interview-with-malwarebytes-ceo-marcin-kleczynski-about-ransomware-2016-8](http://uk.businessinsider.com/interview-with-malwarebytes-ceo-marcin-kleczynski-about-ransomware-2016-8)
-   Gertrude Chavez-Dreyfuss, Reuters “Cyber threat grows for bitcoin exchanges,” August 29, 2016,  [http://www.reuters.com/article/us-bitcoin-cyber-analysis-idUSKCN11411T](http://www.reuters.com/article/us-bitcoin-cyber-analysis-idUSKCN11411T)
-   Andrew Dalton, Engadget, “Ransomware hackers get their money, then ask for more,” 24 May 2016,  [https://www.engadget.com/2016/05/24/ransomware-hackers-get-paid-ask-for-more](https://www.engadget.com/2016/05/24/ransomware-hackers-get-paid-ask-for-more)
-   Dan Turkel , Business Insider “Hackers are now offering ‘customer support’ to the victims they extort money from”, Dan Turkel Jan. 9, 2016,  [http://www.businessinsider.com/ransomware-writers-offer-customer-support-to-victims-2016-1](http://www.businessinsider.com/ransomware-writers-offer-customer-support-to-victims-2016-1)
-   Paul, The Security Ledger, “FBI’s Advice on Ransomware? Just Pay The Ransom.”, October 22, 2015,  [https://securityledger.com/2015/10/fbis-advice-on-cryptolocker-just-pay-the-ransom](https://securityledger.com/2015/10/fbis-advice-on-cryptolocker-just-pay-the-ransom)
-   Tom Sullivan, Healthcare IT News “More than half of hospitals hit with ransomware in last 12 months”, April 7, 2016,  [http://www.healthcareitnews.com/news/more-half-hospitals-hit-ransomware-last-12-months](http://www.healthcareitnews.com/news/more-half-hospitals-hit-ransomware-last-12-months)
-   Herb Weisbaum, NBC NEWS “Ransomware: Now a Billion Dollar a Year Crime and Growing”, January 9, 2017,  [http://www.nbcnews.com/tech/security/ransomware-now-billion-dollar-year-crime-growing-n704646](http://www.nbcnews.com/tech/security/ransomware-now-billion-dollar-year-crime-growing-n704646)
-   Barracuda Solution Brief, “Recovering from Ransomware with Barracuda Backup”, 2016,  [https://www.barracuda.com/assets/docs/dms/Barracuda_Backup_SB_Recovering_from_Ransomware_US.pdf](https://www.barracuda.com/assets/docs/dms/Barracuda_Backup_SB_Recovering_from_Ransomware_US.pdf)
-   Doug Pollack, IAPP, “Bitcoin’s strategic place in ransomware”, September 27, 2016,  [https://iapp.org/news/a/bitcoins-strategic-place-in-ransomware](https://iapp.org/news/a/bitcoins-strategic-place-in-ransomware)