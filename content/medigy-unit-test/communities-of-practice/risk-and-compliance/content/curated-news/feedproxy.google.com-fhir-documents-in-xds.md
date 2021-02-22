---
aliases: /news/fhir-documents-in-xds
archetype: newscenter
mastHead: "Risk and Compliance CoP"
metaTitle: "FHIR documents in XDS"
metaDesc: "How does one put a FHIR Document into XDS?How does one find a FHIR Document in XDS? Both questions are asking very similar things. The key is the XDS fundamental metadata element mimeType. Let me explain&#8230; XDS, more broadly the whole Document Sharing family, including XDS, XCA, XDR and XDM"
ogUrl: "/communities/risk-and-compliance/curated-news/feedproxy.google.com-fhir-documents-in-xds/"
ogImage: "/communities/fhir-documents-in-xds.jpg"
Categories:
  - Cybersecurity
date: 2017-01-10
author: Opsfolio Community
featuredImage: fhir-documents-in-xds.jpg
ogimage: fhir-documents-in-xds.jpg
description: 'How does one put a FHIR Document into XDS?How does one find a FHIR Document in XDS? Both questions are asking very similar things. The key is the XDS fundamental metadata element mimeType. Let me explain&#8230; XDS, more broadly the whole Document Sharing family, including XDS, XCA, XDR, XDM, and&hellip;'
twitterdescription: FHIR documents in XDS
twittertitle: FHIR documents in XDS
brand: feedproxy.google.com
herf:
  - http://feedproxy.google.com/~r/HealthcareSecurity/privacy/~3/aspexzWFa8s/fhir-documents-in-xds.html
original:
  - http://feedproxy.google.com/~r/HealthcareSecurity/privacy/~3/aspexzWFa8s/fhir-documents-in-xds.html
cleanUrl:
  - http://feedproxy.google.com/~r/HealthcareSecurity/privacy/~3/aspexzWFa8s/fhir-documents-in-xds.html
sourceUrl:
  - http://feedproxy.google.com/~r/HealthcareSecurity/privacy/~3/aspexzWFa8s/fhir-documents-in-xds.html
searchCategory: News
slug: feedproxy.google.com-fhir-documents-in-xds
source: WordPress-curations
sub: news
title: FHIR documents in XDS
contentcategories: "medigy-risk-and-compliance-curated-news"
type: communities/medigy-risk-and-compliance
breadcrumbs:
 - Home
 - Communities
 - Risk And Compliance
 - Curated News
 - FHIR documents in XDS
breadcrumbLinks:
 - "/"
 - "/"
 - "/communities/risk-and-compliance/"
 - "/communities/risk-and-compliance/curated-news/"
 - 
---
How does one put a FHIR Document into XDS?How does one find a FHIR Document in XDS?
Both questions are asking very similar things. The key is the XDS fundamental metadata element mimeType. Let me explain&#8230;
XDS, more broadly the whole Document Sharing family, including XDS, XCA, XDR, XDM, and MHD. With a set of more narrow IHE Profiles in DSUB, MPQ, SeR, and MU.
To learn more on Document Sharing, start here: &nbsp;Eating an Elephant &#8212; How to approach IHE documentation on Health Information Exchange (HIE)

So the Document Sharing family is a Content Agnostic mechanism for sharing Patient specific Documents. Where the only thing that fixed is that this is an exchange for&nbsp;



Patient Specific content &#8212; so all the documents must be about a specified patient
Document format &#8212; so it is not a REST server.

Metadata &#8212; all the other metadata in XDS is there to help with searching or navigating through the documents than have been shared to find the right one to retrieve.
Initially Document Sharing was about &#8216;historic&#8217; documents. That is a document is published, and in the future it can be discovered and retrieved. Thus the Document is &#8220;Shared&#8221;. &nbsp;Later it gained support for &#8220;On-Demand&#8221; documents. That is a document that is created when it is retrieved. An On-Demand document is still a document, it is just created a the time it is retrieved, and thus contains the current knowledge about that patient at the time. &nbsp;Both of these might still be needed for FHIR Documents.

FHIR is more popularly known for the access model using http REST. That is where there is a server that holds current version of the knowledge. Systems can &#8220;Create&#8221;, &#8220;Read&#8221;, &#8220;Update&#8221;, and &#8220;Delete&#8221; (CRUD) the knowledge using the https protocol.&nbsp;

FHIR has a Document model. It is abstractly very similar to CDA, but uses all the more simple Resources and Encoding that FHIR has to offer. A FHIR Document is contained in a Bundle, and has a Composition, and all kinds of other stuff. &nbsp;There is also a workgroup creating transforms from/to CDA &#8212; CDA on FHIR. I am not here t give a tutorial on&nbsp;FHIR Documents, but need it clear that FHIR has the&nbsp;Document&nbsp;concept.
This is where the question comes from&#8230; If I have a FHIR Document, how would I publish that into XDS? If I want FHIR Document, how would I find them in my XDS system? &nbsp;&#8212; or more broadly any of the Document Sharing, because this applies to XDM (Direct Secure Messaging), and other&#8230;

So the FHIR Document, is Patient specific&#8230; so it should be clear how the Patient identity is related.
Key to FHIR Documents in XDS
The key is that XDS has a metadata element &#8220;mimeType&#8221;. It is this that is the differentiates CDA from FHIR. So for a FHIR document the mimeType is either going to be:

XML:&nbsp;application/fhir+xml
JSON:&nbsp;application/fhir+json

FormatCode might be more powerful

The XDS formatCode holds the indicator of the technical format that the document follows. This is most of the time a URN that is defined in an IHE Profile, or other external body. This is very possible with FHIR Documents too.


I expect a set of FHIR specific &#8220;Implementation Guide&#8221;, which is FHIR concept of an IHE Profile. of FHIR Documents to happen, these &#8216;profiles&#8217; would have FHIR &#8216;StructureDefinition&#8217; based constraints. The unique identifier for that StructureDefinition would go into the formatCode.
All the other metadata simply explain the content.&nbsp;

All the other metadata is just as applicable to a FHIR Document is it is to CDA, PDF, DICOM, or any other format. Note that XDS is happy to carry proprietary formats like WORD too.

More reading&nbsp;Document Sharing Management (Health Information Exchange &#8211; HIE)


IHE #FHIR profiles &#8211; MHD, PDQm, and PIXm
MHD &#8211; Why use of FHIR Contained?
IHE FormatCodes are mandatory&nbsp;
In Wisconsin we have Interoperability&nbsp;
What is MHD beyond XDS-on-FHIR?&nbsp;
Health Information Exchange: Centralized, Federated, or Distributed
Define&nbsp;Atom&nbsp;&#8212; Too many definitions in use today&nbsp;
Eating an Elephant &#8212; How to approach IHE documentation on Health Information Exchange (HIE)
Distinction between Documents and Messages
Understanding XDS metadata &#8211; IHE re-documentation effort
XDS Notifications
HIE Patient Identity problem
Healthcare Metadata&nbsp;
Minimal Metadata
What is the benefit of an HIE
Karen&#8217;s Cross or just Minimal Metadata
HIE using IHE





