---
aliases: /contributed-content/penetration-testing-methodology-pci-dss
archetype: contributor-center
mastHead: "Risk and Compliance CoP"
metaTitle: "Penetration Testing Methodology for PCI DSS"
metaDesc: "The Payment Card Industry Data Security Standard (PCI DSS), which applies to all organizations that process, store, or transmit credit card information, was established over a decade ago to reduce the risk of credit fraud. PCI DSS has evolved over the years, but penetration testing was recently incorporated as a requirement."
ogUrl: "/communities/risk-and-compliance/contributed-content/penetration-testing-methodology-pci-dss"
ogImage: "/communities/risk-and-compliance/Penetration-Testing-Methodology.jpg"
categories:
  - PCI DSS
  - Penetration Testing
date: 2017-12-15 11:46:09
author: Savaram Ravindra
featuredImage:
  format: JPEG
  href: Penetration-Testing-Methodology.jpg
  size:
    - 768
    - 461
  wpAttachment:
    fileName:
    link:
description: 'The Payment Card Industry Data Security Standard (PCI DSS), which applies to all organizations that process, store, or transmit credit card information, was established over a decade ago to reduce the risk of credit fraud. PCI DSS has evolved over the years, but penetration testing was recently incorporated as a requirement.'
twitterdescription: Penetration Testing Methodology for PCI DSS
twittertitle: Penetration Testing Methodology for PCI DSS
link:
  brand:
  herf:
  original:
openProjectCustomFields:
  cleanUrl:
  sourceUrl:
searchCategory: News
slug: penetration-testing-methodology-pci-dss
source: Opsfolio-curations
sub: Contributor center
title: Penetration Testing Methodology for PCI DSS
contentCategories: medigy-risk-and-compliance-contributed-content
type: communities/medigy-risk-and-compliance
breadcrumbs:
 - Home
 - Communities
 - Risk and compliance
 - Contributed Content
 - 'Penetration Testing Methodology for PCI DSS'
breadcrumbLinks:
 - "/"
 - "/"
 - "/communities/risk-and-compliance/"
 - "/communities/risk-and-compliance/contributed-content/"


---
![Penetration Testing Methodology for PCI DSS](/images/Penetration-Testing-Methodology.jpg)

The Payment Card Industry Data Security Standard (PCI DSS), which applies to all organizations that process, store, or transmit credit card information, was established over a decade ago to reduce the risk of credit fraud. PCI DSS has evolved over the years, but penetration testing was recently incorporated as a requirement.

Since there are various types of penetration tests and because the test is often confused with vulnerability scanning, many organizations fail to meet the new requirement. As such, I’ve highlighted some of the key areas an organization should pay attention to before commencing with the process:

**Vulnerability Scan vs. Penetration Test**

The primary difference between a penetration test and a vulnerability scan is quite simple: usually, a vulnerability scan is entirely automated and offers minimal verification of the vulnerabilities discovered, while a penetration test takes it a step further and attempts to exploit vulnerabilities with the help of manual techniques.

The manual process helps eliminate the false positives from the test’s automated scanning phase and exhibits the actual risk to a business by targeting the systems of a company – an approach a hacker might utilize. When selecting a tool or a vendor for penetration testing, organizations should make sure the process includes manual testing instead of just an automated scan.

**Scope of Penetration Test**

The penetration test must incorporate the perimeter of the Cardholder Data Environment (CDE) and all systems that may impact the CDE if compromised. For a system to be “out of scope” for a penetration test, it should be fully segregated from the CDE, so that the integrity of the CDE would be unaffected in the event of a system compromise.

It is possible to decrease the scope of the test by dividing your network, for instance, through strict firewall rules. A more limited scope may be valuable since it can reduce the cost of the test and make the network more  [secure](https://mindmajix.com/cyberark-training)  if compromised.

It is important to note that an evaluation of segmentation controls is completed at least once a year and performed by an individual who is not a part of the CDE implementation or management team.

**Understanding the Results**

The test results can vary. Nevertheless, all the vulnerabilities involving a “high” amount of risk must be mitigated, either with compensating controls or full mitigation, before the system is compliant with the requirements. The risk ratings depend on various factors, including industry score (i.e., CVSS), ease of exploit, likelihood, and impact.

Implementing compensating controls will have an impact on decreasing the level of risk. However, there are a few vulnerabilities rated as “low” risk in the report of a penetration test, that may affect an individual PCI DSS requirement, and therefore will need remediation before achieving compliance.

The penetration test report must be included as part of the evidence supplied to the Qualified Security Assessor (QSA). Sometimes the additional evidence shared with the QSA will be sufficient to alleviate a vulnerability identified in the penetration test report without the need for additional code or infrastructure changes. Ultimately, whether adequate defenses are in place to mitigate vulnerability and whether an organization will be certified, is determined by the QSA.

**Using a Collaborative Approach**

The party providing the penetration testing services should function as an extension of your internal team with the necessary access and information to meet the project needs. With this approach, the test will be better scoped and will yield better/accurate results.

Providing documentation on cardholder systems, data flow, and a catalog of expected  [services](https://mindmajix.com/)  that must be available enables the testing team to study (in context) the vulnerabilities and focus on areas where significant issues may exist. This approach is usually referred to as ‘white-box testing’ and it replaces the conventional concept of ‘black-box testing,’ in which the attacker has zero knowledge of the system(s) to be targeted. The ‘white box’ method makes sure that the primary vulnerabilities are thoroughly evaluated and nothing significant is missed in the limited time allotted for testing.